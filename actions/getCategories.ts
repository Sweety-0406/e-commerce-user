import { Category } from "@/app/types/page";

const PUBLIC_URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`

export const getCategories = async ():Promise<Category[]> => {
    const res = await fetch(PUBLIC_URL);
    return await res.json();
}