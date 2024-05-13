'use client'

import { Button } from "@/components/ui/button"
import { FaCartShopping } from "react-icons/fa6";
import useCartStore from "../hooks/useCart";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { useAuth } from "@clerk/nextjs";

const CartBar = ()=>{

    const cart = useCartStore();
    const {userId} = useAuth();
    const[productNumber,setProductNumber] = useState(0)
    const router= useRouter()
    useEffect(()=>{
        if(!userId){
            setProductNumber(0);
        }
        setProductNumber(cart.carts.length);
    },[userId,cart])
    return(
        <div>
            <div className="mr-4 ">
                <Button className="rounded-2xl" onClick={()=>router.push('/cart')}>
                    <FaCartShopping className="mr-1" size={20}/>
                    {productNumber}
                </Button>
            </div>
        </div>
    )
}

export default CartBar