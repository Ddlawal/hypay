import React, { useState } from 'react'
import { NextPage } from 'next'
import Head from 'next/head'
import cx from 'classnames'

import { Logo } from '../../components/Logo'
import { COLORS } from '../../lib/constants/colors'
import { SecondInput } from '../../components/form'
import { Button } from '../../components/Button'
import { LoaderIcon } from '../../components/Icons'
import { useForm } from 'react-hook-form'
import { ResetPasswordRequestData } from '../../interfaces/auth'
import { useLazyResetPasswordByEmailQuery } from '../../store/services/auth'
import { useSnackbar } from '../../hooks/useSnackbar'
import { EMAIL_PATTERN } from '../../lib/data'

const ResetPasswordRequest: NextPage = () => {
    const {
        formState: { errors },
        handleSubmit,
        register,
        reset,
    } = useForm<ResetPasswordRequestData>()
    const [emailSent, setEmailSent] = useState(false)
    const { showSuccessSnackbar, showErrorSnackbar } = useSnackbar()
    const [resetPasswordByEmail, { isFetching, isLoading }] = useLazyResetPasswordByEmailQuery({
        refetchOnFocus: false,
        refetchOnReconnect: false,
    })

    const loading = isFetching || isLoading

    const onSubmit = async ({ email }: ResetPasswordRequestData) => {
        if (loading) {
            return
        }
        try {
            const res = await resetPasswordByEmail({ email }).unwrap()
            if (res.ResponseStatus) {
                setEmailSent(true)
                showSuccessSnackbar(res.message)
                reset()
            } else {
                showErrorSnackbar(res.message)
            }
        } catch (error) {
            showErrorSnackbar('Error! Failed to send password reset link')
            console.log(error)
        }
    }

    return (
        <>
            <Head>
                <title>Hypay / Reset Password</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="icon" type="image/x-icon" href="/images/hypayLogo.png"></link>
            </Head>
            <main className="relative flex h-screen flex-col bg-login-books bg-cover bg-center">
                <div className="hidden h-[70%] md:block"></div>
                <div className="absolute top-[0%] h-screen w-[100vw] bg-white py-2 px-4 md:right-[50%] md:left-[50%] md:top-[15%] md:-mr-[50%] md:-ml-[10rem] md:h-[30rem] md:w-[22rem] md:rounded-md md:shadow-md">
                    <header className="mt-6 text-center">
                        <Logo
                            color={COLORS.YELLOW}
                            labelColor="text-hypay-orange"
                            size={32}
                            labelled={{ labelPosition: 'bottom' }}
                        />
                        <h2 className="my-10 text-center text-2xl font-semibold md:my-6">Redefinir Senha</h2>
                        <p className={cx(emailSent ? 'text-center' : 'text-left', 'text-base text-hypay-gray md:mt-2')}>
                            {emailSent
                                ? 'Verifique seu e-mail para o link de redefinição de senha'
                                : 'Insira seu e-mail para redefinir sua senha'}
                        </p>
                    </header>
                    {emailSent ? null : (
                        <section className="mt-3">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                {/* password input field */}
                                <SecondInput
                                    name="email"
                                    errors={errors}
                                    register={register}
                                    validation={{
                                        required: true,
                                        pattern: {
                                            message: 'Invalid email address',
                                            value: EMAIL_PATTERN,
                                        },
                                    }}
                                    placeholder="Digite seu e-mail"
                                />
                                <div className="my-3 flex items-center justify-center font-semibold md:mt-2">
                                    <Button
                                        primary
                                        size="md"
                                        className="flex h-10 w-full items-center justify-center"
                                        padding="px-6 py-2"
                                    >
                                        {loading ? <LoaderIcon size={28} color={COLORS.WHITE} /> : 'Enviar'}
                                    </Button>
                                </div>
                            </form>
                        </section>
                    )}
                </div>
                <footer className="primary hidden h-[30%]  items-end justify-center bg-white pb-10 md:flex">
                    <div className="flex w-[60%] flex-wrap items-center justify-between border-hypay-gray pt-4 text-sm  text-hypay-gray md:border-t">
                        <p>Privacy Policy</p>
                        <p className=" md:order-3">Terms and Conditions</p>
                        <p className="mx-auto mt-4 font-normal md:order-2 md:mx-0 md:mt-0">
                            Copyright © {new Date().getFullYear()} - All Rights Reserved
                        </p>
                    </div>
                </footer>
            </main>
        </>
    )
}

export default ResetPasswordRequest
