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

export type PaymentProviders = 'paystack' | 'seerbit'

export type PaymentCallbackResponse = {
    paymentDetail: {
        id: number
        initiated_by: number
        payment_status: number
        amount: string
        currency: string
        payment_gateway: string
        payment_type: string
        reference: string
        created_at: string
        updated_at: string
        payment_settlement_status: number
        payment_settlement_ref: string | null
    }
    paymentStatus: string
    order: {
        id: number
        user_id: number
        payurl: string
        paymentRef: string
        orderRef: string
        pepperestfees: number
        maxdeliverydate: string
        mindeliverydate: string
        merchant_id: number
        buyer_id: number
        address_id: number
        totalprice: number
        shipping: number
        status: number
        total: number
        currency_id: number
        currency: string
        cart_id: number
        created_at: string
        updated_at: string
        deleted_at: null
        payment_status: number
        delivery_confirmation_pin: null
        delivery_confirmation_pin_expires_at: null
        disbursement_status: number
        order_address: {
            id: number
            name: string
            recipient: string
            street_1: string
            street_2: string
            city: string
            state: string
            postal_code: string
            longitude: string
            latitude: string
            country_id: number
            phone: string
            created_at: string
            updated_at: string
            deleted_at: null
            email: string
            country: string
            formatted_address: null
            address_code: null
            city_code: null
            state_code: null
            country_code: null
        }
        order_items: Array<{
            id: number
            order_id: number
            product_id: string
            productname: string
            price: number
            currency_id: number
            quantity: number
            totalCost: number
            image: string
            created_at: string
            updated_at: string
            deleted_at: null
            productID: number
        }>
    }
}
