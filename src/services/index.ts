import { createApi, fetchBaseQuery, BaseQueryFn, FetchArgs, FetchBaseQueryError } from '@reduxjs/toolkit/query/react'
import { login, logout } from '../reducers/auth'
import { RootState } from '../store'
import { BaseQueryApi } from '@reduxjs/toolkit/dist/query/baseQueryTypes'

const baseQuery = fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
    prepareHeaders: (headers, { getState }) => {
        console.log(getState())
        headers.set('Access-Control-Allow-Origin', '*')
        // const {
        //     auth: { user },
        // } = getState() as RootState
        const user = JSON.parse(localStorage.getItem('user') as string)

        if (user) {
            headers.set('Authorization', `Bearer ${user?.token?.access_token}`)
        }
        return headers
    },
})

// This section will be used for next auth
const baseQueryWithReauth = async (arg: string, api: BaseQueryApi, extraOptions: {}) => {
    let result = await baseQuery(arg, api, extraOptions)
    if (result.error && result.error.status === 403) {
        api.dispatch(login({ loginData: result?.data as unknown }))
        return console.log(result?.error?.status)
    } else {
        console.log(result, 'is successfulll')
        return result
    }
}
const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: baseQuery,
    endpoints: () => ({}),
    //  cache , The default time is seconds , Default duration 60 second
    tagTypes: ['user'],
    keepUnusedDataFor: 5 * 60,
    refetchOnMountOrArgChange: 30 * 60,
})

export default baseApi
