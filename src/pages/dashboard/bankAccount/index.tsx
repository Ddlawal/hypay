import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { PrimaryLayout } from '../../../components/Layout'
import { Card } from '../../../components/Card'
import { COLORS } from '../../../lib/constants/colors'
import { SettingsIcon, TransactionRecievedArrow, TransactionSentArrow } from '../../../components/Icons'
import Image from 'next/image'
import boyAndGirlImage from '../../../../public/images/boy-and-girl-image.png'
import Link from 'next/link'
import { trxnType } from '../../../lib/data'
import { Button } from '../../../components/Button'

const listOfBankAccount = [{ name: 'Banco Inter' }, { name: 'First Bank' }]

function Index() {
    return (
        <PrimaryLayout>
            <div className="px-4 py-4 md:w-full md:px-12">
                <header className="justify-venter flex items-center gap-x-6  pb-3">
                    <h1 className="text-3xl font-bold">Balance</h1>
                </header>
                <>
                    <Card padding="p-6" rounded className=" my-3 flex items-center justify-between">
                        <span className="text-hypay-gray">Your current balance is:</span>
                        <h1 className="flex items-baseline text-2xl font-bold text-hypay-green">
                            R$ 874.782.903, <span className="text-[16px]">54</span>
                        </h1>
                    </Card>

                    <section className="flex  items-start justify-between gap-x-3">
                        {!listOfBankAccount.length ? (
                            <div className="flex w-7/12 flex-col items-center justify-center">
                                <Image src={boyAndGirlImage} alt="boy and girl image" />

                                <h1 className="text-md my-3 w-9/12 px-2 text-center font-bold">
                                    You do not have a registered bank account, please add your account
                                </h1>
                            </div>
                        ) : (
                            <div className="w-full md:w-7/12">
                                {listOfBankAccount.map((bank, index) => (
                                    <Card
                                        key={index}
                                        rounded
                                        padding="py-2 px-4"
                                        className="my-4 flex items-center justify-between gap-x-5 p-3"
                                    >
                                        <div className="flex items-center gap-x-10">
                                            <input
                                                className="h-5 w-5 border pr-5 checked:border-black checked:bg-black"
                                                type="radio"
                                                name="checkingAccount"
                                                id="checkingAccount"
                                                value="checkingAccount"
                                            />
                                            <div>
                                                <p>{bank.name}</p>
                                                <p>
                                                    Account: 9999999-9 <span>Agência: 0001</span>
                                                </p>
                                                <p>
                                                    Name of Holder: <span>Rafael Crespo</span>
                                                </p>
                                            </div>
                                        </div>
                                        <div>
                                            <h1 className="text-6xl font-bold text-orange-500">Inter</h1>
                                        </div>
                                    </Card>
                                ))}
                            </div>
                        )}
                        <div className="w-5/12">
                            <Card padding="py-3 px-6" className="w-full shadow-xl" rounded>
                                <h1 className="text-xl font-bold text-hypay-secondary">History</h1>

                                <div className="flex flex-col items-start  justify-start">
                                    {trxnType.map((trx, index) => {
                                        return (
                                            <Card
                                                key={index}
                                                rounded
                                                padding="p-3"
                                                className="mx-auto my-1 flex w-full items-start justify-between gap-x-1 shadow-md"
                                            >
                                                <div className="rounded bg-hypay-light-gray p-2">
                                                    {trx.trxn === 'Withdrawal' ? (
                                                        <TransactionSentArrow />
                                                    ) : (
                                                        <TransactionRecievedArrow />
                                                    )}
                                                </div>
                                                <div>
                                                    <div className="font-bold text-hypay-secondary">{trx.name}</div>
                                                    <div className="text-sm text-hypay-gray">{trx.trxn}</div>
                                                </div>
                                                <div className="font-bold text-hypay-secondary">{trx.amount}</div>
                                            </Card>
                                        )
                                    })}
                                </div>
                            </Card>
                        </div>
                    </section>
                </>
                <div className="mt-2 flex w-full items-center justify-between md:w-7/12">
                    <Link href="/dashboard/bankAccount/addBankDetails">
                        <a className="mr-auto flex items-center gap-x-5 font-bold text-hypay-pink">
                            <SettingsIcon size={20} color={COLORS.PINK} />
                            Add Bank Account
                        </a>
                    </Link>

                    {listOfBankAccount.length && (
                        <Button primary className="px-5 font-bold">
                            <Link href="/dashboard/bankAccount/withdraw">
                                <a>WIthdraw</a>
                            </Link>
                        </Button>
                    )}
                </div>
            </div>
        </PrimaryLayout>
    )
}

export default Index
