'use client'

import { OrderItem, Product } from "@/app/types"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useRouter } from "next/navigation"

interface orderExpendCardProps{
    isOpen: boolean
    onChange: ()=>void
    data: OrderItem[]
} 

const OrderExpandCard:React.FC<orderExpendCardProps>=({
    isOpen,
    onChange,
    data
})=>{
    const router = useRouter()
    const onClickHandler = (data:OrderItem)=>{
        router.push(`/products/${data.id}`)
    }
    return(
        <Dialog open={isOpen} onOpenChange={onChange}>
        <DialogContent>
            <div className="grid grid-cols-3 md:grid-cols-3 gap-2">
                {data.map((item,index)=>(
                    <img
                    key={index}
                    onClick={()=>onClickHandler(item)}
                    className="object-cover aspect-square w-32 h-32 md:h-48 md:w-48 rounded-lg border-[1px] border-neutral-950 cursor-pointer"
                    src={item.product.images[0].url} 
                    alt="image" />
                ))}
            </div>
        </DialogContent>
        </Dialog>
    )
}

export default OrderExpandCard