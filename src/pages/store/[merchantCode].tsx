import cx from 'classnames'
import { NextPage } from 'next'
import React, { useEffect, useState } from 'react'

import { NextImage as Image } from '../../components/Image'
import { NextLink } from '../../components/Links'
import { useMediaQuery } from '../../hooks/useMediaQuery'
import { BuyerLayout } from '../../components/Layout'
import { formatAmount, showErrorSnackbar } from '../../lib/helper'
import { ProductsType } from '../../interfaces/products'
import { useLazyGetMerchantStoreQuery } from '../../store/services/products'
import { useRouter } from 'next/router'
import { Button } from '../../components/Button'
import { AddToCartIcon } from '../../components/Icons'
import { useCart } from '../../hooks/useCart'

const merchantDisplayImage = ''
const mostViewed: Array<ProductsType> = []

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

const CarouselItem = ({ amount, id, image_url, productCode, productName, quantity }: ProductsType) => {
    const [showAddToCart, setShowAddToCart] = useState(false)
    const { handleAddToCart } = useCart()

    return (
        <div>
            <NextLink
                href={`/store/products/${productCode}`}
                onMouseEnter={() => setShowAddToCart(true)}
                onMouseLeave={() => setShowAddToCart(false)}
            >
                <div className="relative h-44 w-60">
                    <div
                        className={cx(
                            showAddToCart ? 'opacity-100' : 'opacity-0',
                            'absolute z-10 h-10 w-16 bg-hover-cart from-white via-slate-100 transition-opacity duration-500 ease-in-out'
                        )}
                    >
                        <Button preventDefault onClick={() => handleAddToCart(id, 1)}>
                            <AddToCartIcon />
                        </Button>
                    </div>
                    <Image src={image_url} layout="fill" objectFit="cover" quality={100} alt="product-pic" />
                </div>
            </NextLink>
            <div className="my-2">
                <div className="flex justify-between">
                    <div className="text-xs font-light">{productName}</div>
                    <div>
                        <span className="text-xs font-light text-hypay-pink">In stock:</span>{' '}
                        <span className="text-xs">{quantity}</span>
                    </div>
                </div>
                <strong>{formatAmount(Number(amount))}</strong>
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
const Carousel = ({ products }: { products: Array<ProductsType> }) => {
    return (
        <div className="hsb mt-3 flex h-full gap-x-5 overflow-x-auto shadow-inner">
            {products.map((product, i) => (
                <CarouselItem key={`product_${i}`} {...product} />
            ))}
        </div>
    )
}

const Store: NextPage = () => {
    const isDesktop = useMediaQuery('md')

    const [getMerchantStore, { isFetching, isLoading }] = useLazyGetMerchantStoreQuery()
    const [storeProducts, setStoreProducts] = useState<Array<ProductsType>>([])

    const {
        query: { merchantCode },
        isReady,
    } = useRouter()

    useEffect(() => {
        if (isReady) {
            ;(async () => {
                try {
                    const products = await getMerchantStore(merchantCode as string).unwrap()

                    setStoreProducts(products)
                } catch (error) {
                    showErrorSnackbar('Error fetching merchant store!')
                    console.log(error)
                }
            })()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isReady])

    return (
        <BuyerLayout isLoading={isLoading || isFetching || !isReady}>
            <div className="relative h-full md:px-28">
                <Image
                    src="/images/buyers-banner.png"
                    layout="responsive"
                    height={250}
                    width={isDesktop ? 700 : 500}
                    quality={100}
                    alt="buyers-banner"
                    priority
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
            <div className="min-h-[25rem]">
                <div className="mt-4 overflow-hidden px-4 md:px-[20%]">
                    <strong className="text-xl">New</strong>
                    <Carousel products={storeProducts} />
                </div>
                <div className="my-8 h-full md:px-[20%]">
                    {merchantDisplayImage ? (
                        <Image
                            src="/images/mens-wear.png"
                            layout="responsive"
                            height={250}
                            width={isDesktop ? 700 : 500}
                            quality={100}
                            alt="mens-wear"
                        />
                    ) : null}
                </div>
                <div className="mt-4 overflow-hidden px-4 md:px-[20%]">
                    {mostViewed.length ? <strong className="text-xl">Most Viewed</strong> : null}
                    <Carousel products={mostViewed} />
                </div>
            </div>
            <Footer />
        </BuyerLayout>
    )
}

export default Store
