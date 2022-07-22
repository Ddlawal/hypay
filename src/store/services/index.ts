import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { HYDRATE } from 'next-redux-wrapper'

export const baseQuery = fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
    prepareHeaders: (headers) => {
        headers.set('Access-Control-Allow-Origin', '*')
        const user = JSON.parse(localStorage.getItem('user') as string)
        // const token = (getState() as RootState).auth?.token?.access_token

        if (user?.token?.access_token) {
            headers.set('Authorization', `Bearer ${user.token.access_token}`)
        }
        return headers
    },
})

const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: baseQuery,
    extractRehydrationInfo(action, { reducerPath }) {
        if (action.type === HYDRATE) {
            return action.payload[reducerPath]
        }
    },
    endpoints: () => ({}),
    tagTypes: ['user', 'products', 'requests', 'merchant', 'messages'],
    //  cache , The default time is seconds , Default duration 60 second
    keepUnusedDataFor: 5 * 60,
    refetchOnMountOrArgChange: 30 * 60,
    refetchOnFocus: true,
    refetchOnReconnect: true,
})

export default baseApi
