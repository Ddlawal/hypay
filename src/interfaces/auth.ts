import { Token, UserInfo } from '../store/reducers/auth'

export type UserAuth = {
    token: Token
    userInfo: UserInfo
}

export type AuthFormInputData = { code: string }

export type ResetPasswordRequestData = { email: string }

export type ResetPasswordConfirmData = {
    password: string
    password_confirmation: string
    token: string
}

export type ResetPasswordResponse = { token: Token & { access_token: Token } }

export type ResetPasswordData = {
    current_password: string
    new_password: string
    new_password_confirmation: string
}

export type GoogleLoginData = {
    provider: string | undefined
    name: string | undefined
    email: string | undefined
    phoneNo: string
    userProviderID: string | undefined
    accountType: string
}

export type GeneratedTwoFASecret = {
    success: boolean
    QR_image: string
    google2fa_secret: string
}

export type TwoFAResponse = {
    success: boolean
    message: string
}

export type ResetPasswordByEmailResponse = {
    ResponseStatus: string
    Detail: string
    message: string
    ResponseCode: number
}

export type LogoutResponse = { mmessage: string; status: string }

export type LogoutError = { message: string }

export type AccountType = 'Both' | 'Buyer' | 'Merchant'

export type AccountTypeValue = { label: AccountType; value: AccountType }

export type SignupAuth<T = AccountType> = {
    name: string
    accountType: T
    email: string
    phone: number | null
    password: string
    referral_code: string
}

export type SignupFormData = SignupAuth<AccountTypeValue | AccountType>
