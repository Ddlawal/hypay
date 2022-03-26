import React, { useEffect } from 'react'
import Image from 'next/image'
import { Button } from '../components/Button'
import { Logo } from '../components/Logo'
import { COLORS } from '../lib/constants/colors'
import { useLoginMutation } from '../services/auth'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import { login as loginUser } from '../reducers/auth'
import { useDispatch } from 'react-redux'
import Link from 'next/link'
import { SecondInput } from '../components/form'
import { EMAIL_PATTERN } from '../lib/data'
import { wrapper } from '../store'
import PasswordInput from '../components/form/PasswordInput'

export const getServerSideProps = wrapper.getServerSideProps(({ getState }) => async ({ resolvedUrl, ...rest }) => {
    if (typeof window !== undefined) {
        const { auth } = getState()
        console.log(getState(), 'check am out')
    }
    return { props: { resolvedUrl } }
})

function login(props: any) {
    const [useLogin, { isLoading }] = useLoginMutation()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<any>()

    const { push } = useRouter()
    const dispatch = useDispatch()

    const onSubmit = async (data: any) => {
        // if (isLoading) return
        try {
            console.log(data)
            useLogin(data)
                .unwrap()
                .then((payload: any) => {
                    localStorage.setItem('user', JSON.stringify(payload))
                    dispatch(loginUser(payload))
                    push('/createstore')
                })
                .catch((error: any) => {
                    console.error('rejected', error)
                    alert(error)
                })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <main className="relative flex h-screen flex-col   bg-login-books bg-cover bg-center">
            <div className="hidden h-[70%] md:block"></div>
            <div className="absolute top-[0%] h-[100vh] w-[100vw] bg-white p-4  md:right-[50%] md:left-[50%] md:top-[5%] md:-mr-[50%] md:-ml-[10rem] md:h-[78%] md:w-[20rem] md:rounded-md md:shadow-md">
                <header className="text-center">
                    <Logo color={COLORS.YELLOW} labelColor="text-hypay-orange" labelled={{ labelPosition: 'bottom' }} />
                    <h2 className="my-10 text-center text-2xl font-semibold md:my-4">Login</h2>
                    <p className=" text-xs text-hypay-gray md:mt-3">Use seu email and senha abaixo</p>
                </header>
                <section className="mt-5">
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
                        <div className="my-6  flex items-center justify-center  font-semibold md:mt-2">
                            <Button className={`${COLORS.PINK} ${isLoading && 'opacity-7'} w-full md:w-[80%] `} primary>
                                {isLoading ? 'loading...' : 'Entrar'}
                            </Button>
                        </div>
                    </form>
                    <div className="my-6 flex items-center justify-center gap-3 md:my-2">
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
                        />
                    </div>
                    <p className="text-center text-sm text-hypay-gray">
                        Don't have an account?
                        <Link href="/signup">
                            <a className="cursor-pointer pl-1 text-blue-500">Sign In</a>
                        </Link>
                    </p>
                </section>
            </div>
            <footer className="primary hidden h-[30%]  items-end justify-center bg-white pb-10 md:flex">
                <div className="flex w-[60%] flex-wrap items-center justify-between border-hypay-gray pt-4 text-sm  text-hypay-gray md:border-t">
                    <p>Privacy Policy</p>
                    <p className="  md:order-3 ">Terms and Conditions</p>
                    <p className=" mx-auto mt-4 font-normal md:order-2 md:mx-0 md:mt-0">
                        Copyright © {new Date().getFullYear()} - All Rights Reserved
                    </p>
                </div>
            </footer>
        </main>
    )
}

export default login
