'use client'

import useCartStore from "@/app/hooks/useCart";
import { Product } from "@/app/types/page"
import { Button } from "@/components/ui/button";
import { IndianRupee } from "lucide-react"
import { useRouter } from "next/navigation";
import { RxCrossCircled } from "react-icons/rx";

interface cartProductCardProps{
    data: Product[]
}

const CartProductCard:React.FC<cartProductCardProps> = ({
    data
})=>{
    const cart = useCartStore()
    const router = useRouter()
    const cancelHandler=(id:string)=>{
        cart.removeCart(id)
    }
    return(
        <div>
            {data.map((item:Product)=>(
                <div key={item.id}>
                    <div className="w-full overflow-hidden rounded-lg border-2 border-neutral-950 p-2 flex space-x-2 mb-2">
                        <img className="object-cover aspect-square w-32 h-32 lg:h-48 lg:w-48 rounded-lg border-2 border-neutral-950" src={item.images[0].url} alt={"image"} />
                        <div className="border-2 border-slate-950 w-full rounded-lg p-2 flex justify-between">
                            <div>
                                <div className="flex space-x-3">
                                    <div className="pr-2 border-r-[1px]  border-slate-700">
                                        <p className="text-xs lg:text-sm"> {item.name} </p>
                                        <p className="flex text-xs lg:text-sm"><IndianRupee size={11} className="mt-[2px] lg:mt-[4px] lg:h-3 lg:w-3" /> {item.price} </p>
                                    </div>
                                    <div>
                                    <p className="text-xs lg:text-sm"> {item.size.value} </p>
                                    <div className = "rounded-full border size-4 lg:size-5 mt-1 "  style={{backgroundColor:item.color?.value }}>  
                                    </div>
                                    </div>
                                </div>
                                <div> <Button className="mt-3  rounded-full" onClick={()=>router.push(`/products/${item.id}`)}>View item</Button> </div>
                            </div>
                            <div>
                                <RxCrossCircled size={25} className="cursor-pointer" onClick={()=>cancelHandler(item.id)}/>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default CartProductCard