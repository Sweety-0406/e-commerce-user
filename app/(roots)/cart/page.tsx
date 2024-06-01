import Container from "@/app/customComponents/container"
import CartProducts from "./cartProducts"
import React, { Suspense } from 'react';
import { auth } from "@clerk/nextjs/server";
import toast from "react-hot-toast";

const CartPage= async ()=>{
    return(
        <Container>
            <div className="font-bold pt-28 text-2xl mb-4">Your Carts Products</div>
            {/* <Suspense fallback={<div>Loading...</div>}> */}
                <CartProducts />
            {/* </Suspense> */}
        </Container>
    )
}

export default CartPage