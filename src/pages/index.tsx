import React, { useEffect, useState } from 'react'
import cx from 'classnames'
import type { NextPage } from 'next'
import Image from 'next/image'
import { Banner } from '../components/Banner'
import { Button } from '../components/Button'
import { LandingPageHeader } from '../components/Headers/LandingPageHeader'
import {
    CircularArrowUpIcon,
    CreateAccountIcon,
    ConnectIcon,
    ShareIcon,
    DeliveryIcon,
    ReceivePaymentIcon,
} from '../components/Icons'
import { Timeline, TimelineEvent } from '../components/Timeline'
import { useMediaQuery } from '../hooks/useMediaQuery'
import { COLORS } from '../lib/constants/colors'
import Head from 'next/head'
import { LandingPageFooter } from '../components/Headers/LandingPageFooter'
import { useRouter } from 'next/router'

type ContentProps = {
    title: string
    body: string
    className?: string
    titleClassName?: string
    dotDivider?: boolean
}

const Content = ({ title, body, className, titleClassName, dotDivider = false }: ContentProps) => (
    <div>
        <p
            className={cx(
                titleClassName,
                'mb-3 text-center text-3xl font-bold capitalize tracking-wide text-hypay-primary md:mb-4 md:text-left'
            )}
        >
            {title}
        </p>
        <p
            className={cx(
                className,
                'mb-3 w-[100%] text-center text-base font-semibold tracking-wide text-hypay-primary md:mb-7 md:w-[85%] md:text-left'
            )}
        >
            {body}
        </p>
        {dotDivider && <div className="mx-auto h-3 w-3 rounded-full bg-hypay-pink md:hidden" />}
    </div>
)

const Index: NextPage = () => {
    const isLargeScreen = useMediaQuery('md')
    const [orientation, setOrientation] = useState<'horizontal' | 'vertical'>('horizontal')
    const [isHorizontal, setIsHorizontal] = useState(false)
    const { push } = useRouter()

    useEffect(() => {
        if (isLargeScreen) {
            setOrientation('horizontal')
            setIsHorizontal(true)
        } else {
            setOrientation('vertical')
            setIsHorizontal(false)
        }
    }, [isLargeScreen])

    return (
        <>
            <Head>
                <title>Hypay Landing Page</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="icon" type="image/x-icon" href="/images/hypayLogo.png"></link>
            </Head>
            <LandingPageHeader />
            <div className="md:bg-white">
                <Banner
                    src="/images/landing-banner.png"
                    srcMobile="/images/landing-banner-mobile.png"
                    alt="Landing page banner"
                >
                    <div className="absolute w-full px-8 py-16 text-white md:right-56 md:w-80 md:px-0">
                        <p className="mb-2 text-2xl font-semibold tracking-wide md:mb-4">
                            Comece sua loja virtual de maneira rápida e fácil.
                        </p>
                        <p className="mb-9 text-sm md:text-base">
                            Com o Hypay você paga e recebe com segurança através do instagram e Facebook.
                        </p>
                        <div className="flex justify-center pr-10">
                            <Button
                                onClick={() => push('/createstore')}
                                primary
                                size="lg"
                                className="py-4 px-9 md:py-3 md:px-7"
                            >
                                Crie sua página
                            </Button>
                        </div>
                    </div>
                </Banner>

                <section
                    id="solution"
                    className="flex flex-col-reverse px-4 py-8 pb-10 sm:px-10 md:flex-row md:justify-between lg:px-24 xl:px-40"
                >
                    <div className="w-full px-2 text-hypay-primary md:w-96 md:px-0 md:pt-28 md:pr-10">
                        <Content
                            title="Engajamento"
                            body="Ganhe mais engajamento na sua loja com uma forma confiável de vender e com uma plataforma super prática."
                        />
                        <Button
                            onClick={() => push('/createstore')}
                            primary
                            size="lg"
                            className="py-4 px-9 md:py-3 md:px-7"
                        >
                            Crie sua página
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
                </section>

                <section className="flex flex-col bg-hypay-primary py-10 px-7 text-white sm:px-10 md:flex-row md:justify-between md:py-4 lg:px-24 xl:px-40">
                    <Image
                        src="/images/iPhone-yellow-bg.png"
                        alt="mac-book"
                        width="430rem"
                        height="350rem"
                        objectFit="contain"
                        quality={100}
                    />

                    <div className="flex items-center md:w-1/2">
                        <div className="mt-6 mb-10 md:mt-0 md:mb-0">
                            <Content
                                className="text-white"
                                titleClassName="text-white"
                                title="Segurança"
                                body="Nossa plataforma que garante total segurança dos seus dados e com fácil acesso para o suporte.
"
                            />
                        </div>
                    </div>
                </section>

                {/* todo: in-progress */}
                <section
                    id="function"
                    className="flex flex-col px-7 pb-8 pt-16 sm:px-10 md:items-center md:pb-12 md:pt-24 lg:px-24 xl:px-40"
                >
                    <div className="text-center text-3xl font-bold tracking-wide text-hypay-primary">
                        Funciona assim
                    </div>

                    <div className="my-8 md:mt-16">
                        <Timeline
                            orientation={orientation}
                            thickness={5}
                            gap={isHorizontal ? 80 : 40}
                            progressBarBackground={COLORS.PINK}
                        >
                            <TimelineEvent
                                label="Crie sua conta no Hypay."
                                labelFontSize={isHorizontal ? undefined : 15}
                                bgColor="white"
                                border={`3px solid ${COLORS.PINK}`}
                                labelTextHeight={30}
                                labelTextWidth={isHorizontal ? undefined : 250}
                                eventSize={60}
                                color={COLORS.PRIMARY}
                                isHorizontal={isHorizontal}
                            >
                                <CreateAccountIcon color={COLORS.PRIMARY} />
                            </TimelineEvent>
                            <TimelineEvent
                                label="Conecte seu insagram ou facebook."
                                labelFontSize={isHorizontal ? undefined : 15}
                                bgColor="white"
                                border={`3px solid ${COLORS.PINK}`}
                                labelTextHeight={30}
                                labelTextWidth={isHorizontal ? 130 : 250}
                                eventSize={60}
                                color={COLORS.PRIMARY}
                                isHorizontal={isHorizontal}
                            >
                                <ConnectIcon color={COLORS.PRIMARY} />
                            </TimelineEvent>
                            <TimelineEvent
                                label="Compartilhe sua loja para os compradores."
                                labelFontSize={isHorizontal ? undefined : 15}
                                bgColor="white"
                                border={`3px solid ${COLORS.PINK}`}
                                labelTextHeight={30}
                                labelTextWidth={isHorizontal ? undefined : 250}
                                eventSize={60}
                                color={COLORS.PRIMARY}
                                isHorizontal={isHorizontal}
                            >
                                <ShareIcon color={COLORS.PRIMARY} />
                            </TimelineEvent>
                            <TimelineEvent
                                label="Entrega confirmada."
                                labelFontSize={isHorizontal ? undefined : 15}
                                bgColor="white"
                                border={`3px solid ${COLORS.PINK}`}
                                labelTextHeight={30}
                                labelTextWidth={isHorizontal ? undefined : 250}
                                eventSize={60}
                                color={COLORS.PRIMARY}
                                isHorizontal={isHorizontal}
                            >
                                <DeliveryIcon color={COLORS.PRIMARY} />
                            </TimelineEvent>
                            <TimelineEvent
                                label="Pronto. Você recebe o pagamento"
                                labelFontSize={isHorizontal ? undefined : 15}
                                bgColor="white"
                                border={`3px solid ${COLORS.PINK}`}
                                labelTextHeight={30}
                                labelTextWidth={isHorizontal ? 130 : 250}
                                eventSize={60}
                                color={COLORS.PRIMARY}
                                isHorizontal={isHorizontal}
                            >
                                <ReceivePaymentIcon color={COLORS.PRIMARY} />
                            </TimelineEvent>
                        </Timeline>
                    </div>

                    <Button
                        onClick={() => push('/createstore')}
                        primary
                        size="lg"
                        className="mr-24 py-4 px-9 md:mr-0 md:py-3 md:px-7"
                    >
                        Crie sua página
                    </Button>
                </section>

                <section>
                    <Banner
                        src="/images/woman-with-clothes.png"
                        srcMobile="/images/women-with-phones.png"
                        className=""
                    />
                </section>
                <div id="benefit" className="py-10 px-7 sm:px-10 md:py-4 lg:px-24 xl:px-40">
                    {/* incase the heading is required in future */}
                    {/* <h1 className="hidden mt-20 mb-8 text-4xl font-bold tracking-wide text-center md:block text-hypay-primary">
                        Benefícios para vendedor
                    </h1> */}
                    <section className="grid-col-1 mt-16 grid gap-4 md:grid-cols-2 ">
                        <Content
                            dotDivider
                            title="Suporte 24 horas"
                            body="Nosso sistema de suporte ao usuário vai tornar mais rápido e prático a resolução dos seus problemas quando você precisar da nossa ajuda.
"
                        />
                        <Content
                            dotDivider
                            title="Checkout simplificado"
                            body="Com nosso checkout simplificado seus clientes terão mais facilidade em concluir as compras."
                        />
                        <Content
                            dotDivider
                            title="Sistema de rastreio"
                            body="No Hypay temos suporte para rastreamento de encomendas. Dessa forma você terá total controle sobre suas entregas e seus clientes também."
                        />
                        <Content
                            dotDivider
                            title="Facilidade"
                            body="Nossa plataforma oferece um sistema prático e intuitivo mesmo para àqueles que não têm experiência com vendas online."
                        />
                        <div className="mt-10">
                            <Content
                                dotDivider
                                titleClassName="md:w-[70%]"
                                className="md:w-[70%]"
                                title="Venha fazer parte da nossa comunidade!."
                                body="Aproveite todas as vantagens de ser membro HyPay e contar com o que há de melhor no mercado."
                            />
                        </div>
                        <div className="mt-10 flex items-end justify-center md:w-[80%] md:justify-end">
                            <Button
                                onClick={() => push('/createstore')}
                                primary
                                size="lg"
                                className="mb-8 py-4 px-9 md:py-3 md:px-7"
                            >
                                Crie sua página
                            </Button>
                        </div>
                    </section>
                </div>
                <div className="mt-10 mb-5 mr-10 flex justify-end">
                    <a
                        href="#"
                        onClick={() => window.scrollTo(0, 0)}
                        className="flex h-full cursor-pointer flex-col items-center justify-end md:w-[20%] "
                    >
                        <CircularArrowUpIcon color={COLORS.PINK} size={40} />
                        <p className="font-semibold text-hypay-pink">Voltar ao topo</p>
                    </a>
                </div>
                <LandingPageFooter />
            </div>
        </>
    )
}

export default Index
