import { createApi } from '@reduxjs/toolkit/query/react'
import { INotificationSettingsNumber, IUserProfile } from '../../../interfaces/onlineStore'
import { baseQuery } from '../index'

export const notificationSettings = createApi({
    reducerPath: 'notificationSettings',
    baseQuery: baseQuery,
    endpoints: (builder) => ({
        changeNotificationStatus: builder.mutation<IUserProfile, Partial<INotificationSettingsNumber>>({
            query: (data: Partial<INotificationSettingsNumber>) => ({
                url: '/userAccount/changeNotificationSetting',
                method: 'POST',
                body: data,
            }),
        }),
    }),
})

export const { useChangeNotificationStatusMutation } = notificationSettings
