'use client'

import { useEffect, useState } from "react"
import { Product as productType } from "../types"
import Container from "./container"
import ProductCard from "./productCard"
import useCartStore from "../hooks/useCart"

interface productProps{
    data: productType[]
    isFeatured?: boolean
}

const Product:React.FC<productProps> = ({
    data,
    isFeatured
})=>{
    return(
        <Container>
            <div className="my-8">
                {isFeatured && (
                    <div className="text-3xl font-bold ml-1 mb-2">Featured Products</div>
                )}
                <div className="
                    grid  
                    grid-cols-2 
                    sm:grid-cols-3
                    lg:grid-cols-4
                    xl:grid-cols-5
                    " 
                >
                    {data.map((item) => (  
                        <ProductCard key={item.id} data={item} />
                    ))}
                </div>
            </div>
        </Container>
    )
}


export default Product