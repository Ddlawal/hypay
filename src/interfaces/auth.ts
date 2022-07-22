export type GeneratedTwoFASecret = {
    success: boolean
    QR_image: string
    google2fa_secret: string
}

export type EnableTwoFAResponce = {
    success: boolean
    message: string
}

export type LogoutResponse = { mmessage: string; status: string }
