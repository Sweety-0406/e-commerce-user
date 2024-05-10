import { getBillboard } from "@/actions/getBillboard";
import { getProducts } from "@/actions/getProducts";
import Billboard from "@/app/customComponents/billboard";
import Container from "@/app/customComponents/container";
import Product from "@/app/customComponents/product";
import { Separator } from "@/components/ui/separator";


export const revalidate = 0;

export default async function Home() {
  const billboardData = await getBillboard("31424a4e-07d2-4ce2-bc45-633a4cfa5b84")
  const productData = await getProducts({isFeatured: true})
  return (
     <Container>
        <Billboard billboardData={billboardData} />
      <Separator />
      <Product data={productData} />
     </Container>
  );
}
