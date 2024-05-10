import Container from "@/app/customComponents/container"
import CartProducts from "./cartProducts"


const CartPage=()=>{
    
    return(
        <Container>
            <div className="font-bold text-2xl my-4">Your Carts Products</div>
            <CartProducts />
        </Container>
    )
}

export default CartPage