import LoginNavbar from "../customComponents/loginNav"
import Navbar from "../customComponents/navbar"
import { Separator } from "@/components/ui/separator"
import Footer from "../customComponents/footer"
import { auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"


export default async function DashboardLayout({
    children,
}:{
    children:React.ReactNode,
}) {
    const {userId} = auth()
    if(!userId){
        console.log("problem is there...")
        redirect('/sign-in')
    }

    return(
        <>
        <div>
        <header className="fixed z-50 w-[100%] bg-slate-50">
            <LoginNavbar />
            <Navbar />
            <Separator className=" border-[1px] border-black"/>
        </header>
        {children}
        <Footer />
        </div>
          
        </>
    )
}
