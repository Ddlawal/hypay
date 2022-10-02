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
} & AddBuyerAddressType
