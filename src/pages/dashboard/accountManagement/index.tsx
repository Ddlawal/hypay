import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Button } from '../../../components/Button'
import { Card } from '../../../components/Card'
import { SecondInput } from '../../../components/form'
import { InfoIcon } from '../../../components/Icons'
import { PrimaryLayout } from '../../../components/Layout'
import { COLORS } from '../../../lib/constants/colors'
import { EmailVerified } from '../home'

function AccountManagement() {
    const { register } = useForm()
    const [emailVerified, setEmailVerified] = useState(false)
    const verifyEmail = () => setEmailVerified(true)

    return (
        <PrimaryLayout>
            <div className="px-4 py-4 md:w-9/12 md:px-12">
                <header>
                    <h1 className="font-bold">Minha conta</h1>
                    {emailVerified ? (
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
                                    onClick={verifyEmail}
                                >
                                    Reenviar Email
                                </Button>
                            </div>
                        </Card>
                    )}
                </header>
                <form>
                    <h2 className="Font-bold">Informações pessoais</h2>
                    <div className="flex justify-center space-x-5">
                        <div className="w-6/12">
                            <SecondInput name="nome" label="Nome" register={register} />
                        </div>
                        <div className="w-6/12">
                            <SecondInput name="Sobrenome" label="Sobrenome" register={register} />
                        </div>
                    </div>
                    <div className="flex justify-center space-x-5">
                        <div className="w-6/12">
                            <SecondInput name="Telefone" label="Telefone" register={register} />
                        </div>
                        <div className="w-6/12">
                            <SecondInput name="Email" label="Email" register={register} />
                        </div>
                    </div>
                    <div className="">
                        <SecondInput name="CPF/CNPJ" label="CPF/CNPJ" register={register} />
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
                </form>
            </div>
        </PrimaryLayout>
    )
}

export default AccountManagement
