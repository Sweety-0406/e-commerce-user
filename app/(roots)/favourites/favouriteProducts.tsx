'use client'

import Product from "@/app/customComponents/product";
import useFavouriteStore from "@/app/hooks/useFavourite"
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const FavouriteProducts = () =>{
    const favItem = useFavouriteStore();
    const router=useRouter()

    if(favItem.items.length === 0 ){
        return(
            <div className="flex flex-col md:flex-row justify-center text-center md:mt-7 text-xl font-semibold">
                    <div className="w-auto h-auto flex justify-center">
                        <img src="empty-fav-items.png" alt="image"/>
                    </div>
                    <div className="my-auto">
                        <p className="">Your Favourite Cart Is Empty</p>
                        <p className="text-gray-500 text-sm">Looks like you have not added anything to your favourite cart yet !</p>
                        <Button className="mt-4" onClick={()=>router.push('/')}>Go to home</Button>
                    </div>
                </div>
        )
    }   
    return(
        <div>
            <div>
                <Product data={favItem.items} />
            </div>
        </div>
    )
}

export default FavouriteProducts