'use client'
import { Separator } from "@/components/ui/separator"
import { Product, User } from "../types"
import { IndianRupee } from "lucide-react"
import { Expand } from 'lucide-react'
import { ShoppingBag } from 'lucide-react';
import { useRouter } from "next/navigation"
import useCartStore from "../hooks/useCart"
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip"
import { useEffect, useState } from "react"
import ExpendCard from "./expendCard"
import toast from "react-hot-toast"
import useFavouriteStore from "../hooks/useFavourite"
import { useAuth } from "@clerk/nextjs"

interface productCardProps{
    data:Product,
}

const ProductCard:React.FC<productCardProps> = ({
    data,
})=>{
    const[isOpen,setIsOpen] = useState(false)
    const cart = useCartStore();
    const favItem = useFavouriteStore();
    const[isFavourite,setIsFavourite] = useState(false)
    const router = useRouter()
    const {userId} = useAuth()

    useEffect(()=>{
        const isPresent = favItem.items.find((item)=>item.id === data.id)
        if(isPresent){
            setIsFavourite(true)
        }
    },[data,favItem.items])

    const onClickHandler = ()=>{
        router.push(`/products/${data.id}`)
    }
    
    const addToCartHandler = (data:Product) => {
        cart.addCart(data)
    }
    const onChange = ()=>{
        setIsOpen(false)
    }

    const favoriteHandler = (data:Product) => {
        if(!userId){
            setIsFavourite(false);
            toast.success("You are not login. Please login!")
            return;
        }
        if(isFavourite){
            setIsFavourite(false);
            favItem.removeItem(data.id);
        }else{
            setIsFavourite(true);
            favItem.addItem(data);
        }
    }
    
    return(
       <div>
            <ExpendCard isOpen={isOpen} onChange={onChange} data={data} />
            <div className="mt-3 mr-3 ">
                <div  className="border-2 p-1 rounded-xl border-gray-800" >
                    <div className="rounded-xl overflow-hidden mb-2">
                        <div className="relative">
                            <div className="absolute left-[98%]">
                            <div 
                            onClick={()=>favoriteHandler(data)}
                            className="
                            cursor-pointer
                            hover:opacity-70
                            relative
                            ">
                                <AiOutlineHeart
                                size={26}
                                className="
                                absolute
                                fill-black
                                top-3
                                right-[17px]
                                
                                "
                                />
                                <AiFillHeart
                                size={23}
                                className={`
                                absolute
                                ${isFavourite?'fill-rose-500':'fill-white'}
                                top-[13.2px]
                                right-[18.4px]
                                `}
                                />
                            </div>
                            </div>
                            <img 
                            onClick={onClickHandler}
                            className="
                            w-full
                            h-52
                            cursor-pointer
                            rounded-xl
                            
                            "
                            src={`${data.images[0].url}`} 
                            alt={"image"}  
                            />
                        <div className="flex space-x-3 z-50 -mt-10 mb-3 text-center  justify-center "> 
                        <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger>
                                        <Expand size={30} className="bg-black text-white p-[3px] rounded-full cursor-grab" onClick={()=>setIsOpen(true)}/>
                                    </TooltipTrigger>
                                    <TooltipContent className="bg-black text-white">
                                        <p>Click to expend</p>
                                    </TooltipContent>
                                </Tooltip>
                        </TooltipProvider>
                        <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger>
                                        <ShoppingBag size={30} className="bg-black text-white p-[3px] rounded-full cursor-pointer" onClick={()=>addToCartHandler(data)}/>
                                    </TooltipTrigger>
                                    <TooltipContent className="bg-black text-white">
                                        <p>Add to cart</p>
                                    </TooltipContent>
                                </Tooltip>
                        </TooltipProvider>
                        </div>
                        </div>
                        
                    </div>
                    <Separator />
                    <div className="ml-2 ">
                        <div className="text-black text-sm font-semibold" > {data.name} </div>
                        <div className="text-xs  text-gray-700" > {data.category.name} </div>
                        <div className="flex">
                            <IndianRupee size={15} className="mt-1" />
                            {data.price} 
                        </div>
                    </div>
                </div>
            </div>
       </div>
    )
}

export default ProductCard