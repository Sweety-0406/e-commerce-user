'use client'

import {  OrderItem, Product } from "@/app/types"
import { useRouter } from "next/navigation"
import OrderExpandCard from "./orderExpandCard"
import { useState } from "react"
import { MdAddToPhotos } from "react-icons/md";

interface orderItemsProps{
    orderItem:OrderItem[]
}

const OrderedItem:React.FC<orderItemsProps> = ({
    orderItem
})=>{
    const router = useRouter()
    const [isOpen,setIsOpen] = useState(false)
    
    const onChange = ()=>{
        setIsOpen(false)
    }
    const onClickHandler = (data:Product)=>{
        router.push(`/products/${data.id}`)
    }

    return(
        <div>
            <OrderExpandCard onChange={onChange} isOpen={isOpen} data={orderItem} />
            <div className="flex gap-2 m-1">
                {orderItem.length <3 ?
                 (
                    orderItem.map((item,index)=>(
                        <img
                         key={index}
                         onClick={()=>onClickHandler(item.product)}
                         className="object-cover aspect-square w-32 h-32 lg:h-48 lg:w-48 rounded-lg border-[1px] border-neutral-950 cursor-pointer" 
                         src={`${item.product.images[0].url}`} 
                         alt="img" />
                    ))
                 ):(
                    <div className="flex gap-2">
                        <img
                        onClick={()=>onClickHandler(orderItem[0].product)}
                        className="object-cover aspect-square w-32 h-32 lg:h-48 lg:w-48 rounded-lg border-[1px] border-neutral-950 cursor-pointer" 
                        src={`${orderItem[0].product.images[0].url}`} 
                        alt="img" />

                        <img
                        onClick={()=>onClickHandler(orderItem[1].product)}
                        className="object-cover aspect-square w-32 h-32 lg:h-48 lg:w-48 rounded-lg border-[1px] border-neutral-950 cursor-pointer" 
                        src={`${orderItem[1].product.images[0].url}`} 
                        alt="img" />

                        <div 
                        onClick={()=>setIsOpen(true)}
                        className="
                            my-auto
                            object-cover 
                            bg-black 
                            bg-opacity-80 
                            aspect-square 
                            w-28 
                            h-28 
                            lg:h-36 
                            lg:w-36 
                            rounded-full 
                            border-[1px] 
                            border-neutral-950 
                            cursor-pointer
                            flex
                            justify-center
                            items-center
                            " 
                        >
                            <div className="flex flex-col justify-center items-center">
                            <MdAddToPhotos className="text-white w-7 h-7"/>
                            <p className="text-white text-xs ">More Products</p>
                            </div>
                        </div>
                    </div>
                 )}
                
            </div>
        </div>
    )
}

export default OrderedItem