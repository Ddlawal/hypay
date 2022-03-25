import * as React from 'react'
import Image from 'next/image'
import { Button } from '../components/Button'
import { Logo } from '../components/Logo'
import { COLORS } from '../lib/constants/colors'

function login() {
    return (
        <main className="relative flex h-screen flex-col   bg-login-books bg-cover bg-center">
            <div className="hidden h-[70%] md:block"></div>
            <div className="absolute top-[0%] h-[100vh] w-[100vw] bg-white p-4  md:right-[50%] md:left-[50%] md:top-[5%] md:-mr-[50%] md:-ml-[10rem] md:h-[78%] md:w-[20rem] md:rounded-md md:shadow-md">
                <header className="text-center">
                    <Logo
                        // size={25}
                        color={COLORS.YELLOW}
                        labelColor="text-hypay-orange"
                        labelled={{ labelPosition: 'bottom' }}
                    />
                    <h2 className="mt-5 text-center text-2xl font-semibold md:mt-2">Login</h2>
                    <p className="mt-5 text-xs text-hypay-gray md:mt-3">Use seu email and senha abaixo</p>
                </header>
                <section className="mt-5">
                    <form>
                        <div className="">
                            <label htmlFor="email" className="mb-2 font-semibold">
                                Email
                            </label>
                            <div className="mt-1 rounded-md border-[1px] px-2 py-1">
                                <input
                                    type="email"
                                    className="border-none bg-transparent outline-none"
                                    placeholder="Enter your email"
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
                                    className="border-none bg-transparent outline-none"
                                    placeholder="Enter your password"
                                />
                            </div>
                            <p className="mt-2 text-right text-xs font-semibold text-hypay-orange">
                                Must contain at least 6 characters
                            </p>
                        </div>
                        <div className="mt-2 flex items-center  justify-center font-semibold">
                            <Button className={`${COLORS.PINK} w-[80%] `} primary>
                                Enter
                            </Button>
                        </div>
                    </form>
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
                    <p className="text-center text-sm text-hypay-gray">
                        Don't have an account?<span className="cursor-pointer pl-1 text-blue-500">Sign In</span>
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
