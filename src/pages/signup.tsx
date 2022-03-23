import Image from 'next/image'
import { useState } from 'react'
import AuthLayout from '../components/AuthLayout/AuthLayout'
import { Button } from '../components/Button'
import { COLORS } from '../lib/constants/colors'
import { useRouter } from 'next/router'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import { SecondInput } from '../components/form'
import { CloseEye } from '../components/Icons/CloseEye'
import { useMiniRegistrationMutation } from '../services/auth'
import { updateLogin } from '../reducers/auth'
import { useAppDispatch } from '../hooks/useStoreHooks'

const EMAIL_PATTERN =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

function SignUp() {
    const [index, setIndex] = useState(0)
    const [passwordType, setPasswordType] = useState(false)
    const { push } = useRouter()
    const dispatch = useAppDispatch()
    const [miniRegister, { status }] = useMiniRegistrationMutation()

    console.log(status, 'status of mini registration')

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<any>()
    const onSubmit: SubmitHandler<any> = (data) => {
        dispatch(updateLogin(data))
        miniRegister(data)
        console.log(data, 'data')
    }

    return (
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
            <div className="min-h-auto mx-auto h-auto w-7/12 max-w-[100%] overflow-x-hidden ">
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
                            />
                        </div>
                    </div>
                </header>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <SecondInput
                        name="fullname"
                        errors={errors}
                        label="Full Name"
                        register={register}
                        validation={{ required: true }}
                        placeholder="Rafael Caduso"
                        type="text"
                    />
                    <SecondInput
                        name="emai;"
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
                    {/* <Input
                        name="password"
                        rightLabel
                        errors={errors}
                        label="Password"
                        register={register}
                        validation={{ required: true, minLength: 6 }}
                        placeholder="6 characters and above"
                        type={passwordType ? 'text' : 'password'}
                        icon={
                            <CloseEye
                                onClick={() => {
                                    setPasswordType(!passwordType)
                                }}
                            />
                        }
                    /> */}

                    <div className="">
                        <label htmlFor="email" className="mt-3 flex font-semibold">
                            <div className="flex w-full items-baseline justify-between">
                                <p>Password</p>
                                <p className="text-xs text-hypay-gray">Forgotten your password?</p>
                            </div>
                        </label>
                        <div
                            className={`mt-1 flex items-center justify-between gap-2 rounded-md border-[1px] ${
                                errors['email']?.type ? 'border-red-600' : 'border-hypay-gray'
                            } px-2 py-1`}
                        >
                            <input
                                type={passwordType ? 'text' : 'password'}
                                {...register('password', { required: true, minLength: 6 })}
                                className="w-full border-none bg-transparent outline-none"
                                placeholder="6 characters and above"
                            />
                            <CloseEye
                                onClick={() => {
                                    setPasswordType(!passwordType)
                                }}
                            />
                        </div>

                        {errors.password ? (
                            errors.password.type == 'minLength' ? (
                                <p className="mt-2 text-right text-xs font-semibold text-hypay-orange">
                                    Must contain at least 6 characters
                                </p>
                            ) : (
                                <p className="text-sm text-red-600">This field is required!</p>
                            )
                        ) : (
                            ''
                        )}
                    </div>
                    <p className="my-3 text-center text-sm text-hypay-gray">
                        By continuing, you agree to the
                        <span className="cursor-pointer pl-1 text-blue-500">Terms and conditions</span>
                    </p>
                    <div className="mt-2 flex items-center  justify-center font-semibold">
                        <Button className={`${COLORS.PINK} w-[80%] `} primary>
                            Register
                        </Button>
                    </div>
                </form>
            </div>
        </AuthLayout>
    )
}

export default SignUp
