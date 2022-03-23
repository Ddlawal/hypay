import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface User {
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

interface initialStateInterface {
    user: User | null
    isAuthenticated: boolean
    isError: boolean
    holdLogindetails: any
}

// const initialUser = window?.localStorage.getItem('user') ? window?.localStorage.getItem('user') : null

const initialState = {
    // name: 'Balogun Abdulquddus',
    // businessName: 'Halaalbuy',
    // accountType: 'Merchant',
    // email: 'babusunnah@gmail.com',
    // password: 'balex1234',
    // referral_code: '',
    user: {},
    isAuthenticated: false,
    isError: false,
    holdLogindetails: {},
}

const userResponse = {
    userInfo: {
        customerID: 590,
        name: 'Hassan Yaks',
        email: 'yakx@gmail.com',
        firstName: 'Hassan',
        lastName: 'Yaks',
        businessname: 'Dev',
        usertype: 'Merchant',
        merchantCode: 'yakx-1647931329',
        deliveryAddress: [],
        phone: null,
        profileStatus: false,
        referral_code: 'a582e1da',
    },
    token: {
        access_token:
            'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvcGVwcGVyZXN0LmNvbVwvaHlwYXlcL2JhY2tlbmRcL2FwaVwvcmVnaXN0ZXIiLCJpYXQiOjE2NDc5MzEzMzEsImV4cCI6MTY0NzkzNDkzMSwibmJmIjoxNjQ3OTMxMzMxLCJqdGkiOiJNN0pLc0pHV1RwNldrMzN6Iiwic3ViIjo0ODksInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.k2_emk17FlVhmXKcOmIUoCkLIENu_OnDx8ylQuOORVk',
        token_type: 'bearer',
        expires_in: 3600,
    },
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<any>) => ({
            ...state,
            user: action.payload,
            isAuthenticated: true,
            holdLogindetails: {},
        }),
        logout: (state) => ({
            ...state,
            user: {},
            isAuthenticated: false,
            isError: false,
            holdLogindetails: {},
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
