import Container from "@/app/customComponents/container"
import CartProducts from "./cartProducts"
import React, { Suspense } from 'react';

const CartPage=()=>{
    
    return(
        <Container>
            <div className="font-bold text-2xl my-4">Your Carts Products</div>
            <Suspense fallback={<div>Loading...</div>}>
                <CartProducts />
            </Suspense>
        </Container>
    )
}

export default CartPage