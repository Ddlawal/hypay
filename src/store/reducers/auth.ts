import { RootState } from '../index'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PURGE } from 'redux-persist'

export interface User {
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

type tokenType = {
    access_token: string
    expires_in: number
    token_type: string
}
export interface initialAuthStateInterface {
    user: User | null
    token: tokenType | null
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
    token: null,
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
                user: action.payload.userInfo,
                isAuthenticated: !state.isAuthenticated,
                token: action.payload.token,
            }
        },
        logout: () => {
            console.log('this action got fired =============================================')
            return {
                user: null,
                isAuthenticated: false,
                isError: false,
                token: null,
            }
        },
        register: (state, action: PayloadAction<any>) => ({
            ...state,
            ...action.payload,
        }),
    },
    // extraReducers: (builder) => {
    //     console.log('this action got fired ============================================= on top extra reduceres')
    //     return {
    //         logout: builder.addCase(PURGE, () => {
    //             console.log(
    //                 'this action got fired ============================================= inside extra reduceres'
    //             )
    //             return {
    //                 user: null,
    //                 isAuthenticated: false,
    //                 isError: false,
    //                 token: null,
    //             }
    //         }),
    //     }
    // },
})

export const { login, logout, register } = authSlice.actions

export const loginUserData = (state: RootState) => state?.auth?.user as User

export default authSlice.reducer
