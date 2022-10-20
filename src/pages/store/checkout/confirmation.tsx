import React, { useEffect, useState } from 'react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'

import { BuyerLayout } from '../../../components/Layout'
import { Button } from '../../../components/Button'
import { BuyerTimeline } from '../../../components/Timeline'
import { CloseIcon, SuccessIcon } from '../../../components/Icons'
import { CostValue } from '../../../components/Cart'
import { Divider } from '../../../components/Divider'
import { useLazyPaymentGatewayCallbackQuery } from '../../../store/services/buyer'
import { showErrorSnackbar } from '../../../lib/helper'
import { COLORS } from '../../../lib/constants/colors'
import { PaymentCallbackResponse } from '../../../interfaces/buyer'
import { NextImage } from '../../../components/Image'

const Confirmation: NextPage = () => {
    const merchantCode = localStorage.getItem('merchantCode')
    const { push } = useRouter()
    const [paymentStatus, setPaymentStatus] = useState(false)
    const [paymentDetails, setPaymentDetails] = useState<PaymentCallbackResponse>()

    const [paymentGatewayCallback, { isFetching, isLoading }] = useLazyPaymentGatewayCallbackQuery()

    const {
        query: { reference },
        isReady,
    } = useRouter()

    useEffect(() => {
        if (isReady) {
            ;(async () => {
                try {
                    const res = await paymentGatewayCallback(reference as string).unwrap()

                    if (res.paymentStatus === 'successful') {
                        setPaymentStatus(true)
                        setPaymentDetails(res)
                    }
                } catch (error) {
                    showErrorSnackbar('Error confirming payment!')
                    console.log(error)
                }
            })()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isReady])

    const retryPayment = () => {
        const paymentUrl = localStorage.getItem('paymentUrl')

        if (paymentUrl) {
            return push(paymentUrl)
        }

        showErrorSnackbar('Error! Something went wrong')
    }

    return (
        <BuyerLayout isLoading={isFetching || isLoading}>
            <BuyerTimeline active="Confirmation" />
            <div className="mt-6 flex justify-center px-[5%] sm:px-[20%] md:px-[30%]">
                {paymentStatus ? (
                    <div className="flex w-full max-w-[25rem] flex-col items-center gap-y-4">
                        <SuccessIcon size={30} />
                        <div className="font-bold">Pedido feito com sucesso</div>
                        <div className="text-center text-hypay-placeholder">
                            Você pode verificar e acompanhar seus pedidos de sua conta
                        </div>
                        <div className="w-full rounded-lg bg-[#F7F7F7] py-2">
                            <div className="max-h-[45vh] overflow-x-hidden overflow-y-scroll px-2">
                                {paymentDetails?.order.order_items.map(
                                    ({ image, productID, productname, quantity, totalCost }) => (
                                        <div
                                            key={`item-${productID}`}
                                            className="my-2 flex items-center justify-between gap-x-2"
                                        >
                                            <NextImage src={image} width={30} height={30} />
                                            <CostValue title={`${productname} x ${quantity}`} amount={totalCost} />
                                        </div>
                                    )
                                )}
                            </div>
                            <Divider />
                            <div className=" px-3">
                                <CostValue title="Subtotal" amount={paymentDetails?.order.totalprice ?? 0} />
                                <CostValue title="Shipping" amount={paymentDetails?.order.shipping ?? 0} />
                                <CostValue title="Charges" amount={paymentDetails?.order.pepperestfees ?? 0} />
                                <CostValue
                                    title="Total"
                                    amount={Number(paymentDetails?.paymentDetail.amount)}
                                    amountClassName="font-bold"
                                />
                            </div>
                        </div>
                        <div className="w-full">
                            <div className="w-full font-bold">Endereço de entrega</div>
                            <Divider />
                            <div className="text-hypay-placeholder">{paymentDetails?.order.order_address.street_1}</div>
                            <div className="text-hypay-placeholder">{paymentDetails?.order.order_address.street_2}</div>
                            <div className="text-hypay-placeholder">{paymentDetails?.order.order_address.city}</div>
                            <div className="text-hypay-placeholder">{paymentDetails?.order.order_address.state}</div>
                            <div className="w-full font-bold">Phone: {paymentDetails?.order.order_address.phone}</div>
                        </div>
                        <Divider />
                        <Button
                            padding="px-16 py-4 md:py-3"
                            className="mb-12 w-full bg-hypay-pink text-white"
                            onClick={() => push(`/store/${merchantCode}`)}
                        >
                            Retorno para casa
                        </Button>
                    </div>
                ) : (
                    <div className="flex w-full max-w-[25rem] flex-col items-center gap-y-4">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full border-[1.5px] border-hypay-red">
                            <CloseIcon size={14} color={COLORS.RED} />
                        </div>
                        <div className="mb-6 text-center text-hypay-placeholder">
                            Seu pagamento não foi bem -sucedido
                        </div>
                        <Button
                            padding="px-16 py-4 md:py-3"
                            className="mb-12 w-full bg-hypay-pink text-white"
                            onClick={retryPayment}
                        >
                            Tente novamente
                        </Button>
                    </div>
                )}
            </div>
        </BuyerLayout>
    )
}

export default Confirmation
