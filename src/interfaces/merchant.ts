import { ProductsType } from './products'

export type MerchantStore = {
    merchantID: number
    businessname: string
    products: { data: Array<ProductsType> }
}

export type MerchantStorteQueryArg = { merchantCode: string; page?: number }
