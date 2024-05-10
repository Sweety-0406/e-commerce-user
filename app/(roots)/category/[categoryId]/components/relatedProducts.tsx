'use client'

import { getProducts } from "@/actions/getProducts"
import Product from "@/app/customComponents/product"
import { Product as ProductTypes} from "@/app/types/page"
import { Separator } from "@/components/ui/separator"
import { useEffect, useState } from "react"


interface relatedProductsProps{
    categoryId: string
}

const RelatedProducts:React.FC<relatedProductsProps> = ({
    categoryId
})=>{

    const[relatedProducts,setRelatedProducts] = useState<ProductTypes[]>([])
    const[isLoading,setIsLoading] = useState(false)
    useEffect(()=>{
        setIsLoading(false)
        async function fetchProducts() {
            const fetchedProducts = await getProducts({categoryId: categoryId})
            setRelatedProducts(fetchedProducts)
        }
        fetchProducts();
        setIsLoading(true)
    },[categoryId])
    return(
        <div>
            <Product data={relatedProducts} />
            <Separator />
        </div>
    )
}


export default RelatedProducts;