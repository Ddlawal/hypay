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
import { usePlaceOrderMutation } from '../../store/services/buyer'
import { showErrorSnackbar, showSuccessSnackbar } from '../../lib/helper'

type PurchaseSummaryProps = { canProceed?: boolean; next: string; summaryButtonText?: string }

export const PurchaseSummary = ({ canProceed, next, summaryButtonText }: PurchaseSummaryProps) => {
    const [total, setTotal] = useState(0)
    const [isProcessingPayment, setIsProcessingPayment] = useState(false)
    const {
        cart: { cartId, cartCount, charges, totalPrice, totalSum },
    } = useCart()
    const merchantCode = localStorage.getItem('merchantCode')
    const { push } = useRouter()
    const { paymentProvider, preferredAddress, preferredShipping, setAddress, setProvider, setShipping } = useCheckout()
    const [placeOrder, { isLoading }] = usePlaceOrderMutation()

    const goToNextPage = async () => {
        if (next === 'pay') {
            setIsProcessingPayment(true)
            if (!preferredAddress || !preferredShipping || !paymentProvider) {
                return
            }

            try {
                const res = await placeOrder({
                    address_id: String(preferredAddress.address_id),
                    cart_id: cartId,
                    charge_amount: preferredShipping.amount,
                    charge_currency: 'NGN',
                    currency_id: 574,
                    delivery_note: preferredShipping.delivery_note || '',
                    estimated_days: preferredShipping.estimated_days,
                    rate_id: preferredShipping.id,
                    paymentProvider,
                }).unwrap()

                showSuccessSnackbar(`Redirecting to ${paymentProvider.toLocaleUpperCase()}`)
                setAddress(null)
                setProvider(null)
                setShipping(null)

                const redirect = await push(res.paymentUrl)
                redirect && !isLoading && setIsProcessingPayment(false)
            } catch (error) {
                setIsProcessingPayment(false)
                console.log(error)
                showErrorSnackbar('Error! Something went wrong!')
            }

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
            <header className="mb-2 text-lg font-bold">Resumo da compra</header>
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
                        loading={isProcessingPayment}
                    >
                        {summaryButtonText || 'Proceed'}
                    </Button>
                </div>
            </Card>
        </>
    )
}
