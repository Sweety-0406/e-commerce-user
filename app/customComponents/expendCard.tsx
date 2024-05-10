'use client'

import {
    Dialog,
    DialogContent,
  } from "@/components/ui/dialog"
import { Card } from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { Product } from "../types/page"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { BsBagCheck } from "react-icons/bs"
import { IndianRupee } from "lucide-react"
import useCartStore from "../hooks/useCart"
import toast from "react-hot-toast"


interface expendCardProps{
    isOpen: boolean
    onChange: ()=>void
    data: Product
}  

const ExpendCard:React.FC<expendCardProps> = ({
    isOpen,
    onChange,
    data
})=>{
    const cart = useCartStore()
    const addToCartHandler = () => {
        cart.addCart(data)
        toast.success("Successfully added to the cart")
    }
    return(
        <Dialog open={isOpen} onOpenChange={onChange}>
                <DialogContent className="grid grid-cols-5 ">
                <Tabs defaultValue={data.images[0].id} className="border-transparent col-span-2">
                    {data.images.map((image)=>(
                        <TabsContent key={image.id} value={image.id}>
                        <Card className="flex border-transparent">
                            <img 
                                key={image.id}
                                className={`
                                w-40
                                h-40
                                cursor-pointer
                                rounded-xl border-2 border-black
                                `}
                                src={`${image.url}`} 
                                alt={"image"}  
                            />
                            <div>
                                
                            </div>
                        </Card>
                        </TabsContent>
                    ))}
                    <TabsList className="flex mt-2 bg-transparent  w-full ">
                        {data.images.map((image)=>(
                            <TabsTrigger key={image.id} value={image.id}>
                                <img 
                                key={image.id}
                                    className={`
                                    w-10
                                    h-10
                                    hover:
                                    cursor-pointer
                                    rounded-xl
                                    bg-transparent overflow-hidden 
                                    `}
                                    src={`${image.url}`} 
                                    alt={"image"}  
                                />
                                
                            </TabsTrigger>
                            
                        ))}
                    </TabsList>
            
                </Tabs>
                <div className="w-full col-span-3">
                    <div className="my-2">
                        <div className="text-xl font-bold"> {data.name} </div>
                        <div className="flex text-sm"> <IndianRupee size={12} className="mt-[5px]" /> {data.price} </div>
                    </div>
                    <Separator />
                    <div className="my-2">
                        <h2 className="text-sm">Size: {data.size?.name}</h2>
                        <div className="flex ">
                            <p className="text-sm">Color: </p>
                            <div className = "rounded-full border size-4 mt-1 ml-2"  style={{backgroundColor:data.color?.value }}>  
                            </div>
                        </div>
                        <div onClick={()=>{}}>
                            <Button className="rounded-full mt-5" onClick={addToCartHandler}>
                                <div className="flex space-x-3">
                                    <div>Add to cart</div>
                                    <div><BsBagCheck className="mr-1" size={20}/></div>
                                </div>
                            </Button>
                        </div>
                    </div>
                </div>
                </DialogContent>
            </Dialog>
    )
}

export default ExpendCard