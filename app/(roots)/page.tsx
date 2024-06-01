import { getBillboard } from "@/actions/getBillboard";
import { getProducts } from "@/actions/getProducts";
import Billboard from "@/app/customComponents/billboard";
import Container from "@/app/customComponents/container";
import Product from "@/app/customComponents/product";
import { Separator } from "@/components/ui/separator";
import { redirect } from "next/navigation";


// export const revalidate = 0;

export default async function Home() {
  const billboardData = await getBillboard("463167cb-3673-43c0-8c4f-03d3774138ec")
  const productData = await getProducts({isFeatured: true})

  return (
     <Container>
      <div>
        <Billboard billboardData={billboardData} />
        <Separator />
        <Product data={productData}/>
      </div>
     </Container>
  );
}
