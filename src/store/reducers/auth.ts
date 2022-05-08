import { RootState } from '../index'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PURGE } from 'redux-persist'

export interface User {
    userInfo: userDataInfo
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

export type TokenType = {
    access_token: string
    expires_in: number
    token_type: string
}

export interface initialAuthStateInterface {
    user: User | null
    token: TokenType | null
    isAuthenticated: boolean
    isError: boolean
    sessionExpiryTime: number
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
    token: null,
    isAuthenticated: false,
    isError: false,
    sessionExpiryTime: 0,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState: initialAuthState,
    reducers: {
        login: (state, action: PayloadAction<any>) => {
            const currentTime = Date.now()
            const expiresIn = action.payload.token.expires_in * 1000 //milliseconds
            const sessionExpiryTime = currentTime + 10000
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
        register: (state, action: PayloadAction<any>) => ({
            ...state,
            ...action.payload,
        }),
        updateUserLoggedInData: (state, action: PayloadAction<any>) => {
            return {
                ...state,
                user: action.payload,
            }
        },
    },
})

export const { login, logout, register, updateUserLoggedInData } = authSlice.actions

export const loginUserData = (state: RootState) => state?.auth?.user?.userInfo as userDataInfo

export default authSlice.reducer
