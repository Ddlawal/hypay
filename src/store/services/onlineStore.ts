import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQuery } from '.'
import { ISetTheme, ISingleTheme, IUserProfile } from '../../interfaces/onlineStore'

export const onlineTheme = createApi({
    reducerPath: 'onlineTheme',
    baseQuery: baseQuery,
    endpoints: (builder) => ({
        fetchTheme: builder.query({
            query: () => ({
                url: '/themes',
                methods: 'GET',
            }),
        }),
        getProfileInfo: builder.query<IUserProfile, void>({
            query: () => ({
                url: '/userAccount/getProfileInfo',
                method: 'GET',
            }),
            transformResponse: (res: IUserProfile) => res,
        }),
        setTheme: builder.mutation<ISingleTheme, ISetTheme>({
            query: (data: ISetTheme) => {
                console.log(data, 'that was passwd into the slice')
                return {
                    url: '/setTheme',
                    method: 'POST',
                    body: data,
                }
            },
            transformResponse: (res: { userInfo: { theme: ISingleTheme } }) => res?.userInfo?.theme,
        }),
    }),
})

export const { useFetchThemeQuery, useLazyGetProfileInfoQuery, useGetProfileInfoQuery, useSetThemeMutation } =
    onlineTheme
