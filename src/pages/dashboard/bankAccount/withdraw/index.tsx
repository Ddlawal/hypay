import React from 'react'
import Link from 'next/link'

import { NextImage as Image } from '../../../../components/Image'
import { PrimaryLayout } from '../../../../components/Layout'
import { Card } from '../../../../components/Card'
import { COLORS } from '../../../../lib/constants/colors'
import { OpenLinkIcon } from '../../../../components/Icons'
import wallet from '../../../../../public/images/wallet.png'
import { Button } from '../../../../components/Button'

function Index() {
    return (
        <PrimaryLayout>
            <div className="px-4 py-4 md:w-full md:px-12">
                <header className="justify-venter flex items-center gap-x-6  pb-3">
                    <h1 className="text-3xl font-bold">Drawing</h1>
                </header>
                <>
                    <section className="flex flex-wrap items-start justify-between md:flex-nowrap md:gap-x-5">
                        {/* How would you like to withdraw */}
                        <div className="mb-5 flex w-full flex-col items-start justify-between md:mb-0 md:w-1/2">
                            <h1 className="text-xl font-bold">How much would you like to withdraw?</h1>

                            <Card className="my-3 w-full text-hypay-green" rounded padding="p-3">
                                <h1>R$ 874.782.903,54</h1>
                            </Card>
                            {/* Withdraw concfirmation button */}
                            <Button primary className="ml-auto px-5 font-bold">
                                <Link href="/dashboard/bankAccount/confirmWithdraw">
                                    <a>WIthdraw</a>
                                </Link>
                            </Button>
                            {/* Image section */}
                            <div className="mx-auto pt-16">
                                <Image className="mx-auto pt-10" src={wallet} alt="wallet picture" />
                            </div>
                        </div>
                        {/* The reciept table section */}
                        <div className="items center flex w-full justify-between md:w-1/2">
                            <Card rounded className="w-full px-10 py-4 text-hypay-gray shadow-md">
                                {/* Date sectiion */}
                                <div className="mb-4 flex items-start justify-between">
                                    <div className="w-8/12 ">
                                        <p className="w-5/12 border-b border-black">Last 7 days</p>
                                        <p className="">Desde 16/02/2022 - Hoje</p>
                                    </div>
                                    <div className="">
                                        <OpenLinkIcon size={22} color={COLORS.PINK} />
                                    </div>
                                </div>
                                {/* Table Header section */}
                                <div className="border-gray my-2 flex items-center justify-between border-b-2 text-left  font-bold">
                                    <div className="w-4/12">Day</div>
                                    <div className="w-4/12">Bank</div>
                                    <div className="w-4/12 text-right">VALUE (BR$)</div>
                                </div>
                                <section>
                                    {Array(9)
                                        .fill(' ')
                                        .map((item, index) => (
                                            <div
                                                key={index}
                                                className=" my-3 flex items-center justify-between text-left"
                                            >
                                                <div className="w-4/12">16/02/2022</div>
                                                <div className="w-4/12">PAYPAL</div>
                                                <div className="w-4/12 text-right">150.000,00</div>
                                            </div>
                                        ))}
                                </section>
                                <footer className="flex items-center justify-between border-t-2 border-black pt-3 text-xl font-semibold">
                                    <h5>All</h5>
                                    <h5>1.050.000</h5>
                                </footer>
                            </Card>
                        </div>
                    </section>
                </>
                {/* <div className="mt-2 flex w-full items-center justify-between md:w-7/12">
                    <Link href="/dashboard/bankAccount/addBankDetails">
                        <a className="mr-auto flex items-center gap-x-5 font-bold text-hypay-pink">
                            <SettingsIcon size={20} color={COLORS.PINK} />
                            Add Bank Account
                        </a>
                    </Link>

                    {listOfBankAccount.length && (
                        <Button primary className="px-5 font-bold">
                            <Link href="/dashboard/bankAccount/addBankDetails">
                                <a>WIthdraw</a>
                            </Link>
                        </Button>
                    )}
                </div> */}
            </div>
        </PrimaryLayout>
    )
}

export default Index
