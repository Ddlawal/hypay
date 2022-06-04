// import baseApi from '.'
import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQuery } from '.'
import { MerchantStore, MerchantStorteQueryArg } from '../../interfaces/merchant'

export const merchantApi = createApi({
    reducerPath: 'merchantsApi',
    baseQuery: baseQuery,
    endpoints: (builder) => ({
        getMerchantStore: builder.query<MerchantStore, MerchantStorteQueryArg>({
            query: (body: MerchantStorteQueryArg) => ({
                url: '/product/merchantStore',
                method: 'GET',
                body,
            }),
        }),
    }),
})
