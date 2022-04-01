export type ProductsType = {
    id: number
    productName: string
    productDescription: string
    merchant_email: string
    date: string
    dateCreated: string
    link: string | null
    image_url: string
    other_images_url: string[]
    amount: string
    currency: string
    deliveryDate: 5
    transactions: 0
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
