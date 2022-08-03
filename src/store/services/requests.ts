import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQuery } from '.'
import { RequestType } from '../../interfaces/requests'

export const requestApi = createApi({
    reducerPath: 'requestsApi',
    baseQuery: baseQuery,
    endpoints: (builder) => ({
        getAllRequests: builder.query<Array<RequestType>, void>({
            query: () => ({
                url: '/myOrders?pageType=Dashboard',
                method: 'GET',
            }),
            transformResponse: (res: { orders: Array<RequestType> }) => res.orders,
        }),
        getRequest: builder.query<RequestType, string>({
            query: (requestId: string) => ({
                url: `/myOrders?pageType=Dashboard&query=${requestId}`,
                method: 'GET',
            }),
            transformResponse: (res: { orders: { data: Array<RequestType> } }) => res.orders.data[0],
        }),
        getRequestStatuses: builder.query<Array<string>, void>({
            query: () => ({
                url: '/order/getStatuses',
                method: 'GET',
            }),
            transformResponse: (res: { orderStatuses: Array<string> }) => res.orderStatuses,
        }),
    }),
})

export const { useLazyGetAllRequestsQuery, useLazyGetRequestQuery, useLazyGetRequestStatusesQuery } = requestApi
