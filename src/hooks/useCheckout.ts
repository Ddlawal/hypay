import { getBuyerDetails } from '../store/reducers/buyer'
import { useAppSelector } from './useStoreHooks'

export const useCheckout = () => {
    const buyerDetails = useAppSelector(getBuyerDetails)

    return { ...buyerDetails }
}
