'use client'

import { useEffect, useState } from "react";
import { getOrders } from "@/actions/getOrder";
import Container from "@/app/customComponents/container";
import { Button } from "@/components/ui/button";
import OrderedItem from "./orderedItem";
import { Order, Product } from "@/app/types";
import OrderExpandCard from "./orderExpandCard";

interface OrderProductProps {
    orderId:string
}

const OrderProduct: React.FC<OrderProductProps> = ({
    orderId
}) => {
    const [orderItem, setOrderItem] = useState<Order[]>([]);
    
    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const fetchedOrders = await getOrders(orderId);
                setOrderItem(fetchedOrders);
                
            } catch (error) {
                console.error('Error fetching orders:', error);
            }
        };
        if (orderId) {
            fetchOrders();
        }
    }, [orderId]);

    const onClick = ()=>{
        // console.log("hii h")
        console.log(orderItem)
    }
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


    return (
        <div className="mt-4">
            {orderItem.map((item,index)=>(
                <div
                    key={index}
                    className="    
                    grid
                    grid-cols-5
                    border-[1px]
                    mt-1
                    border-black
                    rounded-lg
                ">
                    <div className="col-span-5 sm:col-span-3 sm:border-r-[1px] m-1 border-black">
                        <OrderedItem orderItem={item.orderItem} />
                    </div>
                    <div className="col-span-2 mt-4 ml-2 mb-2">
                        <p className="text-slate-600"> <span className="text-black text-lg font-semibold">Address: </span>{item.address}</p>
                        <p className="text-slate-600"> <span className="text-black text-lg font-semibold">Phone No. : </span>{item.phone}</p>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default OrderProduct;
