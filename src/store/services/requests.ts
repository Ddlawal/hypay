import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQuery } from '.'
import { RequestType } from '../../interfaces/requests'

export const requestApi = createApi({
    reducerPath: 'requestsApi',
    baseQuery: baseQuery,
    endpoints: (builder) => ({
        getAllRequests: builder.query<RequestType[], void>({
            query: () => ({
                url: '/myOrders?pageType=Dashboard',
                method: 'GET',
            }),
            transformResponse: (res: { orders: RequestType[] }) => res.orders,
        }),
        getRequestStatuses: builder.query<string[], void>({
            query: () => ({
                url: '/order/getStatuses',
                method: 'GET',
            }),
            transformResponse: (res: { orderStatuses: string[] }) => res.orderStatuses,
        }),
    }),
})

export const { useGetAllRequestsQuery, useLazyGetRequestStatusesQuery } = requestApi
