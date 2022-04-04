import { RequestType } from '../interfaces/requests'
// import { useGetAllRequestsQuery } from '../services/requestAndOrders'

export const useRequests = (requestId?: string) => {
    // const { data, isLoading, isFetching, refetch } = useGetAllRequestsQuery()

    // useEffect(() => refetch(), [refetch])

    const requests: RequestType[] = [
        {
            id: 0,
            orderNo: '556',
            product_code: 'B#876',
            status: 'confirmed',
            amount: 'R$ 5600.00',
            frieght_type: 'PAC',
            payment_method: 'Cartão de crédito',
            cost_of_frieght: 'R$ 40.00',
            date: '04/04/2022',
        },
        {
            id: 1,
            orderNo: '472',
            product_code: 'B#880',
            status: 'cancelled',
            amount: '11350.00',
            frieght_type: 'SedEx',
            payment_method: 'Cartão de crédito',
            cost_of_frieght: 'R$ 450.00',
            date: '04/04/2022',
        },
    ]

    const request = requestId ? requests.filter(({ id }) => id === Number(requestId))[0] : null

    return { request, requests, isLoading: false }
}
