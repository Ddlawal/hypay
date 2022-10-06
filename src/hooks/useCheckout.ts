import { useEffect } from 'react'
import { getBuyerDetails } from '../store/reducers/buyer'
import { useLazyGetBuyerAddressesQuery } from '../store/services/buyer'
import { useAppSelector } from './useStoreHooks'

export const useCheckout = () => {
    const buyerDetails = useAppSelector(getBuyerDetails)
    const [getBuyerAddress, { isFetching, isLoading }] = useLazyGetBuyerAddressesQuery()

    useEffect(() => {
        getBuyerAddress()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return { ...buyerDetails, isFetchingBuyerAddress: isFetching || isLoading }
}
