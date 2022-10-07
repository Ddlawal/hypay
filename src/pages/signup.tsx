import React, { useCallback, useEffect, useState } from 'react'
import { NextPage } from 'next'
import Head from 'next/head'
import { NextImage as Image } from '../components/Image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { signIn, useSession } from 'next-auth/react'
import { useForm, SubmitHandler, Controller, ControllerRenderProps, FieldError } from 'react-hook-form'

import AuthLayout from '../components/AuthLayout/AuthLayout'
import { Button } from '../components/Button'
import { COLORS } from '../lib/constants/colors'
import { SecondInput } from '../components/form'
import { useLoginWithGoogleMutation, useRegistrationMutation } from '../store/services/auth'
import { login } from '../store/reducers/auth'
import { EMAIL_PATTERN } from '../lib/data'
import { useDispatch } from 'react-redux'
import PasswordInput from '../components/form/PasswordInput'
import { login as loginUser } from '../store/reducers/auth'
import { AccountTypeValue, SignupAuth, SignupFormData, UserAuth } from '../interfaces/auth'
import { checkPhoneNumber, formatPhoneNumber, showErrorSnackbar, showSuccessSnackbar } from '../lib/helper'
import { SelectField } from '../components/Select'

const SignUp: NextPage = () => {
    const [index, setIndex] = useState(0)

    const { data: Session } = useSession()
    const { push, query } = useRouter()
    const dispatch = useDispatch()
    const [miniRegister, { isLoading }] = useRegistrationMutation()
    const [loginWithGoogle] = useLoginWithGoogleMutation()
    const {
        control,
        register,
        handleSubmit,
        formState: { errors },
        setValue,
    } = useForm<SignupFormData>()

    useEffect(() => {
        if (query['referal_code']) {
            setValue('referral_code', query['referal_code'] as string)
        }
    }, [query, setValue])

    const tryGoogleLogin = useCallback(async () => {
        try {
            if (Session) {
                const googleData = {
                    provider: Session.jwt.account?.provider,
                    name: Session.jwt.profile?.name,
                    email: Session.jwt.profile?.email,
                    phoneNo: '',
                    userProviderID: Session.jwt.account?.providerAccountId,
                    accountType: '',
                }

                loginWithGoogle(googleData)
                    .unwrap()
                    .then((payload: UserAuth) => {
                        showSuccessSnackbar('Login Successful')
                        localStorage.setItem('user', JSON.stringify(payload))
                        dispatch(loginUser(payload))
                        push('/dashboard/home')
                    })
                    .catch((err) => {
                        console.error('rejected', err)
                        showErrorSnackbar(err?.data?.error || 'There was an error while trying to log in')
                    })
            }
        } catch (error) {
            showErrorSnackbar('There was an error while trying to log in')
            console.log(error, 'there was an error while trying to log in')
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [Session, dispatch, push, loginWithGoogle])

    useEffect(() => {
        tryGoogleLogin()
    }, [Session, tryGoogleLogin])

    const onSubmit: SubmitHandler<SignupFormData> = async (data) => {
        if (isLoading) {
            return
        }

        data.phone = data.phone ? formatPhoneNumber(`${data.phone}`) : null
        data.accountType = (data.accountType as AccountTypeValue).value

        try {
            miniRegister(data as SignupAuth)
                .unwrap()
                .then((payload) => {
                    showSuccessSnackbar('Login Successful')
                    localStorage.setItem('user', JSON.stringify(payload))
                    dispatch(login(payload))
                    payload.userInfo.usertype === 'Buyer' ? push('/store') : push('/createstore')
                })
                .catch((error) => {
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
                            className="h-16"
                            errors={errors}
                            label="Full Name"
                            register={register}
                            validation={{ required: true }}
                            placeholder="Rafael Caduso"
                            type="text"
                        />

                        <Controller
                            name="accountType"
                            control={control}
                            rules={{ required: 'This field is required' }}
                            render={({ field }) => (
                                <>
                                    <SelectField<string | null, ControllerRenderProps<SignupFormData, 'accountType'>>
                                        field={field}
                                        options={[
                                            { label: 'Both', value: 'Both' },
                                            { label: 'Buyer', value: 'Buyer' },
                                            { label: 'Merchant', value: 'Merchant' },
                                        ]}
                                        name="accountType"
                                        label="Account Type"
                                        labelClassName="text-sm"
                                        placeholder="Buyer, Merchant or Both"
                                        value={null}
                                        onChange={(v) => console.log(v)}
                                    />
                                    <p className="text-sm text-red-600">
                                        {(errors.accountType as FieldError)?.message}
                                    </p>
                                </>
                            )}
                        />

                        <SecondInput
                            className="h-16"
                            name="phone"
                            errors={errors}
                            label="Phone Number"
                            register={register}
                            validation={{
                                required: false,
                                validate: (value: string) => checkPhoneNumber(value, 'en-NG'),
                            }}
                            placeholder="2348012345678"
                            type="tel"
                        />

                        <SecondInput
                            name="email"
                            className="h-16"
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

                        <PasswordInput
                            className="h-16"
                            errors={errors}
                            register={register}
                            validation={{ required: true, minLength: 6 }}
                        />

                        <SecondInput
                            className="h-16"
                            name="referral_code"
                            errors={errors}
                            label="Referral Code"
                            register={register}
                            placeholder="a123b12c"
                            type="text"
                            disabled
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
