import { useEffect } from 'react'
import { getUserCart } from '../store/reducers/cart'
import { useLazyGetBuyerCartQuery } from '../store/services/cart'
import { useAppSelector } from './useStoreHooks'

export const useCart = () => {
    // const [localCart, setLocalCart] = useState([])
    const [getCart] = useLazyGetBuyerCartQuery()

    const { cartCount, cartItems } = useAppSelector(getUserCart)

    useEffect(() => {
        getCart()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return {
        cartCount,
        cartItems,
    }
}
