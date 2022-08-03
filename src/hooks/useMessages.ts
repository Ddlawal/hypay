import { LazyQueryType, MutationType } from '../interfaces/helperTypes'
import {
    DeleteNotification,
    GetMessageData,
    Message,
    MessageData,
    MessageThread,
    NotificationData,
} from '../interfaces/messages'
import {
    useDeleteNotificationMutation,
    useLazyGetAllMessagesQuery,
    useLazyGetAllNotificationsQuery,
    useLazyGetMessagesQuery,
    useSendMessageMutation,
} from '../store/services/messages'

type UseMessagesType = {
    getMessageThreads: LazyQueryType<void, Array<MessageThread>>
    getThread: LazyQueryType<GetMessageData, MessageThread>
    getAllNotifications: LazyQueryType<void, Array<NotificationData>>
    sendMessage: (messageData: MessageData) => Promise<Array<Message> | undefined>
    deleteNotification: MutationType<DeleteNotification, Array<NotificationData>>
    isLoading: boolean
    isLoadingOne: boolean
    isLoadingNotifications: boolean
    isDeletingNotification: boolean
}

export const useMessages = (): UseMessagesType => {
    const [getMessageThreads, { isFetching, isLoading }] = useLazyGetAllMessagesQuery()
    const [getThread, { isFetching: isFetchingOne, isLoading: isLoadingOne }] = useLazyGetMessagesQuery()
    const [sendMessageMutation] = useSendMessageMutation()
    const [getAllNotifications, { isFetching: isFetchingNotification, isLoading: isLoadingNotification }] =
        useLazyGetAllNotificationsQuery()

    const [deleteNotification, { isLoading: isDeletingNotification }] = useDeleteNotificationMutation()

    const sendMessage = async (messageData: MessageData): Promise<Array<Message> | undefined> => {
        const data = new FormData()

        Object.entries(messageData).map(([key, value]) => {
            data.append(key, value)
        })

        try {
            const payload = await sendMessageMutation(data).unwrap()

            return payload
        } catch (error) {
            console.log(error)
        }
    }

    return {
        getMessageThreads,
        getThread,
        sendMessage,
        getAllNotifications,
        deleteNotification,
        isLoading: isLoading || isFetching,
        isLoadingOne: isLoadingOne || isFetchingOne,
        isLoadingNotifications: isFetchingNotification || isLoadingNotification,
        isDeletingNotification,
    }
}
