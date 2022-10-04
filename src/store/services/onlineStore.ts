import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQuery } from '.'
import {
    // IReferralsLevelWrapper,
    ISetTheme,
    ISingleTheme,
    IUserProfile,
    ReferralLevel,
} from '../../interfaces/onlineStore'

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
        getReferralLevels: builder.query<ReferralLevel[], void>({
            query: () => {
                return {
                    url: '/userAccount/getReferralLevels',
                    method: 'GET',
                }
            },
            transformResponse: (res: { referral_levels: ReferralLevel[] }) => res.referral_levels,
        }),
    }),
})

export const {
    useFetchThemeQuery,
    useLazyGetProfileInfoQuery,
    useGetProfileInfoQuery,
    useSetThemeMutation,
    useGetReferralLevelsQuery,
} = onlineTheme
