import { useEffect, useState } from 'react'
import { RequestType } from '../interfaces/requests'
import {
    useLazyGetAllRequestsQuery,
    useLazyGetRequestQuery,
    useLazyGetRequestStatusesQuery,
} from '../store/services/requests'

export const statusLabelMap: Record<string, string> = {
    'Order Processing': 'Processando pedido',
    'Order Shipped': 'Pedido enviado',
    'Order Delivered': 'Pedido completo',
}

export const useRequests = (requestId?: string, req?: string[]) => {
    const [statuses, setStatuses] = useState<string[]>([])
    const [activeStatusIndex, setActiveStatusIndex] = useState(0)
    const [requests, setRequests] = useState<RequestType[]>([])
    const [request, setRequest] = useState<RequestType>()
    const [getStatuses, { isFetching: isStatusFetching, isLoading: isStatusLoading }] = useLazyGetRequestStatusesQuery()
    const [getAllRequests, { isFetching, isLoading }] = useLazyGetAllRequestsQuery()
    const [getRequest, { isFetching: isFetchingOne, isLoading: isLoadingOne, error }] = useLazyGetRequestQuery()

    useEffect(() => {
        const fetchData = async () => {
            if (!requestId) {
                const result = await getAllRequests().unwrap()
                setRequests(result ?? [])
            } else {
                const request = await getRequest(requestId).unwrap()
                setRequest(request ?? undefined)
            }
        }

        fetchData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        if (req?.includes('getStatuses')) {
            const fetchStatuses = async () => {
                const { data } = await getStatuses()

                if (data) {
                    setStatuses(data)
                }
            }
            fetchStatuses()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        Object.keys(statusLabelMap).forEach((label, i) => {
            if (label === request?.status) {
                return setActiveStatusIndex(i)
            }
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return {
        request,
        requests: requests ?? [],
        isLoading: isLoading || isFetching || isStatusFetching || isStatusLoading || isFetchingOne || isLoadingOne,
        statuses,
        activeStatusIndex,
        error,
    }
}
