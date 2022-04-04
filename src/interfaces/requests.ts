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
}
