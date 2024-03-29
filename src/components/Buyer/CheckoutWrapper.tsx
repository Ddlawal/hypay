import React, { FC } from 'react'

import { BuyerLayout } from '../../components/Layout'
import { PurchaseSummary } from '../../components/Buyer'
import { BuyerTimeline } from '../Timeline'
import { TimelineEventsType } from '../../interfaces/buyer'

type CheckoutWrapperProps = {
    activeTimelineEvent?: TimelineEventsType
    canProceed?: boolean
    isLoading?: boolean
    next: string
    summaryButtonText?: string
}

export const CheckoutWrapper: FC<CheckoutWrapperProps> = ({
    activeTimelineEvent,
    canProceed,
    children,
    isLoading,
    next,
    summaryButtonText,
}) => {
    return (
        <BuyerLayout isLoading={isLoading}>
            <BuyerTimeline active={activeTimelineEvent} />
            <div className="my-12 flex flex-col gap-16 px-4 md:flex-row md:px-[5%] lg:px-[17%]">
                <div className="w-full md:w-3/5">{children}</div>
                <div className="md:w-2/5">
                    <PurchaseSummary canProceed={canProceed} next={next} summaryButtonText={summaryButtonText} />
                </div>
            </div>
        </BuyerLayout>
    )
}
