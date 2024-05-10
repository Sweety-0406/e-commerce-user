'use client'

import { Image } from "@/app/types/page"
import { Card } from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

import { revalidate } from "@/app/(roots)/page"

revalidate ;

interface galleryProps{
    images:Image[],
}

const Gallery:React.FC<galleryProps>= ({
    images
})=>{
    if (!images) {
        return <div>No images found</div>;
    }

    if (images.length === 0) {
        return <div>No images found</div>;
    }
    return(
        <div>


            <Tabs defaultValue={images[0].id} >
                {images.map((image)=>(
                    <TabsContent key={image.id} value={image.id}>
                    <Card>
                        <img 
                            key={image.id}
                            className={`
                            w-full
                            h-[550px]
                            sm:h-[650px]
                            lg:h-[650px]
                            xl:h-[700px]
                            cursor-pointer
                            rounded-xl
                            border-2
                            border-black
                            `}
                            src={`${image.url}`} 
                            alt={"image"}  
                        />
                    </Card>
                    </TabsContent>
                ))}
                <TabsList className="flex mt-8 bg-transparent  w-full ">
                    {images.map((image)=>(
                        <TabsTrigger key={image.id} value={image.id}>
                            <img 
                            key={image.id}
                                className={`
                                w-20
                                h-20
                                hover:opacity-40
                                cursor-pointer
                                rounded-xl
                                bg-transparent overflow-hidden
                                `}
                                src={`${image.url}`} 
                                alt={"image"}  
                            />
                        </TabsTrigger>
                    ))}
            </TabsList>
           
            </Tabs>



            
        </div>
    )
}

export default Gallery