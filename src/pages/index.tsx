import classNames from 'classnames'
import type { NextPage } from 'next'
import Image from 'next/image'
import { Banner } from '../components/Banner'
import { Button } from '../components/Button'
import { LandingPageHeader } from '../components/Headers/LandingPageHeader'

const Content = ({ title, body, className }: { title: string; body: string; className?: string }) => (
    <div>
        <p className={classNames(className, 'mb-3 text-2xl font-semibold tracking-wide md:mb-4')}>{title}</p>
        <p className={classNames(className, 'mb-3 text-base tracking-wide md:mb-7')}>{body}</p>
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

                <section className="flex flex-col-reverse py-8 px-4 pb-10 sm:px-10 md:flex-row md:justify-between lg:px-24 xl:px-40">
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

                <section className="flex flex-col bg-hypay-primary px-7 py-10 text-white sm:px-10 md:flex-row md:justify-between md:py-4 lg:px-24 xl:px-40">
                    <Image
                        src="/images/iPhone-yellow-bg.png"
                        alt="mac-book"
                        width="430rem"
                        height="350rem"
                        objectFit="contain"
                        quality={100}
                    />

                    <div className="flex items-center md:w-1/2">
                        <div className="mb-10 mt-6 md:mt-0 md:mb-0">
                            <Content
                                title="Security"
                                body="Our platform guarantees total security of your data and easy access to support."
                            />
                        </div>
                    </div>
                </section>

                {/* TODO: in-progress */}
                <section className="px-7 py-10 sm:px-10 md:py-4 lg:px-24 xl:px-40">
                    <div>It works like this</div>
                    <Button primary size="lg" className="py-4 px-9 md:py-3 md:px-7">
                        Create your store
                    </Button>
                </section>

                <section>
                    <Banner
                        src="/images/woman-with-clothes.png"
                        srcMobile="/images/women-with-phones.png"
                        className="h-[30rem] md:h-80"
                    />
                </section>

                <section className="grid-col-1 grid gap-4 px-7 py-10 sm:px-10 md:grid-cols-2 md:py-4 lg:px-24 xl:px-40">
                    <Content
                        title="Security"
                        body="Our platform guarantees total security of your data and easy access to support."
                    />
                    <Content
                        title="Security"
                        body="Our platform guarantees total security of your data and easy access to support."
                    />
                    <Content
                        title="Security"
                        body="Our platform guarantees total security of your data and easy access to support."
                    />
                </section>
            </div>
        </>
    )
}

export default Home
