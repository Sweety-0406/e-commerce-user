// 'use client'

// import { useEffect, useState } from "react";
// import { getOrders } from "@/actions/getOrder";
// import { useRouter } from "next/navigation";
// import Container from "@/app/customComponents/container";
// import { useAuth } from "@clerk/nextjs";
// import toast from "react-hot-toast";

// interface orderProductProps{
//     // user:any;
// }

// const OrderProduct:React.FC<orderProductProps> = ({
//     // user
// })=>{
//     const [orderItem,setOrderItem] = useState([]);
//     const {userId: orderId} = useAuth();
//     const router = useRouter()
//     if(orderId==null || orderId == undefined){
//         return(
//             toast.success("You are not signed in.")
//         )
//     }else{
//         useEffect(()=>{
//             async function fetchOrders() {
//                 try {
//                     const fetchedOrders = await getOrders(orderId!);
//                     setOrderItem(fetchedOrders)
//                     router.refresh()
//                 } catch (error) {
//                     console.error('Error fetching orders:', error);
//                 }
//             }
    
//             fetchOrders();
//         },[setOrderItem,router,orderId,getOrders])
//     }
    

//     if(orderItem.length===0){
//         return(
//             <Container>
//                 <div className="pt-">
//                     <div className="flex flex-col md:flex-row justify-center text-center  md:mt-7 text-xl font-semibold">
//                     <div className="w-auto h-auto flex justify-center">
//                         <img src="no-order.png" alt="image"/>
//                     </div>
//                     <div className="my-auto">
//                         <p className="">No Orders Found</p>
//                         <p className="text-gray-500 text-sm">Looks like you have not ordered any products !</p>
//                     </div>
//                 </div>
//                 </div>
//             </Container>
//         )
//     }
    
//     return(
//         <div>
//             orders
//         </div>
//     )
// }

// export default OrderProduct;

import { useEffect, useState } from "react";
import { getOrders } from "@/actions/getOrder";
import { useRouter } from "next/navigation";
import Container from "@/app/customComponents/container";
import { useAuth } from "@clerk/nextjs";
import toast from "react-hot-toast";

interface OrderProductProps {}

const OrderProduct: React.FC<OrderProductProps> = () => {
    const [orderItem, setOrderItem] = useState([]);
    const { userId: orderId } = useAuth();
    const router = useRouter();

    const fetchOrders = async () => {
        try {
            const fetchedOrders = await getOrders(orderId!); // Notice the "!" to assert non-nullability
            setOrderItem(fetchedOrders);
            router.refresh();
        } catch (error) {
            console.error('Error fetching orders:', error);
        }
    };

    useEffect(() => {
        if (orderId) {
            fetchOrders();
        }
    }, [orderId, setOrderItem, router]);

    if (!orderId) {
        return (
            <Container>
                {toast.success("You are not signed in.")}
            </Container>
        );
    }

    if (orderItem.length === 0) {
        return (
            <Container>
                <div className="pt-40">
                    <div className="flex flex-col md:flex-row justify-center text-center md:mt-7 text-xl font-semibold">
                        <div className="w-auto h-auto flex justify-center">
                            <img src="no-order.png" alt="image" />
                        </div>
                        <div className="my-auto">
                            <p className="">No Orders Found</p>
                            <p className="text-gray-500 text-sm">Looks like you have not ordered any products !</p>
                        </div>
                    </div>
                </div>
            </Container>
        );
    }

    return <div>orders</div>;
};

export default OrderProduct;
