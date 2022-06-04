import { useState } from 'react'
import React, { NextPage } from 'next'
import Image from 'next/image'
import cx from 'classnames'

import { Button } from '../../../components/Button'
import { Card } from '../../../components/Card'
import {
    DownArrowIcon,
    FacebookIcon,
    InstagramIcon,
    LeftArrowIcon,
    LockIcon,
    RightArrowIcon,
    ShareIcon,
    StarIcon,
    TwitterIcon,
    WhatsAppIcon,
} from '../../../components/Icons'
import { BuyerLayout } from '../../../components/Layout'
import { COLORS } from '../../../lib/constants/colors'

const images = ['/images/jean-jacket.png', '/images/mens-wear.png']

const ProductView: NextPage = () => {
    const [currentImage, setCurrentImage] = useState(images[0])
    // const { product } = useProducts(id)

    // if (isLoading) {
    //     return <LoadingPage />
    // }

    return (
        <BuyerLayout>
            <div className="px-[23%] pt-12">
                <Card rounded padding="py-10 px-6">
                    <div className="grid grid-cols-12 gap-x-8">
                        <div className="col-span-7 rounded-lg">
                            <Image src={currentImage} layout="responsive" height={80} width="100%" quality={100} />
                            <div className="my-8 flex items-center justify-between gap-x-3">
                                <LeftArrowIcon />
                                <div className="flex grow cursor-pointer gap-x-3">
                                    {images.map((image, i) => (
                                        <button
                                            key={`${i}_img`}
                                            onClick={() => setCurrentImage(image)}
                                            className={cx(
                                                image === currentImage && 'opacity-100',
                                                'w-28 opacity-50 hover:scale-105 hover:opacity-70'
                                            )}
                                        >
                                            <Image
                                                src={image}
                                                layout="responsive"
                                                height={60}
                                                width={100}
                                                quality={100}
                                            />
                                        </button>
                                    ))}
                                </div>
                                <RightArrowIcon />
                            </div>
                            <div className="mt-12 flex gap-x-6 pl-8">
                                <ShareIcon color={COLORS.BLACK} size={26} />
                                <InstagramIcon color={COLORS.BLACK} size={26} />
                                <FacebookIcon fillColor={COLORS.BLACK} color={COLORS.WHITE} size={26} />
                                <TwitterIcon color={COLORS.BLACK} size={26} />
                                <WhatsAppIcon color={COLORS.BLACK} size={26} />
                            </div>
                        </div>
                        <div className="col-span-5">
                            <div className="text-2xl">{'Blue jeans jacket with suede'}</div>
                            <strong className="mt-10 block text-3xl">R$ 30</strong>
                            <div>até 2X sem juros</div>
                            <div className="mt-4 flex items-center gap-x-3 rounded-lg border border-black px-3 py-1">
                                Quantity: 1<RightArrowIcon color={COLORS.BLACK} />
                            </div>
                            <Button className="mt-5 block w-full bg-black text-lg font-bold text-white" padding="py-5">
                                Buy
                            </Button>
                            <Button className="mt-5 block w-full border border-black text-lg" padding="py-4">
                                Ask the salesperson
                            </Button>
                            <Button className="mt-2 block w-full border border-black text-lg" padding="py-4">
                                Add to cart
                            </Button>
                            <div className="mt-5 flex items-center gap-x-2 text-lg">
                                Ad Description <DownArrowIcon color={COLORS.BLACK} />
                            </div>
                            <div className="text-sm font-thin">
                                Light blue jeans jacket with suede made of sheep's wool. It has pockets and buttons on
                                the front.
                            </div>
                            <div className="mt-10">Calculate your freight</div>
                            <div className="mt-1 mb-4 flex items-end justify-between rounded-xl border border-black bg-[#FFFBFB] py-1 pl-4 pr-1">
                                <div>________ - _______</div>
                                <Button className="rounded-xl border border-black bg-white">Calculate</Button>
                            </div>
                            <div className="flex items-end gap-x-1 text-xl font-bold">
                                <LockIcon size={40} /> 100% secure purchase
                            </div>
                        </div>
                    </div>
                </Card>
                <Card className="mt-4" rounded>
                    <div className="divider flex items-center justify-between divide-x">
                        <div className="flex w-full items-center justify-between px-3">
                            <div className="flex items-center gap-x-1 text-sm text-hypay-gray">
                                {Array(5)
                                    .fill(0)
                                    .map((_, i) => (
                                        <StarIcon key={`${i}`} size={22} filled />
                                    ))}{' '}
                                (55)
                            </div>
                            <div className="underline">View Ratings</div>
                        </div>
                        <div className="flex w-full items-center justify-between px-2">
                            <div>All (55)</div>
                            <div>Positive (55)</div>
                            <div>Negative (0)</div>
                        </div>
                    </div>
                </Card>
            </div>
        </BuyerLayout>
    )
}

export default ProductView
