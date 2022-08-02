import React from 'react'
import { NextPage } from 'next'
import Head from 'next/head'

import { Logo } from '../../components/Logo'
import { COLORS } from '../../lib/constants/colors'
import { SecondInput } from '../../components/form'
import { Button } from '../../components/Button'
import { LoaderIcon } from '../../components/Icons'
import { useForm } from 'react-hook-form'
import { ResetPasswordConfirmData } from '../../interfaces/auth'
import { useLazyResetPasswordConfirmationQuery } from '../../store/services/auth'
import { useRouter } from 'next/router'
import { useSnackbar } from '../../hooks/useSnackbar'

const ResetPassword: NextPage<{ token: string }> = () => {
    const {
        formState: { errors },
        handleSubmit,
        register,
    } = useForm<Omit<ResetPasswordConfirmData, 'token'>>()
    const { push, query } = useRouter()
    const { showSuccessSnackbar, showErrorSnackbar } = useSnackbar()
    const [resetPassword, { isFetching, isLoading }] = useLazyResetPasswordConfirmationQuery({
        refetchOnFocus: false,
        refetchOnReconnect: false,
    })

    const loading = isFetching || isLoading

    const onSubmit = async ({ password, password_confirmation }: Omit<ResetPasswordConfirmData, 'token'>) => {
        if (password !== password_confirmation) {
            return showErrorSnackbar('Password mismatch!')
        }
        if (loading) {
            return
        }
        try {
            const res = await resetPassword({ password, password_confirmation, token: query.token as string }).unwrap()

            showSuccessSnackbar(res.Detail)
            push('/login')
        } catch (error) {
            showErrorSnackbar('Error! Failed to reset password!')
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
                        <h2 className="my-10 text-center text-2xl font-semibold md:my-6">Redefinição de Senha</h2>
                        <p className="text-left text-base text-hypay-gray md:mt-2">Digite sua nova senha</p>
                    </header>
                    <section className="mt-3">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <SecondInput
                                name="password"
                                type="password"
                                errors={errors}
                                register={register}
                                validation={{ required: true, minLength: 8 }}
                                placeholder="Nova senha"
                            />
                            <SecondInput
                                name="password_confirmation"
                                type="password"
                                errors={errors}
                                register={register}
                                validation={{ required: true, minLength: 8 }}
                                placeholder="Confirme a senha"
                            />
                            <div className="my-3 flex items-center justify-center font-semibold md:mt-2">
                                <Button
                                    primary
                                    size="md"
                                    className="flex h-10 w-full items-center justify-center"
                                    padding="px-6 py-2"
                                >
                                    {loading ? <LoaderIcon size={28} color={COLORS.WHITE} /> : 'Autenticar'}
                                </Button>
                            </div>
                        </form>
                    </section>
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

export default ResetPassword
