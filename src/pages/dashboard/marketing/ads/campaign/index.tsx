import React from 'react'
import { NextPage } from 'next'
import { PrimaryLayout } from '../../../../../components/Layout'
import { Card } from '../../../../../components/Card'
import { InstagramSvgIcon } from '../../../../../components/Icons/InstagramSvgIcon'
import { FacebookIcon, OpenLinkIcon } from '../../../../../components/Icons'
import { COLORS } from '../../../../../lib/constants/colors'
import { useMediaQuery } from '../../../../../hooks/useMediaQuery'
import { useRouter } from 'next/router'

export const campaignPlatforms = [
    {
        name: 'Instagram',
        logo: <InstagramSvgIcon color={COLORS.WHITE} size={24} />,
        link: 'instagram',
    },
    {
        name: 'Facebook',
        logo: <FacebookIcon fillColor={COLORS.PINK} color={COLORS.WHITE} size={24} />,
        link: 'facebook',
    },
    {
        name: 'Internal',
        logo: <InstagramSvgIcon color={COLORS.WHITE} size={24} />,
        link: 'internal',
    },
]

const CampaignCards = ({ name, logo, link }: { name: string; logo: JSX.Element; link: string }) => {
    const isDesktop = useMediaQuery('md')
    const { push } = useRouter()
    return (
        <Card
            rounded
            padding="md:px-5 px-8 py-3"
            elevation="xl"
            className="campaignCardsGradient my-3 mx-auto  flex h-28 w-11/12 flex-col justify-between text-white shadow-md md:mx-0 md:w-3/12"
        >
            <div className="flex items-center justify-between">
                <div>{logo}</div>
                <h3 className=" border-b border-dashed border-white text-xl">{name}</h3>
            </div>

            <div className="flex items-center justify-center gap-x-3">
                <h1>Create Campaign</h1>
                <button
                    onClick={() => push(`/dashboard/marketing/ads/campaign/` + link)}
                    className="rounded-full p-2 transition duration-200 ease-in-out hover:scale-105 hover:shadow-sm"
                >
                    <OpenLinkIcon size={isDesktop ? 18 : 14} color={COLORS.WHITE} />
                </button>
            </div>
        </Card>
    )
}

const Campaign: NextPage = () => {
    return (
        <PrimaryLayout currentTabIndex={5} dropDownIndex={0}>
            <div className="py-4 px-4 md:px-12">
                <header>
                    <h1 className="mb-4 text-3xl font-bold">Choose the location of your campaign:</h1>
                </header>

                <main className="flex w-full flex-wrap items-center justify-start gap-x-10">
                    {campaignPlatforms.map((platform, index) => {
                        return <CampaignCards key={index} {...platform} />
                    })}
                </main>
            </div>
        </PrimaryLayout>
    )
}

export default Campaign
