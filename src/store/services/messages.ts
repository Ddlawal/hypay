import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQuery } from '.'
import { MessageThread } from '../../interfaces/messages'

export const messageApi = createApi({
    reducerPath: 'messagesApi',
    baseQuery: baseQuery,
    endpoints: (builder) => ({
        getAllMessages: builder.query<MessageThread[], void>({
            query: () => ({
                url: '/message/all',
                method: 'POST',
            }),
            transformResponse: (res: { threads: { data: MessageThread[] } }) => res.threads.data,
        }),
        sendMessage: builder.mutation<MessageThread[], FormData>({
            query: (data: FormData) => ({
                url: '/message/sendMessage',
                method: 'POST',
                body: data,
            }),
            transformResponse: (res: { chats: { data: MessageThread[] } }) => res.chats.data,
        }),
    }),
})

export const { useGetAllMessagesQuery, useSendMessageMutation } = messageApi
