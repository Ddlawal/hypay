import { RootState } from './../store/index'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface User {
    userInfo: {
        customerID: number
        name: string
        email: string
        firstName: string
        lastName: string
        businessname: string
        usertype: string
        merchantCode: string
        deliveryAddress: never[]
        phone: null
        profileStatus: boolean
        referral_code: string
    }
    token: {
        access_token: string
        token_type: string
        expires_in: number
    }
}
export interface userDataInfo {
    customerID: number
    name: string
    email: string
    firstName: string
    lastName: string
    businessname: string
    usertype: string
    phone: null
    address: string
}

interface deliveryAddress {
    id: number
    name: string
    recipient: string
    street_1: string
    street_2: null
    city: string
    state: string
    postal_code: string
    longitude: null
    latitude: null
    country_id: number
    phone: string
    created_at: string
    updated_at: string
    deleted_at: null
}

export interface initialAuthStateInterface {
    user: User
    isAuthenticated: boolean
    isError: boolean
}

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

const initialAuthState: initialAuthStateInterface = {
    user: firstState(),
    isAuthenticated: false,
    isError: false,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState: initialAuthState,
    reducers: {
        login: (state, action: PayloadAction<any>) => {
            return {
                ...state,
                user: action.payload,
                isAuthenticated: !state.isAuthenticated,
            }
        },
        logout: () => initialAuthState,
        register: (state, action: PayloadAction<any>) => ({
            ...state,
            ...action.payload,
        }),
    },
})

export const { login, logout, register } = authSlice.actions

export const loginUserData = (state: RootState) => state.auth.user.userInfo

export default authSlice.reducer
