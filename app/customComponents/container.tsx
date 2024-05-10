'use client'

import { useEffect, useState } from "react"

interface containerProps{
    children: React.ReactNode
}

const Container:React.FC<containerProps> = ({
    children
})=>{
    const[isMounted,setIsMounted] = useState(false);

    useEffect(()=>{
        if(!isMounted){
            setIsMounted(true)
        }
    },[isMounted])

    return (
        <div className="mx-4">
            {children}
        </div>
    )
}

export default Container