import React, { FC } from 'react'
import { Button } from '../../../components/Button'
import { Card } from '../../../components/Card'
import {
    FacebookIcon,
    InfoIcon,
    InstagramIcon,
    OpenLinkIcon,
    PaintIcon,
    PaymentCardIcon,
    QuestionMarkIcon,
    TagIcon,
    TwitterIcon,
    VanIcon,
    WhatsAppIcon,
} from '../../../components/Icons'
import { PrimaryLayout } from '../../../components/Layout'
import { useMediaQuery } from '../../../hooks/useMediaQuery'
import { COLORS } from '../../../lib/constants/colors'

const quickGuides = [
    {
        icon: <PaintIcon color={COLORS.PINK} size={28} />,
        text: 'Choose a theme',
    },
    {
        icon: <TagIcon color={COLORS.PINK} size={28} />,
        text: 'Adicionar um produto',
    },
    {
        icon: <PaymentCardIcon color={COLORS.PINK} size={28} />,
        text: 'Define Payment',
    },
    {
        icon: <VanIcon color={COLORS.PINK} size={28} />,
        text: 'Configure send medium',
    },
]

type SectionWrapperProps = { title?: string }

const SectionWrapper: FC<SectionWrapperProps> = ({ children, title }) => (
    <section className="mb-8">
        <span className="text-[1.3rem] font-semibold text-hypay-black">{title}</span>
        {children}
    </section>
)

const WelcomeToHypay = () => (
    <SectionWrapper>
        <span className="text-2xl font-semibold text-hypay-black">Bem vindo ao Hypay</span>
        <Card rounded padding="py-3 px-10 mt-3" elevation="xl">
            <div className="mb-2 flex items-center justify-center md:justify-center">
                <InfoIcon color={COLORS.PINK} />
                <span className="ml-2 text-lg font-medium">Verifique seu e-mail</span>
            </div>
            <div className="mb-2 text-center text-sm text-hypay-black">
                Confirme sua conta no e-mail que enviamos para: seuemail@email.com
            </div>
            <div className="flex items-center justify-center">
                <Button primary outlined className="py-4 px-10">
                    Reenviar Email
                </Button>
            </div>
        </Card>
    </SectionWrapper>
)

const QuickGuide = () => {
    return (
        <SectionWrapper title="Guia Rápido">
            <div className="mt-3 flex gap-x-5 overflow-x-auto">
                {quickGuides.map(({ icon, text }, i) => (
                    <Card key={`card${i}`} rounded elevation="xl" className="w-1/3 shrink-0" padding="py-2 px-3">
                        {icon}
                        <span className="text-sm md:text-base">{text}</span>
                    </Card>
                ))}
            </div>
        </SectionWrapper>
    )
}

const ShareYourStore = () => (
    <SectionWrapper title="Compartilhe sua loja">
        <Card rounded padding="py-3 px-10 mt-3" elevation="xl">
            <div className="mb-4 text-center leading-4 text-hypay-black">
                Comece a divulgar a sua loja nas redes sociais
            </div>
            <div className="flex items-center justify-center gap-x-4">
                <FacebookIcon color={COLORS.WHITE} size={28} fillColor={COLORS.PINK} />
                <InstagramIcon color={COLORS.PINK} size={28} />
                <WhatsAppIcon color={COLORS.PINK} size={28} />
                <TwitterIcon color={COLORS.PINK} size={28} />
            </div>
        </Card>
    </SectionWrapper>
)

const FootNote: FC<{ isDesktop: boolean }> = ({ isDesktop }) => (
    <div className="md:text-md flex items-center justify-center text-center text-xs leading-6">
        <span className="p-2">
            <QuestionMarkIcon size={isDesktop ? 20 : 14} color={COLORS.PINK} />
        </span>
        <span className="text-center text-[0.8rem] font-semibold">
            Tem dúvidas? Acesse nossa <span className="text-hypay-pink">Central de Ajuda</span>
        </span>
        <button className="rounded-full p-2 transition duration-200 ease-in-out hover:scale-105 hover:shadow-sm">
            <OpenLinkIcon size={isDesktop ? 20 : 14} color={COLORS.PINK} />
        </button>
    </div>
)

const ConnectYourStore = () => (
    <SectionWrapper title="Conecte sua loja">
        <Card rounded padding="py-3 px-6 mt-3" elevation="xl" className="flex">
            <div className="mr-4">
                <InfoIcon color={COLORS.PINK} size={24} />
            </div>
            <div>
                <div className="mb-2">
                    <span className="text-lg leading-5">Conecte seu insta/facebook para começar</span>
                </div>
                <div className="mb-2 text-sm text-hypay-black">Text here and hereaaa</div>
                <div className="flex items-center">
                    <Button primary outlined className="py-4 px-10">
                        Vincular a conta
                    </Button>
                </div>
            </div>
        </Card>
    </SectionWrapper>
)

const Home = () => {
    const isDesktop = useMediaQuery('md')

    return (
        <PrimaryLayout>
            <div className="md:text-md flex items-center justify-center bg-hypay-green text-center text-xs leading-6 text-white">
                <strong>Veja sua loja antes dela ser publicada</strong>
                <button className="rounded-full p-2 transition duration-200 ease-in-out hover:scale-105 hover:shadow-sm">
                    <OpenLinkIcon size={isDesktop ? 18 : 12} color={COLORS.WHITE} />
                </button>
            </div>
            <div className="p-4">
                <WelcomeToHypay />
                <QuickGuide />
                <ShareYourStore />
                <ConnectYourStore />
                <FootNote isDesktop />
            </div>
        </PrimaryLayout>
    )
}

export default Home
