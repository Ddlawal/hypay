import { useRouter } from 'next/router'
import { useCart } from '../../hooks/useCart'
import { CartItemsType, RemoveFromCartType } from '../../interfaces/cart'
import { formatAmount } from '../../lib/helper'
import { Button } from '../Button'
import { Divider } from '../Divider'
import { CartIcon, CloseIcon } from '../Icons'
import { NextImage } from '../Image'

const CostValue = ({ amount, amountClassName, title }: { amount: number; amountClassName?: string; title: string }) => (
    <div className="mb-2 flex justify-between">
        <div>{title}</div>
        <div className={amountClassName}>{formatAmount(amount)}</div>
    </div>
)

const CartItem = ({
    item: { productID, image_url, productname, quantity, total_cost },
    removeItem,
}: {
    item: CartItemsType
    removeItem: (args: RemoveFromCartType) => Promise<void>
}) => {
    return (
        <>
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
                        <Button onClick={() => removeItem({ productID, quantity: null })}>
                            <CloseIcon size={14} />
                        </Button>
                    </div>
                    <div className="flex justify-between">
                        <div>{quantity}</div>
                        <div>{total_cost}</div>
                    </div>
                </div>
            </div>
            <Divider />
        </>
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
    const {
        cart: { cartCount, cartItems, charges, shipping, totalPrice, totalSum },
        handleRemoveFromCart,
        isRemovingFromCart,
    } = useCart()
    const { push } = useRouter()

    const goToCheckout = () => push('/store/checkout')

    if (cartCount === 0) {
        return <NoItemInCart />
    }

    return (
        <div className="mb-0 w-[90vw] min-w-[30rem] px-8 pb-6 sm:w-[70vw] md:w-[30rem]">
            {cartItems.map((item) => (
                <CartItem key={`item-${item.id}`} item={item} removeItem={handleRemoveFromCart} />
            ))}
            <CostValue title="Subtotal" amount={totalPrice} />
            <CostValue title="Shipping" amount={shipping} />
            <CostValue title="Charges" amount={charges} />
            <CostValue title="Total" amount={totalSum} amountClassName="font-bold" />
            <Button primary className="mt-8 h-12 w-full" loading={isRemovingFromCart} onClick={goToCheckout}>
                Checkout
            </Button>
        </div>
    )
}
