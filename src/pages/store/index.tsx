import React, { useState } from 'react'
import { NextPage } from 'next'
import Image from 'next/image'
import { NextLink } from '../../components/Links'
import { useMediaQuery } from '../../hooks/useMediaQuery'
import { BuyerLayout } from '../../components/Layout'
// import { useProducts } from '../../hooks/useProducts'

const newProducts = ['/images/jean-jacket.png', '/images/ladies-vests.png', '/images/mens-coat.png']
const mostViewedProducts = ['/images/folded-t-shirt.png', '/images/long-sleeve.png', '/images/white-hoodie.png']

const Footer = () => {
    return (
        <div className="w-screen bg-white px-4 pb-6 pt-8 md:px-[20%]">
            <div className="flex items-center justify-between px-[20%] text-xs md:text-sm">
                <div>
                    <NextLink href="/store">Home</NextLink>
                </div>
                <div>
                    <NextLink href="/store/checkout" className="block py-2">
                        Checkout
                    </NextLink>
                </div>
                <div>
                    <NextLink href="/store/support" className="block py-2">
                        Atendimento
                    </NextLink>
                </div>
            </div>
            <hr className="mt-6 mb-4" />
            <div className="flex items-center justify-between text-xs md:text-sm">
                <div>
                    <NextLink href="/privacy">Policy</NextLink>
                </div>
                <div className="md:hidden">Copyright © 2022</div>
                <div className="hidden md:block">Copyright © 2022 - All Rights Reserved</div>
                <div>
                    <NextLink href="/terms-conditions">Terms & Condition</NextLink>
                </div>
            </div>
        </div>
    )
}

/**
 * Carousel NOT implemented
 *
 * @param images Array of image urls
 * @returns JSX Element
 */
const Carousel = ({ images }: { images: string[] }) => {
    return (
        <div className="hsb mt-3 flex h-full gap-x-5 overflow-x-auto shadow-inner">
            {images.map((image_url, i) => (
                <div key={`product_${i}`}>
                    <div className="relative h-44 w-60 bg-black">
                        <Image src={image_url} layout="fill" objectFit="cover" quality={100} />
                    </div>
                    <div className="my-2">
                        <div className="text-xs font-light">Lorem ipsum dolor sit amet</div>
                        <strong>R$30</strong>
                    </div>
                </div>
            ))}
        </div>
    )
}

const Store: NextPage = () => {
    const isDesktop = useMediaQuery('md')
    const [loadingData] = useState(false)
    // const { products } = useProducts()

    return (
        <BuyerLayout isLoading={loadingData}>
            <div className="relative h-full md:px-28">
                <Image
                    src="/images/buyers-banner.png"
                    layout="responsive"
                    height={250}
                    width={isDesktop ? 700 : 500}
                    quality={100}
                />
                <div className="absolute top-0 z-10 ml-4 flex h-full flex-col justify-center md:ml-20">
                    <div className="mb-2 block text-xl text-white md:hidden">
                        Até <br /> <span className="text-3xl text-hypay-orange">80%</span> off
                    </div>
                    <div className="mb-6 hidden text-lg md:block lg:text-[2rem]">
                        Até <span className="text-[2rem] text-hypay-orange lg:text-[3.5rem]">80%</span>
                        <br /> off
                    </div>
                    <div className="block text-sm tracking-widest text-white md:hidden">
                        Aproveite as{' '}
                        <span className="text-hypay-orange">
                            melhoras <br /> ofertas
                        </span>{' '}
                        da semana!
                    </div>
                    <div className="hidden text-base tracking-widest md:block lg:text-xl">
                        Aproveite as{' '}
                        <span className="text-hypay-orange">
                            melhoras <br /> ofertas
                        </span>{' '}
                        da semana!
                    </div>
                </div>
            </div>
            <div className="overflow-hidden px-4 md:px-[20%]">
                <Carousel images={newProducts} />
            </div>
            <div className="my-8 h-full md:px-[20%]">
                <Image
                    src="/images/mens-wear.png"
                    layout="responsive"
                    height={250}
                    width={isDesktop ? 700 : 500}
                    quality={100}
                />
            </div>
            <div className="overflow-hidden px-4 md:px-[20%]">
                <Carousel images={mostViewedProducts} />
            </div>
            <Footer />
        </BuyerLayout>
    )
}

export default Store
