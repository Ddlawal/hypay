import { MessageThread } from '../interfaces/messages'
import { useGetAllMessagesQuery } from '../store/services/messages'

type UseMessagesType = {
    messageThreads: MessageThread[]
    isLoading: boolean
}

export const useMessages = (): UseMessagesType => {
    const { data, isFetching, isLoading } = useGetAllMessagesQuery(undefined, {
        pollingInterval: 3000,
        refetchOnMountOrArgChange: true,
        skip: false,
    })

    return { messageThreads: data ?? [], isLoading: isLoading || isFetching }
}
