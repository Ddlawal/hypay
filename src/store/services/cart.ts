import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQuery } from '.'
import { AddToCartType, CartType, RemoveFromCartType } from '../../interfaces/cart'

const cart_id = null

export const cartApi = createApi({
    reducerPath: 'cartApi',
    baseQuery: baseQuery,
    endpoints: (builder) => ({
        getBuyerCart: builder.query<CartType | undefined, void>({
            query: () => ({
                url: '/cart/buyerCart',
                method: 'GET',
            }),
            transformResponse: (res: { cart: CartType }) => (Array.isArray(res.cart) ? undefined : res.cart),
        }),
        addToCart: builder.mutation<CartType, AddToCartType>({
            query: (data: AddToCartType) => ({
                url: '/cart/addToCart',
                method: 'POST',
                body: { ...data, cart_id },
            }),
            transformResponse: (res: { cart: CartType }) => res.cart,
        }),
        removeFromCart: builder.mutation<CartType, RemoveFromCartType>({
            query: (data: RemoveFromCartType) => ({
                url: '/cart/removeFromCart',
                method: 'POST',
                body: { ...data, cart_id },
            }),
            transformResponse: (res: { cart: CartType }) => res.cart,
        }),
    }),
})

export const { useLazyGetBuyerCartQuery, useAddToCartMutation, useRemoveFromCartMutation } = cartApi
