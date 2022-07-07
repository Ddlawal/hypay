import { useRouter } from 'next/router'
import {
    useLazyDeleteAProductQuery,
    useGetAllProductsQuery,
    useSearchMerchantProductsQuery,
    useLazySearchMerchantProductsQuery,
} from '../store/services/products'
import { useSnackbar } from './useSnackbar'

export const useProducts = (productId?: string) => {
    const { showSuccessSnackbar, showErrorSnackbar } = useSnackbar()
    const router = useRouter()
    const { data, isLoading, isFetching, refetch } = useGetAllProductsQuery(undefined, {
        pollingInterval: 3000,
        refetchOnMountOrArgChange: true,
        skip: false,
    })

    const [deleteAProduct, { isFetching: deleteIsFetching, isLoading: delIsLoading, isSuccess: delIsSuccess }] =
        useLazyDeleteAProductQuery()

    const products = data ?? []

    const {
        data: res,
        isLoading: searchLoading,
        isFetching: seearchFetching,
    } = useSearchMerchantProductsQuery(productId as string, {
        refetchOnMountOrArgChange: true,
    })
    const product = res ? res[0] : undefined

    const [searchProduct] = useLazySearchMerchantProductsQuery()

    const onDelete = async (id: string, url: string) => {
        const res = await deleteAProduct(id)

        if (res.isSuccess) {
            router.replace(url)
            refetch()
            showSuccessSnackbar('Product deleted successfully!')
        } else {
            showErrorSnackbar('Unable to delete product')
        }
    }

    const onDeleteMany = async (ids: Array<string>) => {
        if (!ids.length) {
            return
        }

        const resultPromises: Array<ReturnType<typeof deleteAProduct>> = []

        for (let i = 0; i < ids.length; i++) {
            const res = deleteAProduct(ids[i])

            resultPromises.push(res)
        }

        try {
            await Promise.all(resultPromises)
        } catch (error) {
            showErrorSnackbar(`Error! Unable to delete ${ids.length > 1 ? 'items' : 'item'}!`)
        } finally {
            refetch()
            showSuccessSnackbar(`${ids.length} ${ids.length > 1 ? 'items' : 'item'} deleted successfully`)
        }
    }

    return {
        product,
        products,
        isLoading: isLoading || searchLoading || isFetching || seearchFetching,
        deleteProduct: { deleteAProduct, onDelete, onDeleteMany, deleteIsFetching, delIsLoading, delIsSuccess },
        refetch,
        searchProduct,
    }
}
