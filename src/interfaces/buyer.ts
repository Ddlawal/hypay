import { CartType } from './cart'

export type AddBuyerAddressType = {
    name: string
    phone: string
    postal_code: string
    street_1: string
    street_2: string
    country_id: number
    state: string
    city: string
}

export type BuyerAddress = {
    customerID: string
    address_id: number
    address: string
    country: string
    name: string
    phone: string
    street_1: string
    street_2: string
    city: string
    state: string
    postal_code: string
    country_id: number
} & AddBuyerAddressType

export type TimelineEventsType = 'Identification' | 'Shipping' | 'Payment' | 'Confirmation'

export type ShippingRates = {
    courier: {
        id: string
        name: string
        icon: string
    }
    amount: number
    delivery_note: string | null
    id: string
    type: string
    currency: string
    status: true
    estimated_days: string
}

export type ShippingRatesQueryArg = {
    cartId: number
    addressId: number
}

type OrderType = {
    user_id: number
    pepperestfees: number
    maxdeliverydate: string
    mindeliverydate: string
    merchant_id: number
    buyer_id: number
    address_id: string
    totalprice: number
    shipping: number
    status: number
    total: number
    currency_id: number
    currency: string
    cart_id: number
    created_at: string
    updated_at: string
    id: number
    orderRef: string
    payurl: string
    paymentRef: string
}

export type PlaceOrderArg = {
    cart_id: number
    currency_id: number
    address_id: string
    paymentProvider: string
    rate_id: string
    delivery_note: string
    estimated_days: string
    charge_amount: number
    charge_currency: string
}

export type PlaceOrderResponse = {
    paymentUrl: string
    cart: CartType
    order: OrderType
}
