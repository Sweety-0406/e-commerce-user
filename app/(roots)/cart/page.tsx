import Container from "@/app/customComponents/container"
import CartProducts from "./cartProducts"
import React, { Suspense } from 'react';

const CartPage= async ()=>{
    return(
        <Container>
            <div className="font-bold pt-44 text-2xl mb-4">Your Carts Products</div>
            {/* <Suspense fallback={<div>Loading...</div>}> */}
                <CartProducts />
            {/* </Suspense> */}
        </Container>
    )
}

export default CartPage