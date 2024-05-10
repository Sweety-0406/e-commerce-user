'use client'
import { Product,Comment } from "@/app/types/page"
import { Separator } from "@/components/ui/separator"
import { IndianRupee } from "lucide-react"
import Gallery from "./Gallery"
import { Button } from "@/components/ui/button"
import { BsBagCheck } from "react-icons/bs"
import ProductCard from "@/app/customComponents/productCard"
import { useEffect, useState } from "react"
import { getProducts } from "@/actions/getProducts"
import useCartStore from "@/app/hooks/useCart"
import toast from "react-hot-toast"
import CommentList from "./comment"
import { getComments } from "@/actions/getCommets"

interface mainProductProps{
    data: Product,
    productId?: string
}
const MainProduct:React.FC<mainProductProps>=({
    data,
    productId
})=>{
    const cart = useCartStore()
    const[relatedProducts,setRelatedProducts] = useState<Product[]>([])
    useEffect(()=>{
        async function fetchProducts() {
            try {
                const fetchedProducts = await getProducts({ categoryId: data.categoryId });
                setRelatedProducts(fetchedProducts)
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        }

        fetchProducts();
    },[data.categoryId])



    const addToCartHandler = () => {
        cart.addCart(data)
    }
    return(
        <div>
            <div className="grid sm:grid-cols-5 lg:grid-cols-2 gap-4 my-7">
                <div className="w-full  sm:col-span-3 lg:col-span-1 rounded-3xl">
                    <Gallery images={data.images} />
                </div>
                <div className="sm:col-span-2 lg:col-span-1"> 
                    <div className="w-full ">
                        <div className="my-2">
                            <div className="text-2xl font-bold"> {data.name} </div>
                            <div className="flex text-lg"> <IndianRupee size={17} className="mt-[5px]" /> {data.price} </div>
                        </div>
                        <Separator />
                        <div className="my-2">
                            <h2 className="text-md">Size: {data.size?.name}</h2>
                            <div className="flex ">
                                <p className="text-md">Color: </p>
                                <div className = "rounded-full border size-5 mt-1 ml-2"  style={{backgroundColor:data.color?.value }}>  
                                </div>
                            </div>
                            <div>
                                <Button className="rounded-full mt-5" onClick={addToCartHandler}>
                                    <div className="flex space-x-3">
                                        <div>Add to cart</div>
                                        <div><BsBagCheck className="mr-1" size={20}/></div>
                                    </div>
                                </Button>
                            </div>
                            <div>
                            <CommentList storeId={data.storeId} productId={data.id}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="
                    mt-7
                    grid  
                    grid-cols-2 
                    sm:grid-cols-3
                    md:grid-cols-4
                    lg:grid-cols-5
                    xl:grid-cols-6
                "
                > 
                    {relatedProducts.map((item)=>(
                        
                        <ProductCard key={item.id} data={item} />
                    ))}
            </div>
        </div>
    )
}

export default MainProduct