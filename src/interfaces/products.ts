import { LazyQueryTrigger } from '@reduxjs/toolkit/dist/query/react/buildHooks'
import {
    BaseQueryFn,
    FetchArgs,
    FetchBaseQueryError,
    FetchBaseQueryMeta,
    QueryDefinition,
} from '@reduxjs/toolkit/dist/query'

export type ProductsType = {
    id: number
    productName: string
    productCode: string
    productSlug: string
    productDescription: string
    merchant_email: string
    date: string
    dateCreated: string
    link: string | null
    image_url: string
    other_images_url: Array<{
        id: number
        productID: number
        image_link: string
        created_at: string
        updated_at: string
    }>
    amount: string
    currency: string
    deliveryDate: number
    transactions: number
    recentTransactions: Array<unknown>
    height: number
    weight: number
    length: number
    width: number
    quantity: number
    video_link: string | null
    SKU: string | null
    barcode: string | null
    product_type: string
    category: {
        id: number
        categoryname: string
        created_at: string | null
        updated_at: string | null
    }
    attributes: boolean
}

export type AddProductType = {
    product_type: string
    productname: string
    description: string
    video_link: string
    price: string
    quantity: string
    SKU: string
    barcode: string
    weight: string
    length: string
    width: string
    height: string
    product_image: File
    'optional_images[]': FileList
    category_id: string
    currency: string
    deliveryperiod: string
}

export type SearchProductType = LazyQueryTrigger<
    QueryDefinition<
        string,
        BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, Record<string, unknown>, FetchBaseQueryMeta>,
        never,
        Array<ProductsType>,
        'productsApi'
    >
>

export interface IsingleCategory {
    id: number
    categoryname: string
    created_at?: Date | null
    updated_at?: Date | null
}

export interface IproductCategory {
    categories: IsingleCategory[]
}
