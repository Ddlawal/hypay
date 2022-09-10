import React from 'react'
import { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'

import { Logo } from '../../components/Logo'
import { SecondInput } from '../../components/form'
import { COLORS } from '../../lib/constants/colors'
import { Button } from '../../components/Button'
import { AuthFormInputData } from '../../interfaces/auth'
import { useTwoFA } from '../../hooks/useTwoFA'
import { LoaderIcon } from '../../components/Icons'
import { login } from '../../store/reducers/auth'
import { useAppDispatch } from '../../hooks/useStoreHooks'
import {
    readCokie,
    removeCookie,
    showErrorSnackbar,
    showSuccessSnackbar,
    USER_PENDING_2FA_AUTH,
} from '../../lib/helper'

const TwoFAAuth: NextPage = () => {
    const {
        formState: { errors },
        handleSubmit,
        register,
    } = useForm<AuthFormInputData>()

    const dispatch = useAppDispatch()
    const { push } = useRouter()
    const { authenticateTwoFA, isAuthenticating } = useTwoFA()

    const onSubmit = async ({ code }: AuthFormInputData) => {
        if (isAuthenticating) {
            return
        }
        try {
            const res = await authenticateTwoFA({ code }).unwrap()
            if (res.success) {
                const payload = JSON.parse(readCokie(USER_PENDING_2FA_AUTH) as string)
                dispatch(login(payload))
                showSuccessSnackbar('Login Successful')
                removeCookie(USER_PENDING_2FA_AUTH)
                push('/dashboard/home')
            } else {
                showErrorSnackbar(res.message)
            }
        } catch (error) {
            showErrorSnackbar('Error! Failed to authenticate 2FA')
            console.log(error)
        }
    }

    return (
        <>
            <Head>
                <title>Hypay / 2FA</title>
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
                        <h2 className="my-10 text-center text-2xl font-semibold md:my-6">Two-factor Authentication</h2>
                        <p className="text-left text-base text-hypay-gray md:mt-2">Digite o código de autenticação</p>
                    </header>
                    <section className="mt-3">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            {/* password input field */}
                            <SecondInput
                                name="code"
                                errors={errors}
                                register={register}
                                validation={{ required: true, minLength: 6, maxLength: 6 }}
                                placeholder="Digite sua senha"
                            />
                            <div className="my-3 flex items-center justify-center font-semibold md:mt-2">
                                <Button
                                    primary
                                    size="md"
                                    className="flex h-10 w-full items-center justify-center"
                                    padding="px-6 py-2"
                                >
                                    {isAuthenticating ? <LoaderIcon size={28} color={COLORS.WHITE} /> : 'Autenticar'}
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

export default TwoFAAuth
