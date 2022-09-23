import { useRouter } from 'next/router'

import { Button } from '../Button'
import { Divider } from '../Divider'
import { useCart } from '../../hooks/useCart'
import { CartIcon, CloseIcon, LoaderIcon, MinusIcon, PlusIcon } from '../Icons'
import { NextImage } from '../Image'
import { CartItemsType } from '../../interfaces/cart'
import { formatAmount } from '../../lib/helper'

const CostValue = ({ amount, amountClassName, title }: { amount: number; amountClassName?: string; title: string }) => (
    <div className="mb-1 flex justify-between">
        <div>{title}</div>
        <div className={amountClassName}>{formatAmount(amount)}</div>
    </div>
)

const CartItem = ({ item: { productID, image_url, productname, quantity, total_cost } }: { item: CartItemsType }) => {
    const { handleAddToCart, handleRemoveFromCart, isAddingToCart, isRemovingFromCart } = useCart()
    return (
        <div className="mr-2">
            <div className="mb-4 mt-2 grid grid-cols-12 gap-4">
                <div className="col-span-3 w-full">
                    <NextImage src={image_url} width="100%" height="100%" alt="product-preview" layout="responsive" />
                </div>
                <div className="col-span-9 flex flex-col justify-between">
                    <div className="flex justify-between">
                        <div className="w-[15rem] truncate">
                            {productname} Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
                            veritatis!
                        </div>
                        <Button onClick={() => handleRemoveFromCart({ productID, quantity: null })}>
                            <CloseIcon size={14} />
                        </Button>
                    </div>
                    <div className="flex justify-between">
                        <div className="flex items-center rounded border border-hypay-gray">
                            <Button
                                className="rounded-none border-r border-hypay-gray px-3"
                                onClick={() => handleRemoveFromCart({ productID, quantity: 1, showMessage: false })}
                            >
                                <MinusIcon size={14} />
                            </Button>
                            <div className="flex w-12 items-center justify-center">
                                {isAddingToCart || isRemovingFromCart ? <LoaderIcon size={15} /> : quantity}
                            </div>
                            <Button
                                className="rounded-none border-l border-hypay-gray px-3"
                                onClick={() => handleAddToCart({ productID, quantity: 1, showMessage: false })}
                            >
                                <PlusIcon size={14} />
                            </Button>
                        </div>
                        <div>{total_cost}</div>
                    </div>
                </div>
            </div>
            <Divider />
        </div>
    )
}

const NoItemInCart = () => {
    return (
        <div className="flex min-w-[30rem] flex-col items-center justify-center px-6 py-12">
            <div className="mb-4">
                <CartIcon size={30} />
            </div>
            <div className="mb-2 font-bold">Your cart is empty.</div>
            <div className="mb-6 text-xs font-light">You have not added any item to your cart.</div>
        </div>
    )
}

export const Cart = () => {
    const { push } = useRouter()
    const {
        cart: { cartCount, cartItems, charges, shipping, totalPrice, totalSum },
    } = useCart()

    const goToCheckout = () => push('/store/checkout')

    if (cartCount === 0) {
        return <NoItemInCart />
    }

    return (
        <div className="mb-0 w-[90vw] min-w-[30rem] pl-8 pr-6 pb-6 sm:w-[70vw] md:w-[30rem]">
            <div className="mb-2 text-sm font-extralight">
                <span className="text-hypay-gray">Cart Items: </span>
                {cartCount}
            </div>
            <div className="mb-6 max-h-[45vh] overflow-x-hidden overflow-y-scroll">
                {cartItems.map((item) => (
                    <CartItem key={`item-${item.id}`} item={item} />
                ))}
            </div>
            <CostValue title="Subtotal" amount={totalPrice} />
            <CostValue title="Shipping" amount={shipping} />
            <CostValue title="Charges" amount={charges} />
            <CostValue title="Total" amount={totalSum} amountClassName="font-bold" />
            <Button primary className="mt-8 h-12 w-full" onClick={goToCheckout}>
                Checkout
            </Button>
        </div>
    )
}
