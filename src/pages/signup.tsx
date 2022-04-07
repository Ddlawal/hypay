import React, { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import { signIn, useSession } from 'next-auth/react'
import AuthLayout from '../components/AuthLayout/AuthLayout'
import { Button } from '../components/Button'
import { COLORS } from '../lib/constants/colors'
import { useRouter } from 'next/router'
import { useForm, SubmitHandler } from 'react-hook-form'
import { SecondInput } from '../components/form'
import { useLoginMutation, useLoginWithGoogleMutation, useRegistrationMutation } from '../store/services/auth'
import { login } from '../store/reducers/auth'
import Link from 'next/link'
import { EMAIL_PATTERN } from '../lib/data'
import { useDispatch } from 'react-redux'
import PasswordInput from '../components/form/PasswordInput'
import Head from 'next/head'
import { login as loginUser } from '../store/reducers/auth'
import { useSnackbar } from '../hooks/useSnackbar'

function SignUp() {
    const [index, setIndex] = useState(0)

    const { data: Session } = useSession()
    const { push, replace } = useRouter()
    const dispatch = useDispatch()
    const [miniRegister, { isLoading }] = useRegistrationMutation()
    const [loginWithGoogle] = useLoginWithGoogleMutation()
    const { showSuccessSnackbar, showErrorSnackbar } = useSnackbar()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<any>()

    const tryGoogleLogin = useCallback(async () => {
        try {
            if (Session) {
                const googleData = {
                    provider: Session?.jwt.token?.account?.provider,
                    name: Session.jwt.token?.profile?.name,
                    email: Session?.jwt?.token?.profile?.email,
                    phoneNo: '',
                    userProviderID: Session?.jwt.token.account?.providerAccountId,
                    accountType: '',
                }

                loginWithGoogle(googleData)
                    .unwrap()
                    .then((payload) => {
                        showSuccessSnackbar('Login Successful')
                        localStorage.setItem('user', JSON.stringify(payload))
                        dispatch(loginUser(payload))
                        replace('/dashboard/home')
                    })
                    .catch((err) => {
                        if (err.status == 400) {
                            console.error('rejected it got here', err.data.message.email[0])
                            showErrorSnackbar(err.data.message.email)
                        }
                    })
            }
        } catch (error) {
            showErrorSnackbar('There was an error while trying to log in')
            console.log(error, 'there was an error while trying to log in')
        }
    }, [Session, dispatch, replace])

    useEffect(() => {
        if (Session) {
            tryGoogleLogin()
        }
    }, [Session])

    const onSubmit: SubmitHandler<any> = async (data) => {
        if (isLoading) {
            return
        }
        try {
            miniRegister(data)
                .unwrap()
                .then((payload) => {
                    showSuccessSnackbar('Login Successful')
                    localStorage.setItem('user', JSON.stringify(payload))
                    dispatch(login(payload))
                    push('/createstore')
                })
                .catch((error: any) => {
                    if (error.status == 400) {
                        console.error('rejected it got here', error.data.message.email[0])
                        showErrorSnackbar(error.data.message.email)
                    } else {
                        showErrorSnackbar('Somethng went wrong, please try again')
                    }
                })
        } catch (error) {
            console.error('rejected', error)
            showErrorSnackbar('There was an error while trying to log in')
        }
    }

    return (
        <>
            <Head>
                <title>Hypay / Sign Up</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="icon" type="image/x-icon" href="/images/hypayLogo.png"></link>
            </Head>
            <AuthLayout
                title="Be part of our community"
                subtitle="Make your dream of opening your store come true and count on all the benefits we can offer!"
                index={index}
                changeIndex={() => {
                    if (index < 4) {
                        return setIndex((prev) => prev + 1)
                    } else {
                        return setIndex(0)
                    }
                }}
            >
                <div className="min-h-auto mx-auto h-auto w-10/12 max-w-[100%] overflow-x-hidden md:w-7/12 ">
                    <header className="mx-auto mt-10 w-8/12">
                        <h1 className="text-center text-[32px] font-bold text-black">Create Account</h1>
                        <div>
                            <p className="mt-5 text-center text-xs font-bold text-black md:mt-3">Or Register with</p>
                            <div className="my-2 flex items-center justify-center gap-3">
                                <Image
                                    src="/images/facebook-icon.png"
                                    alt="facebook icon"
                                    className="cursor-pointer"
                                    width="46"
                                    height="46"
                                />
                                <Image
                                    src="/images/google-icon.png"
                                    alt="google icon"
                                    className="cursor-pointer"
                                    width="46"
                                    height="46"
                                    onClick={() => signIn('google')}
                                    aria-label="Google Login"
                                />
                            </div>
                        </div>
                    </header>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <SecondInput
                            name="name"
                            errors={errors}
                            label="Full Name"
                            register={register}
                            validation={{ required: true }}
                            placeholder="Rafael Caduso"
                            type="text"
                        />
                        <SecondInput
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
                            placeholder="cardoso.rafael@anymail.com "
                            type="email"
                        />
                        {/* password input field */}
                        <PasswordInput
                            errors={errors}
                            register={register}
                            validation={{ required: true, minLength: 6 }}
                        />
                        <p className="my-3 text-center text-sm text-hypay-gray">
                            By continuing, you agree to the
                            <span className="cursor-pointer pl-1 text-blue-500">Terms and conditions</span>
                        </p>
                        <div className="mt-2 flex items-center justify-center font-semibold">
                            <Button className={`${COLORS.PINK} ${isLoading && 'opacity-7'} w-full md:w-[80%] `} primary>
                                {isLoading ? 'Registering...' : 'Register'}
                            </Button>
                        </div>
                        <div className="mx-auto my-3 w-full text-center">
                            <p>
                                Eu ja tenho uma conta
                                <Link href="/login">
                                    <a className="cursor-pointer pl-1 text-blue-500">Login</a>
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </AuthLayout>
        </>
    )
}

export default SignUp
