import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { BuyerAddress, PaymentProviders, ShippingRates } from '../interfaces/buyer'
import { getBuyerDetails, setBuyerAddress, setBuyerShipping, setPaymentProvider } from '../store/reducers/buyer'
import { useLazyGetBuyerAddressesQuery, useLazyGetShipmentRatesQuery } from '../store/services/buyer'
import { useCart } from './useCart'
import { useAppSelector } from './useStoreHooks'

type RequestData = 'address' | 'shipping'

export const useCheckout = (type?: RequestData) => {
    const buyerDetails = useAppSelector(getBuyerDetails)
    const [getBuyerAddresses, { isFetching, isLoading }] = useLazyGetBuyerAddressesQuery()
    const [getShippingRates, { isFetching: isFetchingSR, isLoading: isLoadingSR }] = useLazyGetShipmentRatesQuery()
    const { cart } = useCart()
    const dispatch = useDispatch()

    const setAddress = (address: BuyerAddress | null) => dispatch(setBuyerAddress(address))
    const setShipping = (shipping: ShippingRates | null) => dispatch(setBuyerShipping(shipping))
    const setProvider = (provider: PaymentProviders | null) => dispatch(setPaymentProvider(provider))

    useEffect(() => {
        if (type === 'address') {
            getBuyerAddresses()
        }
        if (type === 'shipping') {
            getShippingRates({ cartId: cart.cartId, addressId: buyerDetails.preferredAddress?.address_id as number })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [type])

    return {
        ...buyerDetails,
        isFetchingBuyerAddress: isFetching || isLoading,
        isFetchingShippingRates: isFetchingSR || isLoadingSR,
        setAddress,
        setShipping,
        setProvider,
    }
}
