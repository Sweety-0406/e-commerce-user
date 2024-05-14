
export type User = {
    id: string,
    firstName :string | null,
    lastName :string | null,
    fullName :string | null,
    username :string | null,
    imageUrl: string
}

export type Billboard = {
    id: string,
    label: string,
    imageUrl: string
}

export type Category = {
    id: string,
    name: string,
    billBoard: Billboard
}

export type Size = {
    id: string,
    name: string,
    value: string
}

export type Color = {
    id: string,
    name: string,
    value: string
}

export type Image = {
    id: string,
    url: string,
}

export type Store={
    id: string,
    name: string
}

export type Product = {
    id: string,
    name: string,
    price: string,
    categoryId: string,
    storeId: string,
    category: Category,
    color: Color,
    size: Size,
    store: Store,
    images: Image[]
}

export type Comment={
    id: string,
    content: string,
    productId: string
}

export type OrderItem={
    id:string,
    orderId:string,
    product:Product
}

export type Order={
    id:string,
    userId: string,
    phone: string,
    address:string,
    isPaid:string,
    storeId:string,
    orderItem: OrderItem[]
}