import React from 'react'
import { PrimaryLayout } from '../../../components/Layout/PrimaryLayout'
import { NextPage } from 'next'
import { Card } from '../../../components/Card'
import { PaintIcon } from '../../../components/Icons'
import { COLORS } from '../../../lib/constants/colors'
import Image from 'next/image'
import { NextLink } from '../../../components/Links'

const OnlineStore: NextPage = () => {
    return (
        <PrimaryLayout currentTabIndex={4}>
            <div className="py-4 px-4 md:px-12">
                <div className="mb-4 items-center justify-between md:flex">
                    <h1 className="text-2xl font-bold">Temas</h1>
                </div>
                <div className="mt-3 mb-5">
                    <Card
                        rounded
                        elevation="xl"
                        className="flex w-min shrink-0 items-center gap-x-2 md:w-2/12 md:shrink"
                        padding="py-2 px-3"
                    >
                        <PaintIcon color={COLORS.PINK} size={28} />
                        <span className="text-sm md:text-base">Personalizar página</span>
                    </Card>
                </div>
                <div>
                    <h6 className="text-lg font-bold">Escolha seu template favorito</h6>

                    <div className="flex flex-col items-start justify-between md:flex-row md:items-center">
                        <NextLink href="onlineStore/1">
                            <Image
                                className="cursor-pointer transition-transform hover:scale-105"
                                src="/images/firstThemeTemplate.png"
                                width="300"
                                height="300"
                                alt="theme"
                            />
                        </NextLink>
                        <NextLink href="onlineStore/2">
                            <Image
                                className="cursor-pointer transition-transform hover:scale-105"
                                src="/images/secThemeTemplate.png"
                                width="300"
                                height="300"
                                alt="theme"
                            />
                        </NextLink>
                        <NextLink href="onlineStore/3">
                            <Image
                                className="cursor-pointer transition-transform hover:scale-105"
                                src="/images/thirdThemeTemplate.png"
                                width="300"
                                height="300"
                                alt="theme"
                            />
                        </NextLink>
                    </div>
                </div>
            </div>
        </PrimaryLayout>
    )
}

export default OnlineStore
