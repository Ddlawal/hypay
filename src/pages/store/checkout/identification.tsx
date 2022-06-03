import { NextPage } from 'next'
import React, { useState } from 'react'
import { LockIcon } from '../../../components/Icons'
import { BuyerLayout } from '../../../components/Layout'
import { Timeline, TimelineEvent } from '../../../components/Timeline'
import { useMediaQuery } from '../../../hooks/useMediaQuery'
import { COLORS } from '../../../lib/constants/colors'

const Identification: NextPage = () => {
    const isLargeScreen = useMediaQuery('md')
    const [index] = useState(0)

    return (
        <BuyerLayout>
            <div className="mt-6 grid grid-cols-12 md:px-[10%]">
                <div className="col-span-12 px-4 md:col-span-9 md:px-0 md:pl-[20%] lg:col-span-10">
                    <div className="flex justify-center">
                        <Timeline
                            thickness={2}
                            gap={isLargeScreen ? 80 : 50}
                            progressBarBackground={COLORS.BLACK}
                            activeIndex={index}
                            position="top"
                        >
                            <TimelineEvent
                                bgColor={COLORS.CYAN}
                                border="none"
                                label="Identification"
                                labelFontSize={isLargeScreen ? 13 : 10}
                                labelTextHeight={30}
                                labelTextWidth={120}
                                eventSize={20}
                            />
                            <TimelineEvent
                                bgColor={COLORS.CYAN}
                                border="none"
                                label="Payment"
                                labelFontSize={isLargeScreen ? 13 : 10}
                                labelTextHeight={20}
                                labelTextWidth={100}
                                eventSize={20}
                            />
                            <TimelineEvent
                                bgColor={COLORS.CYAN}
                                border="none"
                                label="Confirmation"
                                labelFontSize={isLargeScreen ? 13 : 10}
                                labelTextHeight={20}
                                labelTextWidth={100}
                                eventSize={20}
                            />
                        </Timeline>
                    </div>
                    <div className="mt-6">*Required fields</div>
                </div>
                <div className="hidden items-start gap-x-1 font-semibold md:col-span-3 md:flex md:text-[.7rem] lg:col-span-2 lg:text-[.9rem]">
                    <LockIcon size={15} /> 100% secure purchase
                </div>
            </div>
        </BuyerLayout>
    )
}

export default Identification
