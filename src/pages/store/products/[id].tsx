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
import { useMediaQuery } from '../../../hooks/useMediaQuery'
import { useRouter } from 'next/router'

const images = ['/images/jean-jacket.png', '/images/mens-wear.png']

const ProductDescription = () => {
    return (
        <>
            <div className="mt-5 flex items-center gap-x-2 text-lg">
                Descrição do anuncio <DownArrowIcon color={COLORS.BLACK} />
            </div>
            <div className="text-sm font-thin">
                Light blue jeans jacket with suede made of sheep's wool. It has pockets and buttons on the front.
            </div>
        </>
    )
}

const ProductView: NextPage = () => {
    const [currentImage, setCurrentImage] = useState(images[0])
    const isLargeScreen = useMediaQuery('md')
    const { push } = useRouter()

    const gotoCheckout = () => push('/store/checkout')
    // const { product } = useProducts(id)

    // if (isLoading) {
    //     return <LoadingPage />
    // }

    return (
        <BuyerLayout>
            <div className="mb-16 md:mb-0 md:px-[23%] md:pt-12">
                <Card
                    rounded
                    padding="p-0 md:py-10 md:px-6"
                    bg="bg-transparent md:bg-white"
                    elevation={isLargeScreen ? undefined : 'none'}
                >
                    <div className="relative grid grid-cols-12 md:gap-x-8">
                        <div className="col-span-12 rounded-lg md:col-span-7">
                            <Image src={currentImage} layout="responsive" height={80} width="100%" quality={100} />
                            {isLargeScreen ? (
                                <>
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
                                </>
                            ) : null}
                        </div>
                        <div className="col-span-12 mx-4 md:col-span-5 md:mx-0">
                            <div className="mt-4 text-2xl md:mt-0">Jaqueta jeans azul claro com camurça</div>
                            {isLargeScreen ? (
                                <>
                                    <strong className="mt-10 block text-3xl">R$ 30</strong>
                                    <div>até 2X sem juros</div>
                                </>
                            ) : (
                                <ProductDescription />
                            )}
                            <div className="mt-10 flex items-center gap-x-3 rounded-lg border border-black bg-white px-3 py-2 md:mt-4 md:bg-[#FFFBFB]">
                                Quantidade: 1<RightArrowIcon color={COLORS.BLACK} />
                            </div>
                            {isLargeScreen ? (
                                <>
                                    <Button
                                        className="mt-5 block w-full bg-black text-lg font-bold text-white"
                                        padding="py-5"
                                        onClick={() => gotoCheckout()}
                                    >
                                        Buy
                                    </Button>
                                    <Button className="mt-5 block w-full border border-black text-lg" padding="py-4">
                                        Ask the salesperson
                                    </Button>
                                    <Button className="mt-2 block w-full border border-black text-lg" padding="py-4">
                                        Add to cart
                                    </Button>
                                    <ProductDescription />
                                </>
                            ) : null}
                            <div className="mt-3 md:mt-10">Calcule seu frete</div>
                            <div className="mt-1 mb-4 flex items-end justify-between rounded-xl border border-black bg-white py-1 pl-4 pr-1 md:bg-[#FFFBFB]">
                                <div>________ - _______</div>
                                <Button className="rounded-xl border border-black bg-white">Calcular</Button>
                            </div>
                            {isLargeScreen ? (
                                <div className="flex items-end gap-x-1 text-xl font-bold">
                                    <LockIcon size={40} /> 100% secure purchase
                                </div>
                            ) : null}
                        </div>
                    </div>
                </Card>
                {isLargeScreen ? (
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
                ) : (
                    <div className="border-hypay-lightgrey fixed bottom-0 flex w-full justify-between border-t-2 bg-white p-4">
                        <div>
                            <div className="text-3xl font-semibold text-hypay-pink">R$ 30</div>
                            <div>até 2X sem juros</div>
                        </div>
                        <Button
                            padding="py-4 px-12"
                            className="col-span-6 bg-black text-white"
                            onClick={() => gotoCheckout()}
                        >
                            Comprar
                        </Button>
                    </div>
                )}
            </div>
        </BuyerLayout>
    )
}

export default ProductView
