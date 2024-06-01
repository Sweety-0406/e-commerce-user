import Navbar from "../customComponents/navbar"
import { Separator } from "@/components/ui/separator"
import Footer from "../customComponents/footer"


export default async function DashboardLayout({
    children,
}:{
    children:React.ReactNode,
}) {

    return(
        <div>
            <header className="fixed z-50 w-[100%] bg-slate-50">
                <Navbar />
                <Separator className=" border-[1px] border-black"/>
            </header>
            {children}
            <Footer />
        </div>     
    )
}
