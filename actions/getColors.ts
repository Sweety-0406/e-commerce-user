import { Color } from "@/app/types/page";

const PUBLIC_URL = `${process.env.NEXT_PUBLIC_API_URL}/colors`

export const getColors = async ():Promise<Color[]> => {
    const res = await fetch(PUBLIC_URL);
    return await res.json();
}