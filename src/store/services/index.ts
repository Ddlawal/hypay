import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// import { RootState } from '../index'

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

// This section will be used for next auth
// const baseQueryWithReauth = async (arg: string, api: BaseQueryApi, extraOptions: {}) => {
//     let result = await baseQuery(arg, api, extraOptions)
//     if (result.error && result.error.status === 403) {
//         api.dispatch(login({ loginData: result?.data as unknown }))
//         return console.log(result?.error?.status)
//     } else {
//         console.log(result, 'is successfulll')
//         return result
//     }
// }

const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: baseQuery,
    endpoints: () => ({}),
    tagTypes: ['user', 'products', 'requests', 'merchant'],
    //  cache , The default time is seconds , Default duration 60 second
    keepUnusedDataFor: 5 * 60,
    refetchOnMountOrArgChange: 30 * 60,
    refetchOnFocus: true,
    refetchOnReconnect: true,
})

export default baseApi
