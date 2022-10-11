import cx from 'classnames'
import { NextPage } from 'next'
import { useState } from 'react'

import { CheckoutWrapper } from '../../../components/Buyer'
import { Divider } from '../../../components/Divider'
import { NextImage } from '../../../components/Image'
import { useCheckout } from '../../../hooks/useCheckout'
import { ShippingRates } from '../../../interfaces/buyer'
import { TIMELINE_EVENTS } from '../../../lib/data'
import { formatAmount } from '../../../lib/helper'

const Shipping: NextPage = () => {
    const [preferredShippingStoreId, setPreferredShippingStoreId] = useState<string>()
    const { shippingRates, isFetchingShippingRates, setShipping } = useCheckout('shipping')

    const handleSelectBuyerShipping = (id: string, data: ShippingRates) => {
        setShipping(data)
        setPreferredShippingStoreId(id)
    }

    return (
        <CheckoutWrapper
            activeTimelineEvent={TIMELINE_EVENTS.SHIPPING}
            canProceed={!!preferredShippingStoreId}
            next="/payment"
            isLoading={isFetchingShippingRates}
        >
            <header className="mb-2 text-lg font-bold">Shipping</header>
            <ul className="mt-4">
                {shippingRates.map((buyerShipping, i) => {
                    const { amount, courier, estimated_days } = buyerShipping
                    return (
                        <li
                            key={i}
                            className={cx(
                                preferredShippingStoreId === courier.id ? 'bg-white' : 'bg-gray-100',
                                'border-hypay-lightgray my-3 flex items-center gap-x-4 rounded border bg-slate-100 px-3'
                            )}
                            onClick={() => handleSelectBuyerShipping(courier.id, buyerShipping)}
                        >
                            <div>
                                <input
                                    type="radio"
                                    name="address"
                                    onChange={() => handleSelectBuyerShipping(courier.id, buyerShipping)}
                                    checked={preferredShippingStoreId === courier.id}
                                />
                            </div>
                            <Divider orientation="vertical" height="h-[6rem]" />
                            <div className="flex gap-4 py-3">
                                <NextImage src={courier.icon} width={100} height={40} alt="shipping-icon" />
                                <div>
                                    <strong>{courier.name}</strong>
                                    <div className="text-sm">{formatAmount(amount)}</div>
                                    <div className="text-sm">{estimated_days}</div>
                                </div>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </CheckoutWrapper>
    )
}

export default Shipping
