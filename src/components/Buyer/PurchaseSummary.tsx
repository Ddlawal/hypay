// import cx from 'classnames'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useCart } from '../../hooks/useCart'
import { useCheckout } from '../../hooks/useCheckout'
import { Button } from '../Button'

import { Card } from '../Card'
import { CostValue } from '../Cart'
import { Divider } from '../Divider'
import { LockIcon } from '../Icons'
import { NextLink } from '../Links'

type PurchaseSummaryProps = { canProceed?: boolean; next: string; summaryButtonText?: string }

export const PurchaseSummary = ({ canProceed, next, summaryButtonText }: PurchaseSummaryProps) => {
    const [total, setTotal] = useState(0)
    const {
        cart: { cartCount, charges, totalPrice, totalSum },
    } = useCart()
    const merchantCode = localStorage.getItem('merchantCode')
    const { push } = useRouter()
    const { preferredShipping } = useCheckout()

    const goToNextPage = () => {
        if (next === 'pay') {
            // Place Order
            return
        }

        push(`/store/checkout${next}`)
    }

    useEffect(() => {
        const shipping = preferredShipping?.amount ?? 0
        setTotal(totalSum + shipping)
    }, [preferredShipping?.amount, totalSum])

    return (
        <>
            <div className="mb-2 text-lg font-bold">Resumo da compra</div>
            <Card rounded>
                <div className="mb-2 text-sm font-extralight">
                    <span className="text-hypay-gray">Cart Items: </span>
                    {cartCount}
                </div>
                <CostValue title="Subtotal" amount={totalPrice} />
                <CostValue title="Shipping" amount={preferredShipping ? preferredShipping.amount : 0} />
                <CostValue title="Charges" amount={charges} />
                <Divider height="h-24" className="mt-4" />
                <div className="font-bold">
                    <CostValue title="Total" amount={total} />
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
                        // loading={isProcessing}
                    >
                        {summaryButtonText || 'Proceed'}
                    </Button>
                </div>
            </Card>
        </>
    )
}
