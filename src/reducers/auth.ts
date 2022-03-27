import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'

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

export interface initialStateInterface {
    user: User | null
    isAuthenticated: boolean
    isError: boolean
}

const firstState = () => {
    try {
        let serializedState = localStorage.getItem('user')
        if (!serializedState) {
            return null
        }
        return JSON.parse(serializedState)
    } catch (error) {
        return null
    }
}

const initialState: initialStateInterface = {
    user: firstState(),
    isAuthenticated: false,
    isError: false,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<any>) => {
            console.log(action, ' login action was fired')
            return {
                ...state,
                user: action.payload,
                isAuthenticated: true,
            }
        },
        logout: (state) => ({
            ...state,
            user: null,
            isAuthenticated: false,
            isError: false,
        }),
        updateLogin: (state, action: PayloadAction<any>) => {
            console.log(action, 'actions from signup')
            return {
                ...state,
                holdLogindetails: { ...action.payload },
            }
        },
        register: (state, action: PayloadAction<any>) => ({
            ...state,
            ...action.payload,
        }),
    },
})

export const { login, logout, register, updateLogin } = authSlice.actions

export default authSlice.reducer
