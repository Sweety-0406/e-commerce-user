'use client'

import { Billboard as BillboardType } from "../types/page";


interface billboardProps{
    billboardData : BillboardType
}

const Billboard:React.FC<billboardProps> = ({
    billboardData
})=>{
    return (
        <div className="my-8">
            <div className="mx-auto
               text-center 
               rounded-2xl
               overflow-hidden
               h-60
               lg:h-80
               border-2
               border-black
               ">
                <div className="mx-auto
                  w- 
                  h-full
                  bg-no-repeat
                  md:h-80
                  pt-14
                  md:pt-20
                  my-auto
                  " 
                  style={{
                    backgroundImage: `url(${billboardData.imageUrl})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}

                >
                   <div className="
                    text-3xl
                    font-bold
                    max-w-xs
                    mx-auto
                   ">
                    {billboardData.label} 
                   </div> 
                </div>
            </div>
        </div>
    )
}

export default Billboard