import cx from 'classnames'
import React, { NextPage } from 'next'

import { Button } from '../../../components/Button'
import { BuyerLayout } from '../../../components/Layout'
import { Card } from '../../../components/Card'
import { COLORS } from '../../../lib/constants/colors'
import { Divider } from '../../../components/Divider'
import { MinusIcon } from '../../../components/Icons/MinusIcon'
import { NextImage as Image } from '../../../components/Image'
import { PlusIcon } from '../../../components/Icons/PlusIcon'
import { ProductsType } from '../../../interfaces/products'
import { showErrorSnackbar } from '../../../lib/helper'
import { useEffect, useState } from 'react'
import { useLazyGetSingleProductQuery } from '../../../store/services/products'
import { useMediaQuery } from '../../../hooks/useMediaQuery'
import { useRouter } from 'next/router'

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
import { useCart } from '../../../hooks/useCart'

const images = ['/images/jean-jacket.png', '/images/mens-wear.png']

const ProductDescription = () => {
    return (
        <>
            <div className="mt-5 flex items-center gap-x-2 text-lg md:mt-3 md:text-base">
                Descrição do anuncio <DownArrowIcon color={COLORS.BLACK} />
            </div>
            <div className="text-sm font-thin md:text-xs">
                Light blue jeans jacket with suede made of sheep's wool. It has pockets and buttons on the front.
            </div>
        </>
    )
}

const ProductView: NextPage = () => {
    const isLargeScreen = useMediaQuery('md')
    const [product, setProduct] = useState<ProductsType | undefined>()
    const [qty, setQty] = useState(1)
    const [currentImage, setCurrentImage] = useState(images[0])
    const { handleAddToCart, isAddingToCart } = useCart()

    const {
        query: { id: productCode },
        isReady,
    } = useRouter()

    const { push } = useRouter()
    const gotoCheckout = () => push('/store/checkout')

    const imageLinks = product?.other_images_url ? product?.other_images_url.map((img) => img.image_link) : []
    const productImages = product?.image_url ? [product?.image_url, ...imageLinks] : imageLinks

    const [getProduct, { isFetching, isLoading }] = useLazyGetSingleProductQuery()

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const prod = await getProduct(productCode as string).unwrap()

                setProduct(prod)

                if (prod?.image_url) {
                    setCurrentImage(prod.image_url)
                }
            } catch (error) {
                showErrorSnackbar('Error fetching product!')
                console.log(error)
            }
        }

        if (isReady) {
            fetchProduct()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isReady])

    return (
        <BuyerLayout isLoading={isLoading || isFetching || !isReady}>
            <div className="mb-16 md:mb-0 md:px-[20%] md:pt-12">
                <Card
                    rounded
                    padding="p-0 md:py-10 md:px-6"
                    bg="bg-transparent md:bg-white"
                    elevation={isLargeScreen ? undefined : 'none'}
                >
                    <div className="relative grid grid-cols-12 md:gap-x-2">
                        <div className="col-span-12 rounded-lg md:col-span-8 md:pr-4">
                            <Image
                                src={currentImage}
                                layout="responsive"
                                height={80}
                                width="100%"
                                quality={100}
                                alt="produt-view"
                            />
                            {isLargeScreen ? (
                                <>
                                    <div className="my-8 flex items-center justify-between gap-x-3">
                                        <LeftArrowIcon
                                            color={
                                                productImages?.length && productImages?.length > 5
                                                    ? COLORS.BLACK
                                                    : COLORS.DISABLED
                                            }
                                        />
                                        <div className="flex grow cursor-pointer gap-x-3">
                                            {productImages?.map((image_link, i) => (
                                                <button
                                                    key={`${i}_img`}
                                                    onClick={() => setCurrentImage(image_link)}
                                                    className={cx(
                                                        image_link === currentImage && 'opacity-100',
                                                        'w-28 opacity-50 hover:scale-105 hover:opacity-70'
                                                    )}
                                                >
                                                    <Image
                                                        src={image_link}
                                                        layout="responsive"
                                                        height={60}
                                                        width={100}
                                                        quality={100}
                                                        alt="product-pics"
                                                    />
                                                </button>
                                            ))}
                                        </div>
                                        <RightArrowIcon
                                            color={
                                                productImages?.length && productImages?.length > 5
                                                    ? COLORS.BLACK
                                                    : COLORS.DISABLED
                                            }
                                        />
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
                        <div className="col-span-12 mx-4 md:col-span-4 md:mx-0">
                            <div className="mt-4 text-2xl md:mt-0 md:text-lg md:leading-6 md:text-hypay-gray">
                                Jaqueta jeans azul claro com camurça
                            </div>
                            {isLargeScreen ? (
                                <>
                                    <strong className="mt-4 block text-xl">R$ 30</strong>
                                    <div className="text-xs">até 2X sem juros</div>
                                </>
                            ) : (
                                <ProductDescription />
                            )}
                            <div className="mt-10 flex items-center gap-x-3 rounded-lg border border-black bg-white px-3 py-2 md:mt-2 md:bg-[#FFFBFB] md:py-1">
                                Quantidade:
                                <div className="flex w-full items-center justify-center gap-x-2">
                                    <Button disabled={qty === 1} onClick={() => setQty(qty - 1)}>
                                        <MinusIcon size={12} color={qty === 1 ? COLORS.GREY : COLORS.BLACK} />
                                    </Button>
                                    <Divider orientation="vertical" />
                                    <span className="text-base">{qty}</span>
                                    <Divider orientation="vertical" />
                                    <Button disabled={product?.quantity === qty} onClick={() => setQty(qty + 1)}>
                                        <PlusIcon
                                            size={12}
                                            color={product?.quantity === qty ? COLORS.GREY : COLORS.BLACK}
                                        />
                                    </Button>
                                </div>
                            </div>
                            {isLargeScreen ? (
                                <>
                                    <Button
                                        className="mt-3 block w-full bg-black text-lg font-bold text-white"
                                        padding="py-3"
                                        onClick={() => gotoCheckout()}
                                    >
                                        Comprar
                                    </Button>
                                    <Button
                                        className="mt-3 block w-full border border-black text-[1rem]"
                                        padding="py-2"
                                    >
                                        Pergunte ao vendedor
                                    </Button>
                                    <Button
                                        className="mt-2 block w-full border border-black text-[1rem]"
                                        padding="py-2"
                                        onClick={() =>
                                            product ? handleAddToCart({ productID: product?.id, quantity: qty }) : null
                                        }
                                        loading={isAddingToCart}
                                        loaderColor="BLACK"
                                        loaderSize={24}
                                    >
                                        Add to cart
                                    </Button>
                                    <ProductDescription />
                                </>
                            ) : null}
                            <div className="mt-3 md:mt-10">Calcule seu frete</div>
                            <div className="mt-1 mb-4 flex items-end justify-between rounded-xl border border-black bg-white py-1 pl-4 pr-1 md:bg-[#FFFBFB]">
                                <div>________ - _______</div>
                                <Button className="rounded-xl border border-black bg-white md:text-sm">Calcular</Button>
                            </div>
                            {isLargeScreen ? (
                                <div className="flex items-end gap-x-1 font-bold">
                                    <LockIcon size={28} /> 100% secure purchase
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
