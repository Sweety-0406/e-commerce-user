import { Size } from "@/app/types";

const PUBLIC_URL = `${process.env.NEXT_PUBLIC_API_URL}/sizes`

export const getSizes = async ():Promise<Size[]> => {
    const res = await fetch(PUBLIC_URL);
    return await res.json();
}