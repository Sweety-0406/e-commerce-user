import qs from 'query-string'
import { Product } from '../app/types'

const PUBLIC_URL = `${process.env.NEXT_PUBLIC_API_URL}/products`

interface Query{
    categoryId?: string,
    colorId?: string,
    sizeId?: string,
    isFeatured?: boolean
}
export const getProducts = async (query: Query):Promise<Product[]> => {
    const url = qs.stringifyUrl({
        url: PUBLIC_URL,
        query:{
            colorId: query.colorId,
            categoryId: query.categoryId,
            sizeId: query.sizeId,
            isFeatured: query.isFeatured
        }
    })
    console.log(url)
    const res = await fetch(url);
    const data = await res.json()
    return await data;
}