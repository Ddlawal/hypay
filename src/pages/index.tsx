import classNames from 'classnames'
import type { NextPage } from 'next'
import Image from 'next/image'
import { Banner } from '../components/Banner'
import { Button } from '../components/Button'
import { LandingPageHeader } from '../components/Headers/LandingPageHeader'
import { CircularArrowUpIcon, InstagramIcon, FacebookIcon } from '../components/Icons'
import { Logo } from '../components/Logo'
import { COLORS } from '../lib/constants/colors'

type contentProps = {
    title: string
    body: string
    className?: string
    titleClassName?: string
    dotDivider?: boolean
}
const Content = ({ title, body, className, titleClassName, dotDivider = false }: contentProps) => (
    <div>
        <p
            className={classNames(
                titleClassName,
                'mb-3 text-center text-3xl font-bold tracking-wide text-hypay-primary md:mb-4 md:text-left'
            )}
        >
            {title}
        </p>
        <p
            className={classNames(
                className,
                'mb-3 w-[100%] text-center text-base font-semibold tracking-wide text-hypay-primary md:mb-7 md:w-[85%] md:text-left'
            )}
        >
            {body}
        </p>
        {dotDivider && <div className="mx-auto h-3 w-3 rounded-full bg-hypay-pink md:hidden" />}
    </div>
)

const Home: NextPage = () => {
    return (
        <>
            <LandingPageHeader />
            <div className="md:bg-white">
                <Banner
                    src="/images/landing-banner.png"
                    srcMobile="/images/landing-banner-mobile.png"
                    alt="Landing page banner"
                >
                    <div className="absolute w-full px-8 py-16 text-white md:right-56 md:w-80 md:px-0">
                        <p className="mb-2 text-2xl font-semibold tracking-wide md:mb-4">
                            Start your online store quickly and easily.
                        </p>
                        <p className="mb-9 text-sm md:text-base">
                            With Hypay you pay and receive securely through instagram and Facebook.
                        </p>
                        <div className="flex justify-center pr-10">
                            <Button primary size="lg" className="py-4 px-9 md:py-3 md:px-7">
                                Create your store
                            </Button>
                        </div>
                    </div>
                </Banner>

                <section className="flex flex-col-reverse px-4 py-8 pb-10 sm:px-10 md:flex-row md:justify-between lg:px-24 xl:px-40">
                    <div className="w-full px-2 text-hypay-primary md:w-96 md:px-0 md:pt-28 md:pr-10">
                        <Content
                            title="Engagement"
                            body="Gain more engagement in your store with a reliable way to sell, and with a super practical
                            platform."
                        />
                        <Button primary size="lg" className="py-4 px-9 md:py-3 md:px-7">
                            Create your store
                        </Button>
                    </div>

                    <Image
                        src="/images/mac-book.png"
                        alt="mac-book"
                        width="500rem"
                        height="350rem"
                        objectFit="contain"
                        quality={100}
                    />
                </section>

                <section className="flex flex-col bg-hypay-primary py-10 px-7 text-white sm:px-10 md:flex-row md:justify-between md:py-4 lg:px-24 xl:px-40">
                    <Image
                        src="/images/iPhone-yellow-bg.png"
                        alt="mac-book"
                        width="430rem"
                        height="350rem"
                        objectFit="contain"
                        quality={100}
                    />

                    <div className="flex items-center md:w-1/2">
                        <div className="mt-6 mb-10 md:mt-0 md:mb-0">
                            <Content
                                className="text-white"
                                titleClassName="text-white"
                                title="Security"
                                body="Our platform guarantees total security of your data and easy access to support."
                            />
                        </div>
                    </div>
                </section>

                {/* todo: in-progress */}
                <section className="py-10 px-7 sm:px-10 md:py-4 lg:px-24 xl:px-40">
                    <div>It works like this</div>
                    <Button primary size="lg" className="py-4 px-9 md:py-3 md:px-7">
                        Create your store
                    </Button>
                </section>

                <section>
                    <Banner
                        src="/images/woman-with-clothes.png"
                        srcMobile="/images/women-with-phones.png"
                        className=""
                    />
                </section>
                <div className="py-10 px-7 sm:px-10 md:py-4 lg:px-24 xl:px-40">
                    {/* incase the heading is required in future */}
                    {/* <h1 className="hidden mt-20 mb-8 text-4xl font-bold tracking-wide text-center md:block text-hypay-primary">
                        Benefícios para vendedor
                    </h1> */}
                    <section className="grid-col-1 mt-16 grid gap-4 md:grid-cols-2 ">
                        <Content
                            dotDivider
                            title="24-hour support"
                            body="Our user support system will make it quicker and more convenient to solve your problems when you need our help"
                        />
                        <Content
                            dotDivider
                            title="Simplified Checkout"
                            body="With our simplified checkout your customers will find it easier to complete their purchases."
                        />
                        <Content
                            dotDivider
                            title="Tracking System"
                            body="At Hypay we support parcel tracking. This way you will have total control over your deliveries and your customers as well."
                        />
                        <Content
                            dotDivider
                            title="Facility"
                            body="Our platform offers a practical and intuitive system even for those who have no experience with online sales."
                        />
                        <div className="mt-10">
                            <Content
                                dotDivider
                                titleClassName="md:w-[70%]"
                                className="md:w-[70%]"
                                title="Start your online store quickly and easily.
"
                                body="With Hypay you pay and receive securely through instagram and Facebook."
                            />
                        </div>
                        <div className="mt-10 flex items-end justify-center md:w-[80%] md:justify-end">
                            <Button primary size="lg" className="mb-8 py-4 px-9 md:py-3 md:px-7">
                                Create your store
                            </Button>
                        </div>
                    </section>
                </div>
                <div className="mt-10 mb-5 mr-10 flex justify-end">
                    <div className="flex h-full cursor-pointer flex-col items-center justify-end md:w-[20%] ">
                        <CircularArrowUpIcon color={COLORS.PINK} size={40} />
                        <p className="font-semibold text-hypay-pink">Return to the top</p>
                    </div>
                </div>
                <footer className="grid h-[412px] place-items-center bg-hypay-primary py-3 px-6 ">
                    <div className="h-[80%] w-[100%]  md:w-[58%]">
                        <div className="flex h-[80%] flex-col-reverse items-center justify-start md:flex-row">
                            <div className="mt-3 h-full w-full md:mt-0 md:w-[40%]">
                                <ul>
                                    <li className="mb-3 font-bold tracking-wide text-white">Hypay</li>
                                    <li className="mb-3 tracking-wide text-white">Advantages</li>
                                    <li className="mb-3 tracking-wide text-white">How it works</li>
                                    <li className="mb-3 tracking-wide text-white">Benefits</li>
                                    <li className="text-underline mb-3 w-min border-b border-hypay-pink tracking-wide text-hypay-pink">
                                        Support
                                    </li>
                                </ul>
                            </div>
                            <div className="items-base-line flex h-full  w-full  justify-between py-5 md:w-[60%] md:py-0">
                                <div className="flex  w-[40%] items-center justify-between md:justify-evenly">
                                    <InstagramIcon />
                                    <FacebookIcon />
                                </div>
                                <div className="flex w-[50%] items-center justify-end">
                                    <Logo
                                        color={COLORS.WHITE}
                                        labelColor="text-white"
                                        labelled={{ labelPosition: 'bottom' }}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-wrap items-center justify-between border-hypay-secondary pt-4 text-sm  text-white md:border-t">
                            <p>Privacy Policy</p>
                            <p className="font-semibold underline md:order-3 ">Privacy Policy</p>
                            <p className=" mx-auto mt-4 font-normal md:order-2 md:mx-0 md:mt-0">
                                Copyright © {new Date().getFullYear()} - All Rights Reserved
                            </p>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    )
}

export default Home
