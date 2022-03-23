import { createApi, fetchBaseQuery, BaseQueryFn, FetchArgs, FetchBaseQueryError } from '@reduxjs/toolkit/query/react'
import { RootState } from '../store'

const baseQuery = fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
    prepareHeaders: (headers, { getState }) => {
        const {
            auth: { user },
        } = getState() as RootState

        if (Object.keys(user).length) {
            headers.set('Authorization', `Bearer ${user?.token?.access_token}`)
        }
        return headers
    },
})

const baseQueryWithReauth: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
    arg,
    api,
    extraOptions
) => {
    let result = await baseQuery(arg, api, extraOptions)
    if (result.error && result.error.status === 403) {
        // api.dispatch(login({ loginData: result?.data as object }))
    } else {
        // api.dispatch(logout())
    }
    return result
}

const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: baseQueryWithReauth,
    endpoints: () => ({}),
    //  cache , The default time is seconds , Default duration 60 second
    tagTypes: ['user'],
    keepUnusedDataFor: 5 * 60,
    refetchOnMountOrArgChange: 30 * 60,
})

export default baseApi
