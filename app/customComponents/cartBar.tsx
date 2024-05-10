'use client'

import { Button } from "@/components/ui/button"
import { BsBagCheck } from "react-icons/bs";
import useCartStore from "../hooks/useCart";
import { useRouter } from "next/navigation";

const CartBar = ()=>{

    const cart = useCartStore();
    const router= useRouter()
    return(
        <div>
            <div className="mr-4 ">
                <Button className="rounded-2xl" onClick={()=>router.push('/cart')}>
                    <BsBagCheck className="mr-1" size={20}/>
                    {cart.carts.length}
                </Button>
            </div>
        </div>
    )
}

export default CartBar