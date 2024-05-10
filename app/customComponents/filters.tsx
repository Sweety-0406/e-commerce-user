'use client'


import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
import { Color, Product as productType, Size } from "../types"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useState } from "react"
import { getProducts } from "@/actions/getProducts"
import Product from "./product"
import { Separator } from "@/components/ui/separator"

 
const formSchema = z.object({
  size: z.string(),
  color: z.string(),
})

interface filtersProps{
    sizes : Size[],
    colors : Color[],
    categoryId: string
}

const Filter:React.FC<filtersProps> = ({
    sizes,
    colors,
    categoryId
}) => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          size: undefined,
          color: undefined,
        },
    })

    const[isOpen,setIsOpen] = useState(false)
    const[relatedProducts,setRelatedProducts] = useState<productType[]>([])

    const onSubmit = async(values: z.infer<typeof formSchema>)=>{
        const data = await getProducts({
            categoryId: categoryId,
            colorId: values.color,
            sizeId: values.size
        })
        setRelatedProducts(data)
        setIsOpen(true)
        console.log(relatedProducts)
    }
    return(
        <div className="mt-7 ml-4">
            <Sheet>
                <SheetTrigger asChild>
                    <Button className="rounded-full">Filers +</Button>
                </SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                    <SheetTitle>Filters</SheetTitle>
                    <SheetDescription>
                        Select below filters that you want 
                    </SheetDescription>
                    </SheetHeader>
                     <div>
                        <div className="mt-7">
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                                    <FormField
                                    control={form.control}
                                    name="size"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Size</FormLabel>
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <FormControl>
                                                <SelectTrigger>
                                                <SelectValue placeholder="Select a size " />
                                                </SelectTrigger>
                                                </FormControl>
                                                <SelectContent className={`${sizes.length >5 ? "h-48":"h-auto"}`}>
                                                    {sizes.map((item)=>(
                                                        <SelectItem key={item.id} value={item.id} > {item.name} </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                    />
                                    <FormField
                                    control={form.control}
                                    name="color"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Size</FormLabel>
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <FormControl>
                                                <SelectTrigger>
                                                <SelectValue placeholder="Select a size " />
                                                </SelectTrigger>
                                                </FormControl>
                                                <SelectContent className={`${colors.length >5 ? "h-48":"h-auto"}`}>
                                                    {colors.map((item)=>(
                                                        <SelectItem key={item.id} value={item.id} > {item.name} </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                    />
                                    <Button type="submit">Submit</Button>
                                </form>
                            </Form>
                           
                        </div>
                     </div>
                </SheetContent>

                {isOpen && (
                    <div>
                        {relatedProducts.length != 0 ? (
                                <div>
                                    <Product data={relatedProducts} />
                                    <Separator />
                                </div>
                           ):(
                            <div className="ml-2 mt-3 text-lg font-semibold">
                                No records found !
                                <Separator className="mt-4"/>
                            </div>
                           )
                        }
                    </div>
                )}
                </Sheet>
        </div>
    )
}

export default Filter