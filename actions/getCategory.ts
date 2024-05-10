import { Category, Product } from "../app/types/page";

const PUBLIC_URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`
export const getCategory = async (
    categoryId: string
) => {
    const res = await fetch(`${PUBLIC_URL}/${categoryId}`);
    const data = await res.json()
    return await data;
}