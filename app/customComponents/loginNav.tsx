'use client'

import { redirect, useRouter } from "next/navigation"
import CartBar from "./cartBar"
import { BsFillSuitHeartFill } from "react-icons/bs"
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Container from "./container"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"

const LoginNavbar = ()=>{
    const router = useRouter()
    return(
        <div>
            <div className="flex justify-between my-4 mx-3">
                <div className="ml-2">
                    <Button variant={"ghost"} className="rounded-full  w-10 h-10">
                        <UserButton/>
                    </Button>
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
            <Separator className="border-[1px] border-black"/>
        </div>
    )
}

export default LoginNavbar