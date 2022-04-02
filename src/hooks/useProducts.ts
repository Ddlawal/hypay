import { useEffect } from 'react'
import { useGetAllProductsQuery } from '../services/productAndOrders'

export const useProducts = () => {
    const { data, isLoading, isFetching, refetch } = useGetAllProductsQuery()

    useEffect(() => refetch(), [refetch])

    const products = data?.products.data ?? []

    return { products, isLoading: isLoading || isFetching }
}
