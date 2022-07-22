import { useEffect, useState } from 'react'
import { MessageData, MessageThread } from '../interfaces/messages'
import { useLazyGetAllMessagesQuery, useLazyGetMessagesQuery, useSendMessageMutation } from '../store/services/messages'

type UseMessagesType = {
    messageThreads: MessageThread[]
    thread?: MessageThread
    isLoading: boolean
    sendMessage: (messageData: MessageData) => Promise<boolean>
}

export const useMessages = (thread_id?: number): UseMessagesType => {
    const [messageThreads, setMessageThreads] = useState<MessageThread[]>([])
    const [thread, setThread] = useState<MessageThread>()

    const [getMessageThreads, { isFetching, isLoading }] = useLazyGetAllMessagesQuery()
    const [getThread, { isFetching: isFetchingOne, isLoading: isLoadingOne }] = useLazyGetMessagesQuery()
    const [sendMessageMutation] = useSendMessageMutation()

    useEffect(() => {
        const fetchData = async () => {
            if (!thread_id) {
                const result = await getMessageThreads().unwrap()
                setMessageThreads(result ?? [])
            } else {
                const thread = await getThread({ thread_id }).unwrap()
                setThread(thread ?? [])
            }
        }

        fetchData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [thread_id])

    const sendMessage = async (messageData: MessageData): Promise<boolean> => {
        const data = new FormData()

        Object.entries(messageData).map(([key, value]) => {
            data.append(key, value)
        })

        try {
            const payload = await sendMessageMutation(data).unwrap()
            setThread((prev) => {
                return { thread_id: prev?.thread_id as number, messages: payload }
            })

            return true
        } catch (error) {
            console.log(error)

            return false
        }
    }

    return { messageThreads, thread, isLoading: isLoading || isFetching || isLoadingOne || isFetchingOne, sendMessage }
}
