import { useEffect, useState } from 'react'
import { useGetAllRequestsQuery, useLazyGetRequestStatusesQuery } from '../store/services/requests'

export const statusLabelMap: Record<string, string> = {
    'Order Processing': 'Processando pedido',
    'Order Shipped': 'Pedido enviado',
    'Order Delivered': 'Pedido completo',
}

export const useRequests = (requestId?: string, req?: string[]) => {
    const [getStatuses] = useLazyGetRequestStatusesQuery()
    const { data: requests, isLoading } = useGetAllRequestsQuery()
    const [statuses, setStatuses] = useState<string[]>([])
    const [activeStatusIndex, setActiveStatusIndex] = useState(0)

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
            console.log(label, request?.status)
            if (label === request?.status) {
                return setActiveStatusIndex(i)
            }
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const request = requestId ? requests?.filter(({ orderId }) => orderId === Number(requestId))[0] : null

    return { request, requests: requests ?? [], isLoading, statuses, activeStatusIndex }
}
