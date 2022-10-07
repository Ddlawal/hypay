import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { CartType } from '../../interfaces/cart'
import { RootState } from '..'
import { cartApi } from '../services/cart'

interface CartState {
    cartItems: CartType['items']
    cartCount: CartType['items_count']
    shipping: CartType['shipping']
    totalPrice: CartType['totalprice']
    totalSum: CartType['total_sum']
    charges: CartType['pepperestfees']
}

const initialState = { cartItems: [], cartCount: 0, charges: 0, shipping: 0, totalPrice: 0, totalSum: 0 } as CartState

const callback = (state: CartState, { payload }: PayloadAction<CartType | undefined>) => {
    if (!payload) {
        return state
    }

    const { items, items_count, pepperestfees, total_sum, totalprice, shipping } = payload

    state = {
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
    initialState,
    reducers: {
        updateCart(_, { payload }: PayloadAction<CartType>) {
            if (!payload) {
                return initialState
            }
            return {
                cartItems: payload.items,
                cartCount: payload.items_count,
                charges: payload.pepperestfees,
                shipping: payload.shipping,
                totalPrice: payload.totalprice,
                totalSum: payload.total_sum,
            }
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
