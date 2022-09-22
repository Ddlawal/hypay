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

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        updateCart(state, action: PayloadAction<CartType>) {
            if (!action.payload) {
                return initialState
            }
            return {
                cartItems: action.payload.items,
                cartCount: action.payload.items_count,
                charges: action.payload.pepperestfees,
                shipping: action.payload.shipping,
                totalPrice: action.payload.totalprice,
                totalSum: action.payload.total_sum,
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addMatcher(cartApi.endpoints.getBuyerCart.matchFulfilled, (state, { payload }) => {
                if (!payload) {
                    return state
                }

                const { items, items_count, pepperestfees, shipping, totalprice, total_sum } = payload

                // Add cart from db to the state array
                state = {
                    cartItems: items,
                    cartCount: items_count,
                    charges: pepperestfees,
                    shipping,
                    totalPrice: totalprice,
                    totalSum: total_sum,
                }

                return state
            })
            .addMatcher(cartApi.endpoints.addToCart.matchFulfilled, (state, { payload }) => {
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
            })
    },
})

export const { updateCart } = cartSlice.actions
export const getUserCart = (state: RootState) => state.cart
export default cartSlice.reducer
