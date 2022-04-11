import { useRouter } from 'next/router'
import {
    useLazyDeleteAProductQuery,
    useGetAllProductsQuery,
    useSearchMerchantProductsQuery,
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

    const products = data?.products.data ?? []

    const {
        data: res,
        isLoading: searchLoading,
        isFetching: seearchFetching,
    } = useSearchMerchantProductsQuery(productId as string)
    const product = res?.products?.data[0]

    const onDelete = async (url: string) => {
        if (!productId) {
            return showErrorSnackbar('Unable to delete product')
        }

        const res = await deleteAProduct(productId)

        if (res.isSuccess) {
            router.push(url)
            refetch()
            showSuccessSnackbar('Product deleted successfully!')
        }
    }

    return {
        product,
        products,
        isLoading: isLoading || searchLoading || isFetching || seearchFetching,
        refetch,
        deleteProduct: { deleteAProduct, onDelete, deleteIsFetching, delIsLoading, delIsSuccess },
    }
}
