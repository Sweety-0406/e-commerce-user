'use client'

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { Category } from "../types";

// import { revalidate } from "@/app/(roots)/page"

// revalidate ;

interface mainNavProps{
    data: Category[]
}

const MainNav:React.FC<mainNavProps> =  ({
    data
}) => {
    const pathname = usePathname()

    const routes = data.map((route)=>(
        {
            href : `/category/${route.id}`,
            title: `${route.name}`,
            active : pathname ===  `/category/${route.id}`
        } 
    ))
          
    
    return(
        <nav className="flex justify-between space-x-3 mt-1">
            {routes.map((route)=>(
                <Link
                key={route.href}
                href={route.href} 
                className={`${route.active? "text-black font-bold underline underline-offset-2" : "text-gray-600"}`}
                >
                    {route.title}
                </Link>
            ))}
        </nav>
    )
}

export default MainNav;