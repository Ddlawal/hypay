import { UserInfo } from './../store/reducers/auth'
export interface ITheme {
    theme: ISingleTheme[]
}

export interface ISingleTheme {
    id: number
    name: string
    color: string
    bg_color: string
    created_at: Date
    updated_at: Date
}

export interface IDeliveryAddress {
    id: number
    name: string
    recipient: string
    street_1: string
    street_2: string
    city: string
    state: string
    postal_code: string
    longitude?: any
    latitude?: any
    country_id: number
    phone: string
    created_at: string
    updated_at: string
    deleted_at?: any
    email: string
    country?: any
}

export type INotificationSettings = {
    notification_enabled: boolean
    notify_bank_payment_via_email: boolean
    notify_bank_payment_via_dashboard: boolean
    notify_bank_payment_via_whatsapp: boolean
    send_receipt_to_me_via_email: boolean
    send_receipt_to_me_via_dashboard: boolean
    send_receipt_to_me_via_whatsapp: boolean
    send_receipt_to_customer_via_email: boolean
    send_receipt_to_customer_via_dashboard: boolean
    send_receipt_to_customer_via_whatsapp: boolean
    send_tracking_code_to_customer_via_email: boolean
    send_tracking_code_to_customer_via_dashboard: boolean
    send_tracking_code_to_customer_via_whatsapp: boolean
}
export interface INotificationSettingsNumber {
    notification_enabled: number
    notify_bank_payment_via_email: number
    notify_bank_payment_via_dashboard: number
    notify_bank_payment_via_whatsapp: number
    send_receipt_to_me_via_email: number
    send_receipt_to_me_via_dashboard: number
    send_receipt_to_me_via_whatsapp: number
    send_receipt_to_customer_via_email: number
    send_receipt_to_customer_via_dashboard: number
    send_receipt_to_customer_via_whatsapp: number
    send_tracking_code_to_customer_via_email: number
    send_tracking_code_to_customer_via_dashboard: number
    send_tracking_code_to_customer_via_whatsapp: number
}

export interface IUserProfile {
    userProfile: {
        id: number
        customerID: number
        name: string
        email: string
        firstName: string
        lastName: string
        businessname: string
        usertype: string
        phone: string
        address: string
        deliveryAddress: IDeliveryAddress[]
        bankName?: any
        bankAccountNo?: any
        accountName?: any
        merchantCode: string
        useapi: number
        responseUrl?: any
        apimode: string
        profileStatus: boolean
        referral_code: string
        notificationSettings: INotificationSettings
        socialMedialLInks: any[]
        email_verified: boolean
        google2fa_enabled: boolean
        sms2fa_enabled: boolean
        profile_image_link?: any
        cpf_cnpj?: any
        theme: ISingleTheme
    }
}

export interface ISetTheme {
    theme_id: string
}

export interface ISetThemeResponse {
    message: string
    userInfo: {
        id: number
        customerID: number
        name: string
        email: string
        firstName: string
        lastName: string
        businessname: string
        usertype: string
        phone: string
        address: string
        deliveryAddress: IDeliveryAddress[]
        bankName?: any
        bankAccountNo?: any
        accountName?: any
        merchantCode: string
        useapi: number
        responseUrl?: any
        apimode: string
        profileStatus: boolean
        referral_code: string
        notificationSettings: INotificationSettings
        socialMedialLInks: any[]
        email_verified: boolean
        google2fa_enabled: boolean
        sms2fa_enabled: boolean
        profile_image_link?: any
        cpf_cnpj?: any
        theme: ISingleTheme
    }
}
