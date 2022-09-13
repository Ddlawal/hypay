import { createApi } from '@reduxjs/toolkit/query/react'
import {
    IGetWhatsappNumberResponse,
    INotificationSettingsNumber,
    INumberAndQrcode,
    IUpdatewhatsappNumber,
    IUserProfile,
    IwhatsappNumber,
} from '../../../interfaces/onlineStore'
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
        addWhatsAppNumber: builder.mutation({
            query: (whatsappNumber: IwhatsappNumber) => ({
                url: '/userAccount/connectWhatsapp',
                method: 'POST',
                body: whatsappNumber,
            }),
        }),
        updateWhatsAppNumber: builder.mutation({
            query: (detailsToUpdate: IUpdatewhatsappNumber) => ({
                url: '/userAccount/updateWhatsappAccount',
                method: 'POST',
                body: detailsToUpdate,
            }),
        }),
        getWhatsAppNumber: builder.query<IGetWhatsappNumberResponse, void>({
            query: () => ({
                url: '/userAccount/myWhatsappAccounts',
                method: 'GET',
            }),
        }),
        connectWhatsAppNumber: builder.mutation({
            query: (whatsAppDetails: INumberAndQrcode) => ({
                url: '/userAccount/addWhatsappAccount',
                method: 'POST',
                body: whatsAppDetails,
            }),
        }),
    }),
})

export const {
    useChangeNotificationStatusMutation,
    useAddWhatsAppNumberMutation,
    useUpdateWhatsAppNumberMutation,
    useLazyGetWhatsAppNumberQuery,
    useConnectWhatsAppNumberMutation,
} = notificationSettings
