import React from 'react'
import { NextPage } from 'next'

import { NextImage as Image } from '../../../../components/Image'
import { Button } from '../../../../components/Button'
import { Card } from '../../../../components/Card'
import { SessionIcon, CoinsIcon, TagIcon, CartIcon } from '../../../../components/Icons'
import { PrimaryLayout } from '../../../../components/Layout'
import { COLORS } from '../../../../lib/constants/colors'
import { useRouter } from 'next/router'

export const adsCardsContent = [
    {
        title: 'Session',
        icon: <SessionIcon size={30} />,
        text: '2 campaign sessions',
    },
    {
        title: 'Orders',
        icon: <CartIcon size={30} />,
        text: '120 orders',
    },
    {
        title: 'Sales',
        icon: <TagIcon color={COLORS.PINK} size={30} />,
        text: '130 sales',
    },
    {
        title: 'Cost',
        icon: <CoinsIcon size={30} />,
        text: '$ 23,000.00',
    },
]

export const AdsCard = ({ title, icon, text }: { title: string; icon: JSX.Element; text: string }) => {
    return (
        <div className="mt-10 flex w-full flex-col md:w-5/12">
            <div className="my-2 flex items-center gap-x-3">
                {icon}
                <h1 className="text-2xl font-bold">{title}</h1>
            </div>
            <div>
                <Card padding="p-2" rounded>
                    {text}
                </Card>
            </div>
        </div>
    )
}

const Ads: NextPage = () => {
    const { push } = useRouter()
    return (
        <PrimaryLayout currentTabIndex={5} dropDownIndex={0}>
            <div>
                <header className="adOnGradient flex w-full flex-wrap items-stretch justify-between md:h-[11rem]">
                    <div className="relative py-3  pl-10 md:w-5/12">
                        <h1 className="mb-4 text-2xl font-bold text-white">
                            Make a marketing campaign and increase your sales
                        </h1>
                        <Button
                            onClick={() => {
                                push('/dashboard/marketing/ads/campaign')
                            }}
                            primary
                            className="mt-10 flex items-center px-7 md:mt-2"
                        >
                            <span className="px-2">Create campaign</span>
                        </Button>
                        <div className="absolute top-16 right-20">
                            <Image
                                src="/images/averageDiamond.png"
                                className=""
                                alt="average diamond"
                                width={50}
                                height={50}
                            />
                        </div>
                    </div>
                    <section className="relative flex w-7/12 items-center justify-end pr-10">
                        <div className="absolute top-12 left-6">
                            <Image
                                src="/images/averageDiamond.png"
                                className=""
                                alt="average diamond"
                                width={100}
                                height={100}
                            />
                        </div>
                        <div className="absolute top-6 left-[25%]">
                            <Image
                                src="/images/averageDiamond.png"
                                className=""
                                alt="average diamond"
                                width={40}
                                height={40}
                            />
                        </div>
                        <div className="absolute top-[50%] left-[40%]">
                            <Image
                                src="/images/averageDiamond.png"
                                className=""
                                alt="average diamond"
                                width={40}
                                height={40}
                            />
                        </div>
                        <Image
                            src="/images/laptop-image.png"
                            className="flex justify-end"
                            alt="laptop image"
                            width={210}
                            height={150}
                        />
                    </section>
                </header>
                <main className="flex min-h-full flex-wrap px-10 md:gap-x-10">
                    {adsCardsContent.map((ad, index) => (
                        <AdsCard key={index} {...ad} />
                    ))}
                </main>
            </div>
        </PrimaryLayout>
    )
}

export default Ads
