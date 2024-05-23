import { Separator } from "@/components/ui/separator"
import { getIndividualProduct } from "@/actions/getIndividualProduct"
import { getProducts } from "@/actions/getProducts"
import MainProduct from "./components/MainProduct"
import ProductCard from "@/app/customComponents/productCard"
// import { revalidate } from "@/app/(roots)/page"
import Container from "@/app/customComponents/container"

// revalidate ;

interface productPageProps{
    params: {productId: string}
}

const ProductPage:React.FC<productPageProps> = async ({params}) => {
    const product = await getIndividualProduct(params.productId)
   const relatedProducts = await getProducts({categoryId: product?.categoryId})
    console.log(relatedProducts)
    return(
        <Container>
            <div className="pt-44">
                <MainProduct data={product}/>
                <Separator className="mt-14"/>
            </div>
        </Container>
    )
}

export default ProductPage


