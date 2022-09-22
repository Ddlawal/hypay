import { useEffect } from 'react'

import { useAppSelector } from './useStoreHooks'
import { showErrorSnackbar, showSuccessSnackbar } from '../lib/helper'
import { getUserCart } from '../store/reducers/cart'
import { useAddToCartMutation, useLazyGetBuyerCartQuery, useRemoveFromCartMutation } from '../store/services/cart'
import { RemoveFromCartType } from '../interfaces/cart'

export const useCart = () => {
    // const [localCart, setLocalCart] = useState([])
    const [getCart] = useLazyGetBuyerCartQuery()
    const [addItemToCart, { isLoading: isAddingToCart }] = useAddToCartMutation()
    const [removeItemFromCart, { isLoading: isRemovingFromCart }] = useRemoveFromCartMutation()

    const handleAddToCart = async (productID: number, quantity: number) => {
        if (isAddingToCart) {
            return
        }
        try {
            await addItemToCart({ productID, quantity }).unwrap()
            showSuccessSnackbar('Item added successfully')
        } catch (error) {
            showErrorSnackbar('Error! Unable to add item to cart')
        }
    }

    const handleRemoveFromCart = async (args: RemoveFromCartType) => {
        if (isAddingToCart) {
            return
        }
        try {
            await removeItemFromCart(args).unwrap()
            getCart()
            showSuccessSnackbar('Item removed successfully')
        } catch (error) {
            showErrorSnackbar('Error! Unable to add item to cart')
        }
    }

    const cart = useAppSelector(getUserCart)

    useEffect(() => {
        getCart()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return { cart, handleAddToCart, isAddingToCart, isRemovingFromCart, handleRemoveFromCart }
}
