export type RequestType = {
    id: number
    orderNo: string
    product_code: string
    status: string
    amount: string
    cost_of_frieght: string
    frieght_type: 'PAC' | 'SedEx'
    payment_method: string
    date: string
    orderId: number
    address: string
    cost: number
    paymentRef: string
    orderRef: string
    orderDate: string
    customerName: string
    customerEmail: string
    buyerPhone: string | null
    sellerPhone: string | null
    orderItems: Array<RequestItems>
}

export type RequestItems = {
    id: number
    order_id: number
    product_id: string
    productname: string
    price: number
    currency_id: number
    quantity: number
    totalCost: number
    image: string
    created_at: string | null
    updated_at: string | null
    deleted_at: string | null
    productID: number
}
