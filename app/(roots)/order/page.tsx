import Container from "@/app/customComponents/container"
import OrderProduct from "./orderProduct";
import { auth, currentUser } from "@clerk/nextjs/server";
import { Button } from "@/components/ui/button";
import { SignInButton, SignedOut } from "@clerk/nextjs";


const OrderPage = async()=>{
    const {userId} = auth(); 
    if(!userId){
        return(
            <Container>
                <div className="pt-40">
                    <div className="flex flex-col md:flex-row justify-center text-center  md:mt-7 text-xl font-semibold">
                    <div className="w-auto h-auto flex justify-center">
                        <img src="unauthorized-image.png" alt="image"/>
                    </div>
                    <div className="my-auto">
                        <p className="">You Are Unauthorized</p>
                        <p className="text-gray-500 text-sm">Looks like you have not signin or login. Please signin or login  !</p>
                        
                    </div>
                </div>
                </div>
            </Container>
        )
    }
    return (
        <Container>
            <div className="font-bold text-2xl pt-44 mb-4">My Orders </div>
            <OrderProduct orderId={userId}/>
        </Container>
    )
}

export default OrderPage;