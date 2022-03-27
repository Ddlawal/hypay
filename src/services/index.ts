import { createApi, fetchBaseQuery, BaseQueryFn, FetchArgs, FetchBaseQueryError } from '@reduxjs/toolkit/query/react'
import { login, logout } from '../reducers/auth'
import { RootState } from '../store'
import { BaseQueryApi } from '@reduxjs/toolkit/dist/query/baseQueryTypes'
import { HYDRATE } from 'next-redux-wrapper'

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

const baseQueryWithReauth = async (arg: string, api: BaseQueryApi, extraOptions: {}) => {
    let result = await baseQuery(arg, api, extraOptions)
    if (result.error && result.error.status === 403) {
        api.dispatch(login({ loginData: result?.data as unknown }))
    } else {
        api.dispatch(logout())
    }
    return result
}

const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: baseQueryWithReauth,
    endpoints: () => ({}),
    extractRehydrationInfo(action, { reducerPath }) {
        if (action.type === HYDRATE) {
            return { ...action.payload[reducerPath] }
        }
    },

    //  cache , The default time is seconds , Default duration 60 second
    tagTypes: ['user'],
    keepUnusedDataFor: 5 * 60,
    refetchOnMountOrArgChange: 30 * 60,
})

export default baseApi
