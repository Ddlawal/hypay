import { useRouter } from 'next/router'

import { Button } from '../Button'
import { Divider } from '../Divider'
import { useCart } from '../../hooks/useCart'
import { CartIcon, CloseIcon, LoaderIcon, MinusIcon, PlusIcon } from '../Icons'
import { NextImage } from '../Image'
import { CartItemsType } from '../../interfaces/cart'
import { formatAmount } from '../../lib/helper'
import { useMediaQuery } from '../../hooks/useMediaQuery'
import { useSession } from '../../hooks/useSession'

export const CostValue = ({
    amount,
    amountClassName,
    title,
}: {
    amount: number
    amountClassName?: string
    title: string
}) => (
    <div className="mb-1 flex justify-between text-sm sm:text-base">
        <div>{title}</div>
        <div className={amountClassName}>{formatAmount(amount)}</div>
    </div>
)

const CartItem = ({ item }: { item: CartItemsType }) => {
    const { productID, image_url, productname, quantity, price, total_cost } = item
    const isGTSM = useMediaQuery('sm') // screen width greater than 'sm'
    const { handleAddToCart, handleRemoveFromCart, isAddingToCart, isRemovingFromCart } = useCart()

    return (
        <div className="mr-2">
            <div className="mb-4 mt-2 grid grid-cols-12 gap-4">
                <div className="col-span-3 w-full">
                    <NextImage src={image_url} width="100%" height="100%" alt="product-preview" layout="responsive" />
                </div>
                <div className="col-span-9 flex flex-col justify-between">
                    <div className="flex justify-between">
                        <div className="w-[15rem] truncate text-sm sm:text-base">{productname}</div>
                        <Button onClick={() => handleRemoveFromCart({ productID, quantity: null, price: -price })}>
                            <CloseIcon size={isGTSM ? 14 : 10} />
                        </Button>
                    </div>
                    <div className="flex justify-between">
                        <div className="flex w-max items-center rounded border border-hypay-gray">
                            <Button
                                className="rounded-none border-r border-hypay-gray px-2 sm:px-3"
                                onClick={() =>
                                    handleRemoveFromCart({
                                        productID,
                                        quantity: 1,
                                        price: -price,
                                        showMessage: false,
                                    })
                                }
                            >
                                <MinusIcon size={isGTSM ? 14 : 10} />
                            </Button>
                            <div className="flex w-8 items-center justify-center text-sm sm:w-12 sm:text-base">
                                {isAddingToCart || isRemovingFromCart ? (
                                    <LoaderIcon size={isGTSM ? 15 : 10} />
                                ) : (
                                    quantity
                                )}
                            </div>
                            <Button
                                className="rounded-none border-l border-hypay-gray px-2 sm:px-3"
                                onClick={() =>
                                    handleAddToCart({
                                        ...item,
                                        productName: item.productname,
                                        quantity: 1,
                                        showMessage: false,
                                    })
                                }
                            >
                                <PlusIcon size={isGTSM ? 14 : 10} />
                            </Button>
                        </div>
                        <div className="text-sm sm:text-base">{formatAmount(total_cost)}</div>
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
    const { user } = useSession()

    const goToCheckout = () => (!user ? push('/login') : push('/store/checkout'))

    if (cartCount === 0) {
        return <NoItemInCart />
    }

    return (
        <div className="mb-0 w-[90vw] min-w-[20rem] pl-8 pr-6 pb-6 sm:w-[70vw] md:w-[30rem]">
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
