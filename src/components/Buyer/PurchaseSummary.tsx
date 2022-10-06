// import cx from 'classnames'
import { useRouter } from 'next/router'
import React from 'react'
import { useCart } from '../../hooks/useCart'
import { Button } from '../Button'

import { Card } from '../Card'
import { CostValue } from '../Cart'
import { Divider } from '../Divider'
import { LockIcon } from '../Icons'
import { NextLink } from '../Links'

export const PurchaseSummary = ({ canProceed, next }: { canProceed?: boolean; next?: string }) => {
    const {
        cart: { cartCount, charges, shipping, totalPrice, totalSum },
    } = useCart()
    const merchantCode = localStorage.getItem('merchantCode')
    const { push } = useRouter()

    const goToNextPage = () => (next ? push(`/store/checkout/${next}`) : null)

    return (
        <>
            <div className="mb-2 text-lg font-bold">Resumo da compra</div>
            <Card rounded>
                <div className="mb-2 text-sm font-extralight">
                    <span className="text-hypay-gray">Cart Items: </span>
                    {cartCount}
                </div>
                <CostValue title="Subtotal" amount={totalPrice} />
                <CostValue title="Shipping" amount={shipping} />
                <CostValue title="Charges" amount={charges} />
                <Divider height="h-24" className="mt-4" />
                <div className="font-bold">
                    <CostValue title="Total" amount={totalSum} />
                </div>
                <div className="mt-8 mb-3 text-center text-hypay-pink">
                    <NextLink href={`/store/${merchantCode}`} className="">
                        Escolher mais produtos
                    </NextLink>
                </div>
                <div className="flex items-end justify-center gap-x-1 text-sm font-thin text-gray-600">
                    <LockIcon size={20} /> Compra 100% segura
                </div>
                <div>
                    <Button
                        disabled={!canProceed}
                        onClick={goToNextPage}
                        className="mb-2 mt-8 w-full"
                        padding="py-2"
                        primary
                        preventDefault
                    >
                        Proceed
                    </Button>
                </div>
            </Card>
        </>
    )
}
