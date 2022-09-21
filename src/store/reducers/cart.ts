import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { CartItemsType, CartType } from '../../interfaces/cart'
import { RootState } from '..'
import { cartApi } from '../services/cart'

interface CartState {
    cartItems: CartType['items']
    cartCount: CartType['items_count']
}

const initialState = { cartItems: [], cartCount: 0 } as CartState

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action: PayloadAction<CartItemsType>) {
            return {
                cartItems: [action.payload, ...state.cartItems],
                cartCount: state.cartCount + 1,
            }
        },
        removeFromCart(state, action: PayloadAction<number>) {
            state.cartItems.filter((item) => item.id !== action.payload)
            return state
        },
        clearCart() {
            return initialState
        },
    },
    extraReducers: (builder) => {
        builder
            .addMatcher(cartApi.endpoints.getBuyerCart.matchFulfilled, (state, { payload }) => {
                if (!payload) {
                    return state
                }
                const { items, items_count } = payload
                // Add cart from db to the state array
                state.cartItems.concat(items)
                state.cartCount = items_count
            })
            .addMatcher(cartApi.endpoints.addToCart.matchFulfilled, (state, { payload }) => {
                const { items, items_count } = payload

                const item = items[items_count - 1]
                state.cartItems.push(item)
                state.cartCount = items_count
            })
    },
})

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions
export const getUserCart = (state: RootState) => state.cart
export default cartSlice.reducer
