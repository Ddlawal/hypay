import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { RequestType } from '../interfaces/requests'
import { useLazyGetAllRequestsQuery, useLazyGetRequestQuery } from '../store/services/requests'

export const statusLabel: Array<string> = ['Order Processing', 'Order Shipped', 'Order Delivered']

export const statusLabelMap: Record<string, number> = {
    'Order Processing': 1,
    'Order Shipped': 3,
    'Order Delivered': 5,
}

export const useRequests = (requestType: 'all' | 'single' = 'all') => {
    // const [statuses, setStatuses] = useState<string[]>([])
    const [activeStatusIndex, setActiveStatusIndex] = useState(0)
    const [requests, setRequests] = useState<Array<RequestType>>([])
    const [request, setRequest] = useState<RequestType>()
    // const [getStatuses, { isFetching: isStatusFetching, isLoading: isStatusLoading }] = useLazyGetRequestStatusesQuery()
    const [getAllRequests, { isFetching, isLoading }] = useLazyGetAllRequestsQuery()
    const [getRequest, { isFetching: isFetchingOne, isLoading: isLoadingOne, error }] = useLazyGetRequestQuery()

    const {
        query: { id },
        isReady,
    } = useRouter()

    useEffect(() => {
        const fetchData = async () => {
            if (isReady) {
                if (requestType === 'all') {
                    const result = await getAllRequests().unwrap()
                    setRequests(result ?? [])
                } else {
                    const res = await getRequest(id as string).unwrap()

                    if (res) {
                        setRequest(res)

                        statusLabel.forEach((label) => {
                            if (label === res?.status) {
                                return setActiveStatusIndex(statusLabelMap[label])
                            }
                        })
                    }
                }
            }
        }

        fetchData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isReady])

    // useEffect(() => {
    //     if (req?.includes('getStatuses')) {
    //         const fetchStatuses = async () => {
    //             const { data } = await getStatuses()

    //             if (data) {
    //                 setStatuses(data)
    //             }
    //         }
    //         fetchStatuses()
    //     }
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [])

    return {
        request,
        requests: requests ?? [],
        isLoading: isLoading || isFetching || isFetchingOne || isLoadingOne || !isReady,
        activeStatusIndex,
        error,
    }
}
