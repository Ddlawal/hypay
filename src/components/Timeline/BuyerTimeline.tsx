import React, { useState } from 'react'
import { Timeline, TimelineEvent } from '.'
import { useMediaQuery } from '../../hooks/useMediaQuery'
import { COLORS } from '../../lib/constants/colors'

export const BuyerTimeline = () => {
    const isLargeScreen = useMediaQuery('md')
    const [index] = useState(0)

    return (
        <div className="mt-8 flex justify-center">
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
    )
}
