import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQuery } from '.'
import { DeleteNotification, GetMessageData, Message, MessageThread, NotificationData } from '../../interfaces/messages'

export const messageApi = createApi({
    reducerPath: 'messagesApi',
    baseQuery: baseQuery,
    endpoints: (builder) => ({
        getAllMessages: builder.query<Array<MessageThread>, void>({
            query: () => ({
                url: '/message/all',
                method: 'POST',
            }),
            transformResponse: (res: { threads: { data: Array<MessageThread> } }) => res.threads.data,
        }),
        getMessages: builder.query<MessageThread, GetMessageData>({
            query: (data: GetMessageData) => ({
                url: '/thread/getMessages',
                method: 'POST',
                body: data,
            }),
            transformResponse: (res: { thread: MessageThread }) => res.thread,
        }),
        sendMessage: builder.mutation<Array<Message>, FormData>({
            query: (data: FormData) => ({
                url: '/message/sendMessage',
                method: 'POST',
                body: data,
            }),
            transformResponse: (res: { chats: { data: Array<Message> } }) => res.chats.data,
        }),
        getAllNotifications: builder.query<Array<NotificationData>, void>({
            query: () => ({
                url: '/userAccount/getNotifications',
                method: 'GET',
            }),
            transformResponse: (res: { notifications: Array<NotificationData> }) => res.notifications,
        }),
        deleteNotification: builder.mutation<Array<NotificationData>, DeleteNotification>({
            query: (data: DeleteNotification) => ({
                url: '/userAccount/deleteNotification',
                method: 'POST',
                body: data,
            }),
            transformResponse: (res: { notifications: Array<NotificationData> }) => res.notifications,
        }),
    }),
})

export const {
    useGetAllMessagesQuery,
    useLazyGetAllMessagesQuery,
    useGetMessagesQuery,
    useLazyGetMessagesQuery,
    useLazyGetAllNotificationsQuery,
    useSendMessageMutation,
    useDeleteNotificationMutation,
} = messageApi
