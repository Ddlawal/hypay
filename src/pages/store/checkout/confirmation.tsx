import React from 'react'
import { NextPage } from 'next'
import Image from 'next/image'
import cx from 'classnames'

import { BuyerLayout } from '../../../components/Layout'
import { BuyerTimeline } from '../../../components/Timeline'
import {
    EditIcon,
    FacebookIcon,
    InstagramIcon,
    LockIcon,
    PixPaymentIcon,
    ShareIcon,
    TwitterIcon,
    WhatsAppIcon,
} from '../../../components/Icons'
import { Card } from '../../../components/Card'
import { COLORS } from '../../../lib/constants/colors'
import { DeliveryDetails } from '../../../components/Buyer'
import { useMediaQuery } from '../../../hooks/useMediaQuery'

type ProductSummaryProps = {
    isSideSummary?: boolean
    imageUrl?: string
}

const ProductSummary = ({ isSideSummary, imageUrl = '/images/jean-jacket.png' }: ProductSummaryProps) => {
    return (
        <Card className="mb-4 grid grid-cols-12 gap-x-3 rounded-lg py-4 md:rounded md:bg-[#F2F2F2] md:px-2">
            <div className={cx(isSideSummary && 'col-span-6', 'col-span-12 overflow-hidden md:col-span-6')}>
                <Image
                    src={imageUrl}
                    className="rounded-lg"
                    layout="responsive"
                    height={isSideSummary ? 120 : 60}
                    width={100}
                    quality={100}
                />
            </div>
            <div className={cx(isSideSummary && 'col-span-6', 'col-span-12 md:col-span-6')}>
                <div
                    className={cx(
                        isSideSummary ? 'text-[0.75rem] lg:text-base' : 'md:text-xs lg:text-base',
                        'font-bold'
                    )}
                >
                    Lorem Ipsum
                </div>
                <div className={cx(isSideSummary ? 'text-[0.6rem] lg:text-xs' : 'md:text-[0.65rem]', 'my-2')}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin blandit leo orci nunc nibh quam et.
                    Sagittis ut eu aliquam pretium augue aliquam.
                </div>
                <div
                    className={cx(
                        isSideSummary ? 'text-[0.75rem] lg:text-base' : 'md:text-xs lg:text-base',
                        'flex flex-col gap-y-2 font-bold'
                    )}
                >
                    {isSideSummary ? null : (
                        <div className="flex items-center justify-between">
                            <div>Quantidade</div>
                            <div>1</div>
                        </div>
                    )}
                    <div className="flex items-center justify-between">
                        <div>Valor</div>
                        <div>R$30</div>
                    </div>
                </div>
            </div>
        </Card>
    )
}

const Confirmation: NextPage = () => {
    const isLargeScreen = useMediaQuery('md')

    return (
        <BuyerLayout>
            <div className="mt-6 grid grid-cols-12 md:gap-x-10 md:px-[10%]">
                <div className="col-span-12 px-4 md:col-span-8 md:px-0">
                    <BuyerTimeline />

                    <div className="mt-6 text-lg font-semibold">
                        Parabéns, Rafael sua compra foi realizada com sucesso!
                    </div>

                    <div className="grid grid-cols-12 gap-x-4">
                        <div className="col-span-12 my-4 md:col-span-11 lg:col-span-10">
                            <ProductSummary />
                        </div>
                        {isLargeScreen ? (
                            <div className="my-4 flex flex-col gap-y-4 md:col-span-1 lg:col-span-2">
                                <ShareIcon color={COLORS.BLACK} size={20} />
                                <InstagramIcon color={COLORS.BLACK} size={20} />
                                <FacebookIcon fillColor={COLORS.BLACK} color={COLORS.WHITE} size={20} />
                                <TwitterIcon color={COLORS.BLACK} size={20} />
                                <WhatsAppIcon color={COLORS.BLACK} size={20} />
                            </div>
                        ) : null}
                    </div>

                    <div>Detalhes da compra</div>

                    <Card className="my-4 flex items-center justify-center gap-x-2 py-8 md:justify-between md:gap-x-8">
                        <div className="md:flex-none">
                            <PixPaymentIcon size={22} />
                        </div>
                        <div className="text-[0.8rem] md:grow">PIX</div>
                    </Card>

                    <Card className="my-4 flex items-center justify-center gap-x-2 py-8 md:justify-between md:gap-x-8">
                        <div className="md:flex-none">
                            <EditIcon />
                        </div>
                        <div className="text-[0.8rem] md:grow">Nota Fiscal</div>
                        {isLargeScreen ? <div className="flex-none text-sm">Solicitar nota</div> : null}
                    </Card>

                    {isLargeScreen ? <DeliveryDetails /> : null}
                </div>
                <div className="col-span-12 px-4 font-semibold md:col-span-4 md:px-0 md:text-[.65rem] lg:text-[.85rem]">
                    {isLargeScreen ? (
                        <div className="mb-6 flex items-start justify-end gap-x-2">
                            <LockIcon size={15} /> Compra 100% segura
                        </div>
                    ) : null}

                    <div className="mb-2 mt-6 md:mt-0">Relacionados</div>
                    <ProductSummary isSideSummary imageUrl="/images/ladies-cloth.png" />
                    {isLargeScreen ? <ProductSummary isSideSummary imageUrl="/images/mens-coat.png" /> : null}

                    <div className="mt-10 mb-2">Comprar novamente</div>
                    <ProductSummary isSideSummary imageUrl="/images/long-sleeve.png" />
                </div>
            </div>
        </BuyerLayout>
    )
}

export default Confirmation
