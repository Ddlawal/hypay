import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQuery } from '.'
import { AddBuyerAddressType, BuyerAddresses } from '../../interfaces/buyer'

export const buyerApi = createApi({
    reducerPath: 'buyerApi',
    baseQuery: baseQuery,
    endpoints: (builder) => ({
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

export const { useAddBuyerAddressMutation } = buyerApi
