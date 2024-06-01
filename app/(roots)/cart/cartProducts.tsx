'use client'

import useCartStore from "@/app/hooks/useCart"
import CartProductCard from "./cartProductCard"
import { Separator } from "@/components/ui/separator"
import { useEffect, useMemo } from "react"
import { IndianRupee } from "lucide-react"
import { Button } from "@/components/ui/button"
import axios from "axios"
import { useRouter, useSearchParams } from "next/navigation"
import toast from "react-hot-toast"
import { useAuth } from "@clerk/nextjs"



const CartProducts = ()=>{
    const searchParams = useSearchParams()
    const {carts,removeAll} = useCartStore()
    const router = useRouter()

    useEffect(()=>{
        if(searchParams.get("success")){
            toast.success("Payment completed.");
            removeAll();
        }
        
        if(searchParams.get("canceled")){
            toast.error("Something went wrong.");
        }
    },[searchParams, removeAll]);

    const totalPrice = useMemo(()=>{
        if(carts.length==0){
            return 0;
        }
        let amount =0;
        for(let i=0;i<carts.length;i++){
            amount += Number(carts[i].price);
        }
        return amount.toString()
    },[carts])

    const checkoutHandler = async ()=>{
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/checkout`,{
            productIds: carts.map((item)=>item.id),
            userId: Math.random()
        })
       window.location = response.data.url;
    }
    return(
        <div>
            {carts.length === 0 ?
                (
                <div className="flex flex-col md:flex-row justify-center text-center md:mt-7 text-xl font-semibold">
                    <div className="w-auto h-auto flex justify-center">
                        <img src="empty-cart.png" alt="image"/>
                    </div>
                    <div className="my-auto">
                        <p>Your Cart Is Empty</p>
                        <p className="text-gray-500 text-sm">Looks like you have not added anything to your cart yet !</p>
                        <Button className="mt-4" onClick={()=>router.push('/')}>Go to home</Button>
                    </div>
                </div>
                ):(
                    <div className="grid lg:grid-cols-7 lg:space-x-3">
                        <div className="lg:col-span-4">
                            <CartProductCard data={carts} />
                        </div>
                        <div className="lg:col-span-3 border-2 border-slate-950 rounded-lg bg-gray-100 p-4 lg:h-48">
                            <h1 className="font-semibold text-lg">Order Summary</h1>
                            <Separator className="bg-black my-2"/>
                            <div className="flex justify-between lg:text-lg lg:mt-4">
                                <p>Total ordered amount </p>
                                <p className="flex"><IndianRupee size={15} className="mt-[4px] lg:mt-[7px] " /> {totalPrice} </p>
                            </div>
                            <Button onClick={checkoutHandler} className="rounded-full mt-3 lg:mt-10 w-full">Checkout</Button>
                        </div>
                    </div>
                )
            }
           
        </div>
    )
}

export default CartProducts