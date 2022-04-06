import { useEffect } from 'react'
import { useGetAllProductsQuery } from '../store/services/productAndOrders'

export const useProducts = (productId?: string) => {
    const { data, isLoading, isFetching, refetch } = useGetAllProductsQuery()

    useEffect(() => refetch(), [refetch])

    const products = data?.products.data ?? []
    const product = productId ? products.filter(({ id }) => id === Number(productId))[0] : null

    return { product, products, isLoading: isLoading || isFetching }
}
