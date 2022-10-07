export interface Detail {
    product_id: number
}

export interface CouponData {
    id: number
    merchant_id: number
    coupon_code: string
    coupon_name: string
    coupon_discount: number
    coupon_limit: number
    status: string
    date_created: string
    end_date: string
    details: Detail[]
    coupons: any
}

export interface Links {
    first: string
    last: string
    prev?: any
    next?: any
}

export interface IUpdateCoupon extends ICreateCoupon {
    couponID: number
}
export interface Link {
    url: string
    label: string
    active: boolean
}

export interface Meta {
    current_page: number
    from: number
    last_page: number
    links: Link[]
    path: string
    per_page: number
    to: number
    total: number
}

export interface ICoupon {
    data: ISingleCouponResponse[]
    links: Links
    meta: Meta
}

export interface ICouponResponse {
    coupons: ICoupon
}

export interface IGenerateCoupon {
    product_ids: number[]
    end_date: string
    coupon_discount: number
    limit: string
}

export interface ICreateCoupon {
    product_ids: string | number[]
    end_date: string
    coupon_name: string
    coupon_code: string
    coupon_discount: number
    limit: string
}

export interface ISingleCouponResponse {
    id: number
    merchant_id: number
    coupon_name: string
    coupon_code: string
    coupon_discount: string
    coupon_limit: number
    status: string
    date_created: string
    end_date: string
    products: string[]
}

export interface Buyers {
    total_buyers: number
    last_month_buyers: number
    this_month_buyers: number
    percentChangeInBuyers: number
    active_today: number
    last_week_buyers: number
    this_week_buyers: number
    percentChangeInBuyersThisWeek: number
}

export interface MonthlyReport {
    month: string
    total_revenue: number
    total_orders: number
}

export interface Sales {
    today_sales: number
    today_revenue: number
    monthly_report: MonthlyReport[]
}

export interface Data {
    buyers: Buyers
    sales: Sales
}

export interface IAnalysisResponse {
    data: Data
}
