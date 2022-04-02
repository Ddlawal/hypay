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
    videoDescription: string
    price: string
    quantity: string
    sku: string
    barcode: string
    weight: string
    length: string
    width: string
    height: string
    product_image: File
    category_id: string
    currency: string
    deliveryperiod: string
}
