import Container from "@/app/customComponents/container"
import FavouriteProducts from "./favouriteProducts"


const Favourite = ()=>{
    return(
        <Container>
           <div className="font-bold text-2xl mb-4 ">
            Favourite Products
           </div>
           <FavouriteProducts />
        </Container>
    )
}

export default Favourite