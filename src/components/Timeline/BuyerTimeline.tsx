import React, { useState } from 'react'
import { Timeline, TimelineEvent } from '.'
import { useMediaQuery } from '../../hooks/useMediaQuery'
import { TimelineEventsType } from '../../interfaces/buyer'
import { COLORS } from '../../lib/constants/colors'
import { TIMELINE_EVENTS } from '../../lib/data'

export const BuyerTimeline = ({ active = 'Identification' }: { active?: TimelineEventsType }) => {
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
                {Object.values(TIMELINE_EVENTS).map((label, i) => (
                    <TimelineEvent
                        key={`event-${i}`}
                        bgColor={active === label ? COLORS.PRIMARY : COLORS.CYAN}
                        border="none"
                        label={label}
                        labelFontSize={isLargeScreen ? 13 : 10}
                        labelTextHeight={30}
                        labelTextWidth={120}
                        eventSize={20}
                    />
                ))}
            </Timeline>
        </div>
    )
}
