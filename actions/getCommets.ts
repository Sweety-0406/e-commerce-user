import {  Comment } from "@/app/types/page";

const PUBLIC_URL = `${process.env.NEXT_PUBLIC_API_URL}/products`

export const getComments = async (
    productId: string,
):Promise<Comment[]> => {
    const res = await fetch(`${PUBLIC_URL}/${productId}/comments`);
    return await res.json();
}