import React, { FC } from 'react'

import { BuyerLayout } from '../../components/Layout'
import { PurchaseSummary } from '../../components/Buyer'
import { BuyerTimeline } from '../Timeline'

type CheckoutWrapperProps = {
    canProceed?: boolean
    isLoading?: boolean
    next?: string
}

export const CheckoutWrapper: FC<CheckoutWrapperProps> = ({ canProceed, children, isLoading, next }) => {
    return (
        <BuyerLayout isLoading={isLoading}>
            <BuyerTimeline />
            <div className="my-12 flex gap-x-16 px-4 md:px-[5%] lg:px-[17%]">
                <div className="w-full md:w-3/5">{children}</div>
                <div className="hidden md:block md:w-2/5">
                    <PurchaseSummary canProceed={canProceed} next={next} />
                </div>
            </div>
        </BuyerLayout>
    )
}
