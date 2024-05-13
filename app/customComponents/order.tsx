'use client'

import { HiMiniShoppingBag } from "react-icons/hi2";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const Orders = () =>{
    const router = useRouter()
    return(
        <div className="mr-4 ">
            <Button className="rounded-2xl " onClick={()=>router.push('/order')}>
                <HiMiniShoppingBag className="mr-" size={20}/>
                My orders
            </Button>
        </div>
    )
}


export default Orders;