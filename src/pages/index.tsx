import type { NextPage } from 'next'
import Image from 'next/image'
import { Banner } from '../components/Banner'
import { Button } from '../components/Button'
import { LandingPageHeader } from '../components/Headers/LandingPageHeader'

const Home: NextPage = () => {
    return (
        <>
            <LandingPageHeader />
            <div className="bg-white">
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
                            <Button primary size="lg" className="py-3 px-7">
                                Create your store
                            </Button>
                        </div>
                    </div>
                </Banner>
                <div className="flex flex-col-reverse py-8 px-2 pb-10 sm:px-10 md:flex-row md:justify-between lg:px-24 xl:px-40">
                    <div className="w-full px-1 text-hypay-primary md:w-96 md:pt-28 md:pr-10">
                        <p className="mb-3 text-2xl font-semibold tracking-wide md:mb-4">Engagement</p>
                        <p className="mb-3 text-base tracking-wide md:mb-7">
                            Gain more engagement in your store with a reliable way to sell, and with a super practical
                            platform.
                        </p>
                        <Button primary size="lg" className="py-3 px-7">
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
                </div>
            </div>
        </>
    )
}

export default Home
