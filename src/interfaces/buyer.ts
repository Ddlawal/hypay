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

export type BuyerAddresses = {
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
