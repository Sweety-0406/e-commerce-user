'use client'

import { HiMiniShoppingBag } from "react-icons/hi2";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { BsFillSuitHeartFill } from "react-icons/bs";
import CartBar from "./cartBar";

const Orders = () =>{
    const router = useRouter()
    return(
        <div className="mr-4 flex ">
            <BsFillSuitHeartFill 
                fill="red" 
                size={28} 
                className="mt-[6px] cursor-pointer mr-2"
                onClick={()=>router.push('/favourites')}
            />
            <CartBar />
            <Button className="rounded-2xl " onClick={()=>router.push('/order')}>
                <HiMiniShoppingBag className="mr-" size={20}/>
                My orders
            </Button>
        </div>
    )
}


export default Orders;