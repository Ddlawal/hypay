import { RootState } from '../index'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface Token {
    access_token: string
    token_type: string
    expires_in: string
}

export interface DeliveryAddress {
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

export interface UserInfo {
    id: number
    customerID: number
    name: string
    email: string
    firstName: string
    lastName: string
    businessname: string
    usertype: string
    merchantCode: string
    deliveryAddress: DeliveryAddress[]
    phone?: any
    profileStatus: boolean
    referral_code: string
    email_verified: boolean
    google2fa_enabled: boolean
    sms2fa_enabled: boolean
    profile_image_link?: any
    cpf_cnpj?: any
}

export interface RootObject {
    token: Token | null
    user: UserInfo | null
    isAuthenticated: boolean
    isError: boolean
    sessionExpiryTime: number
}

// export interface initialAuthStateInterface {
//     user: User | null
//     token: TokenType | null
//     isAuthenticated: boolean
//     isError: boolean
//     sessionExpiryTime: number
// }

const firstState = () => {
    try {
        const serializedState = localStorage.getItem('user')
        if (!serializedState) {
            return null
        }
        return JSON.parse(serializedState)
    } catch (error) {
        return null
    }
}

const initialAuthState: RootObject = {
    user: firstState(),
    token: null,
    isAuthenticated: false,
    isError: false,
    sessionExpiryTime: firstState()?.sessionExpiryTime || 0,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState: initialAuthState,
    reducers: {
        login: (state: RootObject, action: PayloadAction<any>) => {
            const currentTime = Date.now()
            const expiresIn = action.payload.token.expires_in * 1000 //milliseconds
            const sessionExpiryTime = currentTime + expiresIn
            localStorage.setItem('user', JSON.stringify({ ...action.payload, sessionExpiryTime }))
            return {
                ...state,
                user: action.payload.userInfo,
                isAuthenticated: !state.isAuthenticated,
                token: action.payload.token,
                sessionExpiryTime,
            }
        },
        logout: () => {
            return {
                user: null,
                isAuthenticated: false,
                isError: false,
                token: null,
                sessionExpiryTime: 0,
            }
        },
        register: (state: RootObject, action: PayloadAction<any>) => ({
            ...state,
            ...action.payload,
        }),
        updateUserLoggedInData: (state: RootObject, action: PayloadAction<any>) => {
            return {
                ...state,
                user: action.payload,
            }
        },
    },
})

export const { login, logout, register, updateUserLoggedInData } = authSlice.actions

export const loginUserData = (state: RootState) => state?.auth?.user as UserInfo

export default authSlice.reducer
