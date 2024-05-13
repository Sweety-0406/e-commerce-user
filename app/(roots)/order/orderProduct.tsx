'use client'

import { useEffect, useState } from "react";
import { getOrders } from "@/actions/getOrder";
import { useRouter } from "next/navigation";
import Container from "@/app/customComponents/container";
import { useAuth } from "@clerk/nextjs";
import toast from "react-hot-toast";

interface OrderProductProps {
    orderId:string
}

const OrderProduct: React.FC<OrderProductProps> = ({
    orderId
}) => {
    const [orderItem, setOrderItem] = useState([]);
    // const { userId: orderId } = useAuth();

    const router = useRouter();

    const fetchOrders = async () => {
        try {
            const fetchedOrders = await getOrders(orderId); // Notice the "!" to assert non-nullability
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
    }, [orderId]);

    // if (!orderId) {
    //     return (
    //         <Container>
    //             {toast.success("You are not signed in.")}
    //         </Container>
    //     );
    // }

    if (orderItem.length === 0) {
        return (
            <Container>
                <div>
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

    return <div className="mt-44">orders</div>;
};

export default OrderProduct;
