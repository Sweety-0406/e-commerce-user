import { Product } from "../app/types/page";

const PUBLIC_URL = `${process.env.NEXT_PUBLIC_API_URL}/products`
export const getIndividualProduct = async (
    productId: string
): Promise<Product> => {
    const res = await fetch(`${PUBLIC_URL}/${productId}`);
    return await res.json();
}