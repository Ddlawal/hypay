import React from 'react'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'

import { EmailVerified } from '../home'
import { Button } from '../../../components/Button'
import { Card } from '../../../components/Card'
import { SecondInput } from '../../../components/form'
import { InfoIcon, LoaderIcon, ShieldIcon } from '../../../components/Icons'
import { PrimaryLayout } from '../../../components/Layout'
import { COLORS } from '../../../lib/constants/colors'
import chromeIcon from '../../../../public/images/chromeIcon.png'
import operaIcon from '../../../../public/images/operaIcon.png'
import safariIcon from '../../../../public/images/safariIcon.png'
import { PhotographBox } from '../../../components/CreateAStore/AddAProduct'
import { useLazyVerifyEmailQuery } from '../../../store/services/auth'
import { useAppSelector } from '../../../hooks/useStoreHooks'
import { loginUserData } from '../../../store/reducers/auth'
import { useSnackbar } from '../../../hooks/useSnackbar'

interface ActiveBrowser {
    icon: StaticImageData
    name: string
}

export const ListOfActiveBrowsers: Array<ActiveBrowser> = [
    { icon: chromeIcon, name: 'Chrome' },
    { icon: operaIcon, name: 'Opera' },
    { icon: safariIcon, name: 'Safari' },
]

function AccountManagement() {
    const { register } = useForm()
    const { push } = useRouter()
    const [tryVerifyEmail, { isLoading }] = useLazyVerifyEmailQuery()
    const user = useAppSelector(loginUserData)
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
        <PrimaryLayout>
            <div className="px-4 py-4 md:w-9/12 md:px-12">
                <header>
                    <h1 className="font-bold">Minha conta</h1>
                    {user.email_verified ? (
                        <EmailVerified />
                    ) : (
                        <Card
                            rounded
                            padding="py-3 md:px-3  px-10"
                            className="my-3 md:flex md:justify-between"
                            elevation="xl"
                        >
                            <div className="text-hypay-pink">
                                <div className="mb-2 flex items-center justify-center  md:mb-0 md:items-start md:justify-start">
                                    <InfoIcon color={COLORS.PINK} size={16} />
                                    <span className="ml-2 text-lg font-medium md:text-sm">Verifique seu e-mail</span>
                                </div>
                                <div className="mb-2 ml-6 text-center text-sm text-hypay-pink md:text-left md:text-[9px]">
                                    Confirme sua conta no e-mail que enviamos para: seuemail@email.com
                                </div>
                            </div>
                            <div className="flex items-center justify-center">
                                <Button
                                    primary
                                    outlined
                                    className="py-4 px-10 md:w-[110px] md:px-1 md:py-0.5 md:text-[11px]"
                                    onClick={handleVerifyEmail}
                                    disabled={isLoading}
                                >
                                    {isLoading ? <LoaderIcon size={24} color={COLORS.RED} /> : 'Reenviar Email'}
                                </Button>
                            </div>
                        </Card>
                    )}
                </header>
                <form onSubmit={(e) => e.preventDefault()}>
                    <h2 className="mb-3 text-xl font-bold">Informações pessoais</h2>
                    <div className="flex justify-center space-x-5">
                        <div className="w-6/12">
                            <SecondInput name="nome" label="Nome" register={register} defaultValue={user.firstName} />
                        </div>
                        <div className="w-6/12">
                            <SecondInput
                                name="Sobrenome"
                                label="Sobrenome"
                                register={register}
                                defaultValue={user.lastName}
                            />
                        </div>
                    </div>
                    <div className="flex justify-center space-x-5">
                        <div className="w-6/12">
                            <SecondInput
                                name="Telefone"
                                label="Telefone"
                                register={register}
                                defaultValue={user.phone}
                            />
                        </div>
                        <div className="w-6/12">
                            <SecondInput name="Email" label="Email" register={register} defaultValue={user.email} />
                        </div>
                    </div>
                    <div className="">
                        <SecondInput name="CPF/CNPJ" label="CPF/CNPJ" register={register} />
                    </div>

                    {/* Photo section goes below */}
                    <h4 className="my-2 text-xl font-bold">Fotos</h4>
                    <div className="flex items-center justify-between gap-x-3 overflow-x-auto py-2">
                        <PhotographBox index={1} />
                    </div>

                    <h2 className="text-md font-bold">Segurança</h2>
                    <div className="flex justify-center space-x-5">
                        <div className="w-6/12">
                            <SecondInput name="Senha" label="Senha" register={register} />
                        </div>
                        <div className="w-6/12">
                            <SecondInput name="Confirmarsenha" label="Confirmar senha" register={register} />
                        </div>
                    </div>
                    {/* 2FA Section 3 */}
                    <div className="w-6/12">
                        <h2 className="text-md mb-3 font-bold">Autenticação em duas etapas</h2>

                        <Card className="p-2 text-xs" rounded>
                            <p>Após inserir a senha, verifique sua identidade com um segundo método de autenticação.</p>
                            <br />
                            <div className="flex items-start gap-x-2">
                                <ShieldIcon />
                                <p className="w-11/12">
                                    A autenticação em duas etapas adiciona uma camada de segurança a sua conta ao usar
                                    mais do que a senha para permitir o login
                                </p>
                            </div>
                            <h3 className="mt-2 text-xs font-bold">COMO FUNCIONA</h3>
                            <p className="text-xs">
                                Ao fazer login na Hypay, você precisa:
                                <br /> <br /> 1-Digite seu e-mail e senha <br /> 2-Complete a segunda etapa para provar
                                que é você quem está fazendo login. É possível inserir um código de verificação, uma
                                chave de segurança, ou confirmar seu login em um dispositivo confiável.
                            </p>
                            <div className="grid items-center">
                                <Button
                                    className="mx-auto mb-3 mt-5 border border-hypay-secondary px-5 font-bold text-hypay-secondary"
                                    size="md"
                                    onClick={() => {
                                        push('/dashboard/accountManagement/authType')
                                    }}
                                >
                                    Ativar duas etapas
                                </Button>
                            </div>
                        </Card>
                        <div className="my-3">
                            <h2 className="pb-3 text-2xl font-bold">Dispositivos</h2>

                            {ListOfActiveBrowsers.map(({ icon, name }, index) => (
                                <div key={index} className="my-5 flex items-start gap-x-3">
                                    <div className="pt-1">
                                        <Image src={icon} alt="chrome logo" />{' '}
                                    </div>
                                    <div>
                                        <p className="">{name} em Windows</p>

                                        <p>21 de jan 11:57</p>
                                        <p>Recife, Pernambuco, Brazil</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex h-10 w-full justify-start gap-x-20  md:pl-20">
                        <Button className="font-bold text-hypay-secondary">Cancelar</Button>
                        <Button padding="px-10" primary className="font-bold">
                            Salvar
                        </Button>
                    </div>
                </form>
            </div>
        </PrimaryLayout>
    )
}

export default AccountManagement
