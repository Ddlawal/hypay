import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { CartType } from '../../interfaces/cart'
import { RootState } from '..'
import { cartApi } from '../services/cart'

export interface CartState {
    cartId: CartType['cart_id']
    cartItems: CartType['items']
    cartCount: CartType['items_count']
    shipping: CartType['shipping']
    totalPrice: CartType['totalprice']
    totalSum: CartType['total_sum']
    charges: CartType['pepperestfees']
}

const initialState = {
    cartId: 0,
    cartItems: [],
    cartCount: 0,
    charges: 0,
    shipping: 0,
    totalPrice: 0,
    totalSum: 0,
} as CartState

export const LOCAL_CART_KEY = 'localCart'

const initialCart = (): CartState => {
    try {
        const serializedCart = localStorage.getItem(LOCAL_CART_KEY)
        if (!serializedCart) {
            return initialState
        }

        const cart = JSON.parse(serializedCart)
        return cart
    } catch (error) {
        return initialState
    }
}

const callback = (state: CartState, { payload }: PayloadAction<CartType | undefined>) => {
    if (!payload) {
        return initialState
    }

    const { cart_id, items, items_count, pepperestfees, total_sum, totalprice, shipping } = payload

    state = {
        cartId: cart_id,
        cartItems: items,
        cartCount: items_count,
        charges: pepperestfees,
        shipping,
        totalPrice: totalprice,
        totalSum: total_sum,
    }

    return state
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialCart(),
    reducers: {
        updateCart(
            state,
            {
                payload,
            }: PayloadAction<{
                productID: number
                price: number
                quantity: number | null
                image_url?: string
                productName?: string
            } | null>
        ) {
            if (!payload) {
                return initialState
            }

            if (payload.quantity === null) {
                state.cartItems.filter((x) => x.productID !== payload.productID)
                localStorage.setItem(LOCAL_CART_KEY, JSON.stringify(state))
                return state
            }

            const itemIndex = state.cartItems.findIndex((x) => x.productID === payload.productID)
            const alreadyInCart = itemIndex !== -1

            if (alreadyInCart) {
                state.cartItems[itemIndex] = {
                    ...state.cartItems[itemIndex],
                    quantity: state.cartItems[itemIndex].quantity + payload.quantity,
                    total_cost: state.cartItems[itemIndex].total_cost + payload.price,
                }
                state.totalPrice = state.totalPrice + payload.price
                state.totalSum = state.totalSum + payload.price
            } else {
                state = {
                    ...state,
                    cartCount: state.cartCount + 1,
                    cartItems: [
                        ...state.cartItems,
                        {
                            productID: payload.productID,
                            quantity: payload.quantity,
                            id: 0,
                            cart_id: 0,
                            productname: payload.productName || '',
                            deliveryperiod: 0,
                            image_url: payload.image_url || '',
                            description: '',
                            currency: 'NGN',
                            price: payload.price,
                            total_cost: payload.price,
                            created_at: '',
                            updated_at: '',
                        },
                    ],
                    totalPrice: state.totalPrice + payload.price,
                    totalSum: state.totalSum + payload.price,
                }
            }

            localStorage.setItem(LOCAL_CART_KEY, JSON.stringify(state))

            return state
        },
    },
    extraReducers: (builder) => {
        builder
            .addMatcher(cartApi.endpoints.getBuyerCart.matchFulfilled, callback)
            .addMatcher(cartApi.endpoints.addToCart.matchFulfilled, callback)
            .addMatcher(cartApi.endpoints.removeFromCart.matchFulfilled, callback)
    },
})

export const { updateCart } = cartSlice.actions
export const getUserCart = (state: RootState) => state.cart
export default cartSlice.reducer
