

const PUBLIC_URL = `${process.env.NEXT_PUBLIC_API_URL}/order`

export const getOrders = async (
    orderId: string,
) => {
    const res = await fetch(`${PUBLIC_URL}/${orderId}`);
    return await res.json();
}