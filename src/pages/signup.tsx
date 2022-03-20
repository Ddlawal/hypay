import Image from 'next/image'
import { useState } from 'react'
import AuthLayout from '../components/AuthLayout/AuthLayout'
import { Button } from '../components/Button'
import { COLORS } from '../lib/constants/colors'

function SignUp() {
    const [index, setIndex] = useState(0)
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
            <div className="mx-auto w-7/12 ">
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
                <form>
                    <div className="">
                        <label htmlFor="fullname" className="mb-2 font-semibold">
                            Full Name
                        </label>
                        <div id="fullname" className="mt-1 rounded-md border-[1px] px-2 py-1">
                            <input
                                type="text"
                                className="w-full border-none bg-transparent outline-none"
                                placeholder="Rafael Caduso"
                            />
                        </div>
                    </div>
                    <div className="">
                        <label htmlFor="email" className="mb-2 font-semibold">
                            Email
                        </label>
                        <div id="email" className="mt-1  rounded-md border-[1px] px-2 py-1">
                            <input
                                type="email"
                                className="w-full border-none bg-transparent outline-none"
                                placeholder="cardoso.rafael@anymail.com "
                            />
                        </div>
                    </div>
                    {/* password input field */}
                    <div className="">
                        <label htmlFor="email" className="mt-3 flex font-semibold">
                            <div className="flex w-full items-baseline justify-between">
                                <p>Password</p>
                                <p className="text-xs text-hypay-gray">Forgotten your password?</p>
                            </div>
                        </label>
                        <div className="mt-1 rounded-md border-[1px] px-2 py-1">
                            <input
                                type="password"
                                className="w-full border-none bg-transparent outline-none"
                                placeholder="6 characters and above"
                            />
                        </div>
                        <p className="mt-2 text-right text-xs font-semibold text-hypay-orange">
                            Must contain at least 6 characters
                        </p>
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
