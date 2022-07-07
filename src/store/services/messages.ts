import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQuery } from '.'
import { GetMessageData, Message, MessageThread } from '../../interfaces/messages'

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
        getMessages: builder.query<MessageThread, GetMessageData>({
            query: (data: GetMessageData) => ({
                url: '/thread/getMessages',
                method: 'POST',
                body: data,
            }),
            transformResponse: (res: { thread: MessageThread }) => res.thread,
        }),
        sendMessage: builder.mutation<Message[], FormData>({
            query: (data: FormData) => ({
                url: '/message/sendMessage',
                method: 'POST',
                body: data,
            }),
            transformResponse: (res: { chats: { data: Message[] } }) => res.chats.data,
        }),
    }),
})

export const {
    useGetAllMessagesQuery,
    useLazyGetAllMessagesQuery,
    useSendMessageMutation,
    useGetMessagesQuery,
    useLazyGetMessagesQuery,
} = messageApi
