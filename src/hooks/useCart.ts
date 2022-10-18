import { useEffect } from 'react'

import { useAppDispatch, useAppSelector } from './useStoreHooks'
import { showErrorSnackbar, showSuccessSnackbar } from '../lib/helper'
import { CartState, getUserCart, LOCAL_CART_KEY, updateCart } from '../store/reducers/cart'
import { useAddToCartMutation, useLazyGetBuyerCartQuery, useRemoveFromCartMutation } from '../store/services/cart'
import { AddToCartType, CartType, RemoveFromCartType } from '../interfaces/cart'
import { useSession } from './useSession'

export const useCart = () => {
    // const [localCart, setLocalCart] = useState([])
    const [getCart] = useLazyGetBuyerCartQuery()
    const [addItemToCart, { isLoading: isAddingToCart }] = useAddToCartMutation()
    const [removeItemFromCart, { isLoading: isRemovingFromCart }] = useRemoveFromCartMutation()
    const { user } = useSession()
    const dispatch = useAppDispatch()

    const cart = useAppSelector(getUserCart)

    const handleAddToCart = async ({
        image_url,
        productID,
        productName,
        quantity,
        showMessage = true,
        price,
    }: AddToCartType) => {
        if (isAddingToCart) {
            return
        }
        if (!user) {
            dispatch(updateCart({ image_url, productID, productName, quantity, price }))
            showMessage && showSuccessSnackbar('Item added successfully')
            return
        }
        try {
            await addItemToCart({ image_url, productID, productName, quantity, price }).unwrap()
            showMessage && showSuccessSnackbar('Item added successfully')
        } catch (error) {
            showErrorSnackbar('Error! Unable to add item to cart')
        }
    }

    const handleRemoveFromCart = async ({ productID, quantity, price, showMessage = true }: RemoveFromCartType) => {
        if (isRemovingFromCart) {
            return
        }
        if (!user) {
            dispatch(updateCart({ productID, quantity: quantity ? -quantity : quantity, price }))
            showMessage && showSuccessSnackbar('Item removed successfully')
            return
        }
        try {
            await removeItemFromCart({ productID, quantity, price }).unwrap()
            showMessage && showSuccessSnackbar('Item removed successfully')
        } catch (error) {
            showErrorSnackbar('Error! Unable to add item to cart')
        }
    }

    useEffect(() => {
        const updateDBCart = async () => {
            try {
                const serializedCart = localStorage.getItem(LOCAL_CART_KEY)
                if (!serializedCart) {
                    getCart()
                    return
                }

                const cart: CartState = JSON.parse(serializedCart)
                const addTocartArr: Array<Promise<CartType>> = []

                for (let i = 0; i < cart.cartItems.length; i++) {
                    const item = cart.cartItems[i]

                    const res = addItemToCart({ ...item, productName: item.productname }).unwrap()

                    addTocartArr.push(res)
                }

                await Promise.all(addTocartArr)

                dispatch(updateCart(null))
                localStorage.removeItem(LOCAL_CART_KEY)
                getCart()
            } catch (error) {
                console.log(error)
            }
        }

        if (user) {
            updateDBCart()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return { cart, handleAddToCart, isAddingToCart, isRemovingFromCart, handleRemoveFromCart }
}
