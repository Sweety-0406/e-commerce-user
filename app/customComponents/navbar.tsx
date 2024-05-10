'use client'
import Link from "next/link";
import { getCategories } from "../../actions/getCategories"
import Container from "./container"
import MainNav from "./mainNav"
import CartBar from "./cartBar";
import { revalidate } from "../(roots)/page";
import { Category } from "../types/page";
import { useEffect, useState } from "react";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { useRouter } from "next/navigation";

revalidate


const Navbar=  ()=>{
    const router = useRouter()
    const[categoryData, setCategoryData] =  useState<Category[]>([])
    useEffect(()=>{
        async function fetchCategory(){
            try {
                const fetchedCategory = await getCategories();
                setCategoryData(fetchedCategory)
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        }
        fetchCategory();
    },[])
    return(
        <div>
            <Container >
                <div className="py-4 ml-4 flex justify-between ">
                    <div className="flex gap-7 mt-3">
                        <div className="text-black text-2xl font-bold">
                        <Link href='/'>
                            Store
                        </Link>
                        </div>
                        <div>
                            <MainNav data={categoryData} />
                        </div>
                    </div>
                    <div className="flex space-x-3">
                        <BsFillSuitHeartFill 
                        fill="red" 
                        size={28} 
                        className="mt-[6px] cursor-pointer"
                        onClick={()=>router.push('/favourites')}
                        />
                        <CartBar />
                    </div>
                </div>
                
            </Container>
        </div>
    )
}


export default Navbar