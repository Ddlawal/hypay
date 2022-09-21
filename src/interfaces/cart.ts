export type CartItemsType = {
    id: number
    cart_id: number
    productID: number
    productname: string
    deliveryperiod: number
    image_url: string
    description: string
    quantity: number
    currency: string
    price: number
    total_cost: number
    created_at: string
    updated_at: string
}

export type CartType = {
    customerID: number
    cart_id: number
    status: number
    totalprice: number
    items_count: number
    date_created: string
    items: Array<CartItemsType>
    max_delivery_period: string
    min_delivery_period: string
    pepperestfees: number
    shipping: number
    total_sum: number
}

export type AddToCartType = {
    productID: number
    quantity: number
}

export type RemoveFromCartType = {
    productID: number
    quantity: number | null
}
