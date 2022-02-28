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
                <Banner src="/images/landing-banner.png" alt="Landing page banner">
                    <div className="absolute right-56 w-80 py-16 text-white">
                        <p className="mb-4 text-2xl font-semibold tracking-wide">
                            Start your online store quickly and easily.
                        </p>
                        <p className="mb-9 text-base">
                            With Hypay you pay and receive securely through instagram and Facebook.
                        </p>
                        <div className="flex justify-center pr-10">
                            <Button primary size="lg" className="py-2.5 px-8">
                                Create your store
                            </Button>
                        </div>
                    </div>
                </Banner>
                <div className="flex justify-between px-3 pb-10 sm:px-10 lg:px-24 xl:px-40">
                    <div className="w-96 pr-10 pt-28 text-hypay-primary">
                        <p className="mb-4 text-2xl font-semibold tracking-wide">Engagement</p>
                        <p className="mb-7 text-base tracking-wide">
                            Gain more engagement in your store with a reliable way to sell, and with a super practical
                            platform.
                        </p>
                        <Button primary size="lg" className="py-2.5 px-8">
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
