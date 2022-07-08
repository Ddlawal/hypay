import React, { FC, useState } from 'react'
import { Button } from '../../../components/Button'
import { Card } from '../../../components/Card'
import {
    ConnectIcon,
    FacebookIcon,
    InfoIcon,
    InstagramIcon,
    LoaderIcon,
    OpenLinkIcon,
    PaintIcon,
    PaymentCardIcon,
    QuestionMarkIcon,
    RoundedCheckIcon,
    TagIcon,
    TwitterIcon,
    VanIcon,
    WhatsAppIcon,
} from '../../../components/Icons'
import { PrimaryLayout } from '../../../components/Layout'
import { useMediaQuery } from '../../../hooks/useMediaQuery'
import { useAppSelector } from '../../../hooks/useStoreHooks'
import { COLORS } from '../../../lib/constants/colors'
import { loginUserData } from '../../../store/reducers/auth'
import { useLazyVerifyEmailQuery } from '../../../store/services/auth'
import { useSnackbar } from '../../../hooks/useSnackbar'
import { NextLink } from '../../../components/Links'

const quickGuides = [
    {
        icon: <PaintIcon color={COLORS.PINK} size={28} />,
        text: 'Choose a theme',
        link: '/dashboard/onlineStore',
    },
    {
        icon: <TagIcon color={COLORS.PINK} size={28} />,
        text: 'Adicionar um produto',
        link: '/dashboard/products/addProducts',
    },
    {
        icon: <PaymentCardIcon color={COLORS.PINK} size={28} />,
        text: 'Define Payment',
        link: '',
    },
    {
        icon: <VanIcon color={COLORS.PINK} size={28} />,
        text: 'Configure send medium',
        link: '',
    },
]

type SectionWrapperProps = { title?: string }

const SectionWrapper: FC<SectionWrapperProps> = ({ children, title }) => (
    <section className="mb-8">
        <span className="text-[1.3rem] font-semibold text-hypay-black">{title}</span>
        {children}
    </section>
)

export const EmailVerified = () => {
    const [show, setShow] = useState(true)

    setTimeout(() => setShow(false), 5000)

    return (
        <>
            {show ? (
                <div className="flex items-center rounded-lg border border-hypay-green bg-white px-5 py-2 transition-opacity">
                    <RoundedCheckIcon size={36} />
                    <span className="ml-2 text-sm leading-4">
                        Parabéns! Seu email foi verificado e você já pode começar a vender!
                    </span>
                </div>
            ) : null}
        </>
    )
}

const WelcomeToHypay: FC = () => {
    const [tryVerifyEmail, { isLoading }] = useLazyVerifyEmailQuery()
    const { email_verified } = useAppSelector(loginUserData)
    const { showSuccessSnackbar, showErrorSnackbar } = useSnackbar()
    const handleVerifyEmail = async () => {
        const res = await tryVerifyEmail('email')
        const { message } = (await res.data) as { message: string }
        if (!message) {
            return showErrorSnackbar('Não foi possível verificar seu email')
        }
        return showSuccessSnackbar(message)
    }

    return (
        <SectionWrapper>
            <div className="mb-3 text-2xl font-semibold text-hypay-black">Bem vindo ao Hypay</div>
            {email_verified ? (
                <EmailVerified />
            ) : (
                <Card rounded padding="py-3 md:px-3 px-10" className="md:flex md:justify-between" elevation="xl">
                    <div>
                        <div className="mb-2 flex items-center justify-center md:mb-0 md:items-start md:justify-start">
                            <InfoIcon color={COLORS.PINK} size={16} />
                            <span className="ml-2 text-lg font-medium md:text-sm">Verifique seu e-mail</span>
                        </div>
                        <div className="mb-2 ml-6 text-center text-sm text-hypay-black md:text-left md:text-[9px]">
                            Confirme sua conta no e-mail que enviamos para: seuemail@email.com
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <Button
                            primary
                            outlined
                            className="flex items-center justify-center py-4 px-10 text-center md:w-[110px] md:px-1 md:py-0.5 md:text-[11px]"
                            onClick={handleVerifyEmail}
                            disabled={isLoading}
                        >
                            {isLoading ? <LoaderIcon size={24} color={COLORS.RED} /> : 'Reenviar Email'}
                        </Button>
                    </div>
                </Card>
            )}
        </SectionWrapper>
    )
}

const QuickGuide = () => {
    return (
        <SectionWrapper title="Guia Rápido">
            <div className="hsb mt-3 flex gap-x-5 overflow-x-auto py-4">
                {quickGuides.map(({ icon, text, link }, i) => (
                    <NextLink key={`card${i}`} href={link} className="w-1/3 shrink-0 md:shrink">
                        <Card rounded elevation="xl" padding="py-2 px-3">
                            {icon}
                            <span className="text-sm capitalize md:text-base ">{text}</span>
                        </Card>
                    </NextLink>
                ))}
            </div>
        </SectionWrapper>
    )
}

const ConnectYourStore = () => (
    <SectionWrapper title="Conecte sua loja">
        <Card rounded padding="py-4 px-6 md:px-3 mt-3" elevation="xl" className="flex md:items-center">
            <div className="mr-4 md:mr-2">
                <InstagramIcon color={COLORS.PINK} size={24} />
            </div>
            <div className="w-full md:flex md:items-center md:justify-between">
                <div>
                    <div className="mb-7 md:mb-0">
                        <span className="text-lg leading-5 md:text-xs">Conecte seu insta/facebook para começar</span>
                    </div>
                    <div className="text-sm text-hypay-black md:text-[0.6rem]">Text here and hereaaa</div>
                </div>
                <div className="mt-8 flex items-center md:mt-0">
                    <Button primary className="py-4 px-10 capitalize md:w-[110px] md:px-1 md:py-0.5 md:text-[11px] ">
                        Vincular a conta
                    </Button>
                </div>
            </div>
        </Card>
        <Card rounded padding="py-4 px-6 md:px-3 mt-3" elevation="xl" className="flex md:items-center">
            <div className="mr-4 md:mr-2">
                <ConnectIcon color={COLORS.PINK} size={24} />
            </div>
            <div className="w-full md:flex md:items-center md:justify-between">
                <div>
                    <div className="mb-7 md:mb-0">
                        <span className="text-lg leading-5 md:text-xs">
                            Vincule seu próprio domínio ou altere o URL da sua loja.
                        </span>
                    </div>
                    <div className="text-sm text-hypay-black md:text-[0.6rem]">Text here and hereaaa</div>
                </div>
                <div className="mt-8 flex items-center md:mt-0">
                    <Button
                        primary
                        className="bg-hypay-orange py-4 px-10 capitalize md:w-[110px] md:px-1 md:py-0.5 md:text-[11px] "
                    >
                        Configurar domínio
                    </Button>
                </div>
            </div>
        </Card>
    </SectionWrapper>
)

const ShareYourStore = () => (
    <SectionWrapper title="Compartilhe sua loja">
        <Card rounded padding="py-5 px-10 mt-3" elevation="xl">
            <div className="mb-6 text-center leading-5 text-hypay-black">
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
        <button className="rounded-full p-2 transition duration-200 ease-in-out hover:scale-105 hover:shadow-sm ">
            <OpenLinkIcon size={isDesktop ? 20 : 14} color={COLORS.PINK} />
        </button>
    </div>
)

const Home = () => {
    const isDesktop = useMediaQuery('md')
    // const [emailVerified, setEmailVerified] = useState(false)
    // const verifyEmail = () => setEmailVerified(true)

    return (
        <PrimaryLayout>
            <div className="md:text-md flex items-center justify-center bg-hypay-green text-center text-xs leading-6 text-white">
                <div className="text-lg font-bold">Veja sua loja antes dela ser publicada</div>
                <button className="rounded-full p-2 transition duration-200 ease-in-out hover:scale-105 hover:shadow-sm">
                    <OpenLinkIcon size={isDesktop ? 18 : 12} color={COLORS.WHITE} />
                </button>
            </div>
            <div className="py-4 px-4 md:px-16 lg:px-36">
                <WelcomeToHypay />
                <QuickGuide />
                <ConnectYourStore />
                <ShareYourStore />
                <FootNote isDesktop />
            </div>
        </PrimaryLayout>
    )
}

export default Home
