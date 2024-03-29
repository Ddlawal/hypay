import React, { useCallback, useEffect, useLayoutEffect, useState } from 'react'
import { NextImage as Image } from '../components/Image'
import { NextPage } from 'next'
import { signIn, useSession } from 'next-auth/react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'

import { Button } from '../components/Button'
import { Logo } from '../components/Logo'
import { COLORS } from '../lib/constants/colors'
import { useLoginMutation, useLoginWithGoogleMutation } from '../store/services/auth'
import { login as loginUser } from '../store/reducers/auth'
import { SecondInput } from '../components/form'
import { EMAIL_PATTERN } from '../lib/data'
import PasswordInput from '../components/form/PasswordInput'
import { useAppDispatch } from '../hooks/useStoreHooks'
import { LoaderIcon } from '../components/Icons'
import { LoadingPage } from '../components/Layout/LoadingPage'
import { GoogleLoginData, UserAuth } from '../interfaces/auth'
import { removeCookie, setCookie, showErrorSnackbar, showSuccessSnackbar, USER_PENDING_2FA_AUTH } from '../lib/helper'

type FormData = { email: string; password: string }

const Login: NextPage = () => {
    const [loginWithGoogle] = useLoginWithGoogleMutation()
    const [logUserIn, { isLoading }] = useLoginMutation()
    const { push } = useRouter()
    const dispatch = useAppDispatch()
    const { data: Session, status } = useSession()
    const [isSocialLoading, setIsSocialLoading] = useState(false)

    useLayoutEffect(() => {
        if (status === 'unauthenticated') {
            return setIsSocialLoading(false)
        }
        setIsSocialLoading(true)
    }, [status])

    const authenticateUser = (payload: UserAuth) => {
        if (payload.userInfo.google2fa_enabled) {
            setCookie(USER_PENDING_2FA_AUTH, JSON.stringify(payload))
            push('/2fa/auth')
        } else {
            dispatch(loginUser(payload))
            removeCookie(USER_PENDING_2FA_AUTH)
            showSuccessSnackbar('Login Successful')
            const merchantCode = localStorage.getItem('merchantCode')
            payload.userInfo.usertype === 'Buyer' ? push(`/store/${merchantCode}`) : push('/dashboard/home')
        }
    }

    const tryGoogleLogin = useCallback(async () => {
        try {
            if (Session) {
                const googleData: GoogleLoginData = {
                    provider: Session.jwt.account?.provider,
                    name: Session.jwt.profile?.name,
                    email: Session.jwt.profile?.email,
                    phoneNo: '',
                    userProviderID: Session.jwt.account?.providerAccountId,
                    accountType: '',
                }

                const payload = await loginWithGoogle(googleData).unwrap()

                authenticateUser(payload)
            }
        } catch (error: any) {
            showErrorSnackbar(error?.data?.error || 'There was an error while trying to log in')
            console.log(error, 'there was an error while trying to log in')
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [Session, loginWithGoogle, dispatch, push])

    useEffect(() => {
        tryGoogleLogin()
    }, [Session, tryGoogleLogin])

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>()

    const onSubmit = async (data: FormData) => {
        if (isLoading) {
            return
        }

        try {
            const payload = await logUserIn(data).unwrap()

            authenticateUser(payload)
        } catch (error: any) {
            console.log(error, error.status)
            if (error?.status == 'FETCH_ERROR') {
                return showErrorSnackbar('Something is wrong with your network connection. Please try again')
            }
            showErrorSnackbar(error?.data?.error || 'There was an error while trying to log in, please try again')
        }
    }

    if (isSocialLoading) {
        return <LoadingPage />
    }

    return (
        <>
            <Head>
                <title>Hypay / Login</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="icon" type="image/x-icon" href="/images/hypayLogo.png"></link>
            </Head>
            <main className="relative flex h-screen flex-col bg-login-books bg-cover bg-center">
                <div className="hidden h-[70%] md:block"></div>
                <div className="absolute top-[0%] h-[100vh] w-[100vw] bg-white py-2 px-4 md:right-[50%] md:left-[50%] md:top-[5%] md:-mr-[50%] md:-ml-[10rem] md:h-[78%] md:w-[20rem] md:rounded-md md:shadow-md">
                    <header className="text-center">
                        <Logo
                            color={COLORS.YELLOW}
                            labelColor="text-hypay-orange"
                            labelled={{ labelPosition: 'bottom' }}
                        />
                        <h2 className="my-10 text-center text-2xl font-semibold md:my-2">Login</h2>
                        <p className="text-xs text-hypay-gray md:mt-2">Use seu email and senha abaixo</p>
                    </header>
                    <section className="mt-3">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <SecondInput
                                className="my-6 md:my-0"
                                name="email"
                                errors={errors}
                                label="Email"
                                register={register}
                                validation={{
                                    required: true,
                                    pattern: {
                                        message: 'invalid email address',
                                        value: EMAIL_PATTERN,
                                    },
                                }}
                                placeholder="Digite seu email"
                                type="email"
                            />
                            {/* password input field */}
                            <PasswordInput
                                errors={errors}
                                register={register}
                                validation={{ required: true, minLength: 6 }}
                                placeholder="Digite sua senha"
                            />
                            <div className="my-3 flex items-center justify-center font-semibold md:mt-2">
                                <Button
                                    className={`${COLORS.PINK} ${
                                        isLoading && 'opacity-7'
                                    } w-full text-center md:w-[80%]`}
                                    primary
                                >
                                    {isLoading ? (
                                        <div className="flex items-center justify-center">
                                            <LoaderIcon size={24} color={COLORS.WHITE} />
                                        </div>
                                    ) : (
                                        'Entrar'
                                    )}
                                </Button>
                            </div>
                        </form>
                        <div className="my-3 flex items-center justify-center gap-3 md:my-0">
                            <Image
                                src="/images/facebook-icon.png"
                                alt="facebook icon"
                                className="cursor-pointer"
                                width="46"
                                height="46"
                                // onClick={}
                            />
                            <Image
                                src="/images/google-icon.png"
                                alt="google icon"
                                className="cursor-pointer"
                                width="46"
                                height="46"
                                onClick={() => signIn('google')}
                            />
                        </div>
                        <p className="text-center text-sm text-hypay-gray">
                            Don't have an account?
                            <Link href="/signup">
                                <a className="cursor-pointer pl-1 text-blue-500">Sign Up</a>
                            </Link>
                        </p>
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

export default Login
