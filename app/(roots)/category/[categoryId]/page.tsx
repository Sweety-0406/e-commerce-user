import { getBillboard } from "@/actions/getBillboard";
import { getCategory } from "@/actions/getCategory";
import { getColors } from "@/actions/getColors";
import { getIndividualProduct } from "@/actions/getIndividualProduct";
import { getProducts } from "@/actions/getProducts";
import { getSizes } from "@/actions/getSizes";
import Billboard from "@/app/customComponents/billboard";
import Container from "@/app/customComponents/container";
import Filter from "@/app/customComponents/filters";
import Product from "@/app/customComponents/product";
import { Separator } from "@/components/ui/separator";
import RelatedProducts from "./components/relatedProducts";


interface categoryPageProps{
    params : {categoryId: string}
}

const CategoryPage:React.FC<categoryPageProps> =  async ({
    params
}) => {
    const category = await getCategory(params.categoryId)
    const billBoardData = await getBillboard(category.billboardId)
   const relatedProducts = await getProducts({categoryId: params.categoryId})
   const colors = await getColors()
   const sizes = await getSizes()
    return(   
        <Container>
            <Billboard billboardData={billBoardData} />
            <Separator />
            <Filter categoryId={category.id} sizes={sizes} colors={colors} />
            <RelatedProducts categoryId={category.id} />
        </Container> 
    )
}

export default CategoryPage