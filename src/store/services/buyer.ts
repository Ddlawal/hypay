import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQuery } from '.'
import { AddBuyerAddressType, BuyerAddresses } from '../../interfaces/buyer'

export const buyerApi = createApi({
    reducerPath: 'buyerApi',
    baseQuery: baseQuery,
    endpoints: (builder) => ({
        getBuyerAddresses: builder.query<Array<BuyerAddresses> | undefined, void>({
            query: () => ({
                url: '/order/buyerAddress',
                method: 'GET',
            }),
            transformResponse: (res: { addresses: Array<BuyerAddresses> }) => res.addresses,
        }),
        addBuyerAddress: builder.mutation<Array<BuyerAddresses>, AddBuyerAddressType>({
            query: (data: AddBuyerAddressType) => ({
                url: '/order/buyerAddress/add',
                method: 'POST',
                body: data,
            }),
            transformResponse: (res: { addresses: Array<BuyerAddresses> }) => res.addresses,
        }),
    }),
})

export const { useAddBuyerAddressMutation, useLazyGetBuyerAddressesQuery } = buyerApi
