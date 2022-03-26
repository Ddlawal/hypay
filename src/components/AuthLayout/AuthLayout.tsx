import React, { FC } from 'react'
import { COLORS } from '../../lib/constants/colors'
import { Button } from '../Button'
import { ConnectIcon, CreateAccountIcon, DeliveryIcon, ReceivePaymentIcon, ShareIcon } from '../Icons'
import { Timeline, TimelineEvent } from '../Timeline'
import { useMediaQuery } from '../../hooks/useMediaQuery'

interface layoutProps {
    title: string
    subtitle: string
    changeIndex?: () => void
    index?: number
    btnText?: string
}

const AuthLayout: FC<layoutProps> = ({ children, title, subtitle, changeIndex, index, btnText }) => {
    const isLargeScreen = useMediaQuery('md')
    return (
        <main className="flex max-h-screen w-screen flex-1 flex-wrap overflow-hidden bg-white">
            {/* Image section */}
            <div className="hidden h-screen flex-1 flex-col bg-login-cloth bg-cover bg-center md:flex md:w-1/2">
                <section className="mx-auto mt-[5rem] w-8/12">
                    <h1 className="text-[52px] font-bold text-hypay-orange">{title}</h1>
                    <div>
                        <p className="text-3xl font-bold text-white">{subtitle}</p>
                    </div>
                </section>
            </div>
            {/* Form Section */}
            <div className="authRightBar relative h-screen w-full overflow-y-scroll md:w-1/2">
                <div className="mx-auto mt-[4rem] flex  w-10/12 items-center justify-center md:w-9/12 ">
                    {/* we need to make the gap responsive to make room for mobile view */}
                    <Timeline
                        thickness={3}
                        gap={isLargeScreen ? 80 : 50}
                        progressBarBackground={COLORS.PINK}
                        activeIndex={index}
                    >
                        <TimelineEvent
                            label="Create your Hypay account."
                            labelFontSize={isLargeScreen ? 13 : 10}
                            bgColor="white"
                            border={`3px solid ${COLORS.PINK}`}
                            labelTextHeight={30}
                            labelTextWidth={120}
                            eventSize={isLargeScreen ? 50 : 40}
                            color={COLORS.PRIMARY}
                        >
                            <CreateAccountIcon color={COLORS.PRIMARY} />
                        </TimelineEvent>
                        <TimelineEvent
                            label="Create your store"
                            labelFontSize={isLargeScreen ? 13 : 10}
                            bgColor="white"
                            border={`3px solid ${COLORS.PINK}`}
                            labelTextHeight={20}
                            labelTextWidth={100}
                            eventSize={isLargeScreen ? 50 : 40}
                            color={COLORS.PRIMARY}
                        >
                            <ConnectIcon color={COLORS.PRIMARY} />
                        </TimelineEvent>
                        <TimelineEvent
                            label="Add a product here"
                            labelFontSize={isLargeScreen ? 13 : 10}
                            bgColor="white"
                            border={`3px solid ${COLORS.PINK}`}
                            labelTextHeight={20}
                            labelTextWidth={100}
                            eventSize={isLargeScreen ? 50 : 40}
                            color={COLORS.PRIMARY}
                        >
                            <ShareIcon color={COLORS.PRIMARY} />
                        </TimelineEvent>
                        <TimelineEvent
                            label="Share on the networks"
                            labelFontSize={isLargeScreen ? 13 : 10}
                            bgColor="white"
                            border={`3px solid ${COLORS.PINK}`}
                            labelTextHeight={20}
                            labelTextWidth={100}
                            eventSize={isLargeScreen ? 50 : 40}
                            color={COLORS.PRIMARY}
                        >
                            <DeliveryIcon color={COLORS.PRIMARY} />
                        </TimelineEvent>
                    </Timeline>
                </div>
                <div className="relative max-w-[100%] overflow-x-hidden">
                    <div>{children}</div>
                </div>
                {btnText && (
                    <div className="my-2 flex items-center justify-center font-semibold">
                        <Button className={`${COLORS.PINK} `} primary onClick={changeIndex}>
                            {btnText}
                        </Button>
                    </div>
                )}
                <footer className="  mt-9 w-full">
                    <p className="text-center text-sm text-hypay-gray">
                        Learn More.
                        <span className="cursor-pointer pl-1 text-blue-500"> How to open a store?</span>
                    </p>
                    <p className="text-right">
                        <span className="cursor-pointer pl-1 text-blue-500"> Help . Privacy</span>
                    </p>
                </footer>
            </div>
        </main>
    )
}

export default AuthLayout
