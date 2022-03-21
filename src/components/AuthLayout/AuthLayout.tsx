import { FC, useState } from 'react'
import { COLORS } from '../../lib/constants/colors'
import { Button } from '../Button'
import { ConnectIcon, CreateAccountIcon, DeliveryIcon, ReceivePaymentIcon, ShareIcon } from '../Icons'
import { Timeline, TimelineEvent } from '../Timeline'
import { useAppSelector } from '../../hooks/useStoreHooks'

interface layoutProps {
    title: string
    subtitle: string
    changeIndex?: () => void
    index?: number
    btnText?: string
}

const AuthLayout: FC<layoutProps> = ({ children, title, subtitle, changeIndex, index, btnText }) => {
    const [selectedTab, setSelectedTab] = useState(0)
    const {value} = useAppSelector((state) => state)
    console.log(value, 'the state')
    return (
        <main className="overflow- relative flex   min-h-screen w-screen">
            {/* Image section */}
            <div className="fixed hidden h-screen bg-login-cloth bg-cover bg-center  md:block md:w-6/12">
                <section className="mx-auto mt-[5rem] w-8/12">
                    <h1 className="text-[52px] font-bold text-hypay-orange">{title}</h1>
                    <div>
                        <p className="text-3xl font-bold text-white">{subtitle}</p>
                    </div>
                </section>
            </div>
            {/* Form Section */}
            <div className="authRightBar w-full bg-white md:absolute  md:right-0  md:w-6/12">
                <div className="authRightBar relative">
                    <div className="mx-auto mt-[4rem] flex  items-center justify-center md:w-9/12 ">
                        <Timeline thickness={3} gap={70} progressBarBackground={COLORS.PINK} activeIndex={index}>
                            <TimelineEvent
                                label="Create you own account"
                                labelFontSize={10}
                                bgColor="white"
                                border={`3px solid ${COLORS.PINK}`}
                                labelTextHeight={30}
                                labelTextWidth={120}
                                eventSize={40}
                                color={COLORS.PRIMARY}
                            >
                                <CreateAccountIcon color={COLORS.PRIMARY} />
                            </TimelineEvent>
                            <TimelineEvent
                                label="Conect your Facebook and Instagram"
                                labelFontSize={10}
                                bgColor="white"
                                border={`3px solid ${COLORS.PINK}`}
                                labelTextHeight={20}
                                labelTextWidth={100}
                                eventSize={40}
                                color={COLORS.PRIMARY}
                            >
                                <ConnectIcon color={COLORS.PRIMARY} />
                            </TimelineEvent>
                            <TimelineEvent
                                label="Share your store to buyers."
                                labelFontSize={10}
                                bgColor="white"
                                border={`3px solid ${COLORS.PINK}`}
                                labelTextHeight={20}
                                labelTextWidth={100}
                                eventSize={40}
                                color={COLORS.PRIMARY}
                            >
                                <ShareIcon color={COLORS.PRIMARY} />
                            </TimelineEvent>
                            <TimelineEvent
                                label="Delivery confirmed."
                                labelFontSize={10}
                                bgColor="white"
                                border={`3px solid ${COLORS.PINK}`}
                                labelTextHeight={20}
                                labelTextWidth={100}
                                eventSize={40}
                                color={COLORS.PRIMARY}
                            >
                                <DeliveryIcon color={COLORS.PRIMARY} />
                            </TimelineEvent>
                            <TimelineEvent
                                label="That's it. You receive the payment"
                                labelFontSize={10}
                                bgColor="white"
                                border={`3px solid ${COLORS.PINK}`}
                                labelTextHeight={20}
                                labelTextWidth={100}
                                eventSize={40}
                                color={COLORS.PRIMARY}
                            >
                                <ReceivePaymentIcon color={COLORS.PRIMARY} />
                            </TimelineEvent>
                        </Timeline>
                    </div>
                    <div className="max-w-[100%] overflow-x-hidden">{children}</div>
                    {btnText && (
                        <div className="mt-2 flex items-center  justify-center font-semibold">
                            <Button className={`${COLORS.PINK} `} primary onClick={changeIndex}>
                                {btnText}
                            </Button>
                        </div>
                    )}
                    <footer
                        className="mt-24
                    "
                    >
                        <p className="text-center text-sm text-hypay-gray">
                            Learn More.
                            <span className="cursor-pointer pl-1 text-blue-500"> How to open a store?</span>
                        </p>
                        <p className="text-right">
                            <span className="cursor-pointer pl-1 text-blue-500"> Help . Privacy</span>
                        </p>
                    </footer>
                </div>
            </div>
        </main>
    )
}

export default AuthLayout
