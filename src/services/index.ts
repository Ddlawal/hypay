import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
    prepareHeaders: (headers, { getState }) => {
        const { auth } = getState() as RootState
        if (auth.token) {
            headers.set('Authorization', `Bearer ${auth.token}`)
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
