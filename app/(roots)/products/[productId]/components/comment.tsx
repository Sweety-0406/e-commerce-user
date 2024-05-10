'use client'

import axios from "axios"
import { redirect, useRouter } from "next/navigation"
import {  set, useForm } from "react-hook-form"
import toast from "react-hot-toast"
import { Comment } from "@/app/types/page"
import { Button } from "@/components/ui/button"
import { TbSend2 } from "react-icons/tb";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Separator } from "@/components/ui/separator"
import { useEffect, useState } from "react"
import { getComments } from "@/actions/getCommets"
interface commentListProps{
    productId: string
    storeId: string
}

const formSchema = z.object({
    content: z.string().min(5, {
      message: "content must be at least 5 characters.",
    }),
  })
const CommentList:React.FC<commentListProps> =({
    productId,
    storeId
})=>{
    const router = useRouter()
    const[comments,setComments] = useState<Comment[]>([])
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          content: "",
        },
    })

    const onSubmit = async (values: z.infer<typeof formSchema>) =>{
        console.log(values)
        try {
            const res =await axios.post(`http://localhost:3000/api/${storeId}/products/${productId}/comments`,values)
            toast.success("comment is successfully submitted.") 
            setComments([ res.data,...comments]);
            form.reset();
            router.refresh()
        } catch (error) {
            console.log(error)
            toast.error("comment is not submitted")
        }
    }

    useEffect(()=>{
        async function fetchComments() {
            try {
                const fetchedComments = await getComments( productId );
                setComments(fetchedComments)
                router.refresh()
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        }

        fetchComments();
    },[setComments,productId,getComments,router])
    return (
        <div className="
        mt-4
        border-2
        border-slate-700
        rounded-xl
        h-[40vh]
        sm:h-[445px]
        xl:h-[500px]
        p-4
        overflow-y-scroll
        ">
            <div>
                <div className="flex space-x-2 mb-2">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="flex space-x-1">
                        <FormField
                        control={form.control}
                        name="content"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel className="text-lg">Comment</FormLabel>
                            <FormControl>
                                <Input className="focus:ring-offset-blue-200 focus-visible:ring-0"  placeholder="Add comment..." {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                        <Button size={"sm"} className="mt-9" type="submit"><TbSend2 size={15} /></Button>
                    </form>
                </Form>
                </div>
                <Separator />
                {comments==null || comments?.length === 0  ?
                    (
                        <div className="mt-5 font-[500]">
                            No Comment...
                        </div>
                    ):(
                        <div className="mt-5">
                            <div className="text-md">Comments</div>
                            {comments.map((item)=>{
                                return(
                                    <div className="mb-1 border-2 border-slate-500 rounded-md pl-2" key={item.id}>
                                        <h3 className="text-sm mb-1">{item.content}</h3>
                                        <hr />
                                    </div>
                                )
                            })}
                        </div>
                    )
                }
           </div>
        </div>
    )
}

export default CommentList