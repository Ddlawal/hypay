import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { PrimaryLayout } from '../../../../components/Layout'
import { Card } from '../../../../components/Card'
import { COLORS } from '../../../../lib/constants/colors'
import {
    CheckIcon,
    OpenLinkIcon,
    SettingsIcon,
    TransactionRecievedArrow,
    TransactionSentArrow,
} from '../../../../components/Icons'
import Image from 'next/image'
import mailbox from '../../../../../public/images/mailbox.png'
import Link from 'next/link'
import { trxnType } from '../../../../lib/data'
import { Button } from '../../../../components/Button'

const listOfBankAccount = [{ name: 'Banco Inter' }, { name: 'First Bank' }]

function Index() {
    const { push, back } = useRouter()
    return (
        <PrimaryLayout>
            <div className="px-4 py-4 md:w-full md:px-12">
                <header className="flex items-center justify-start gap-x-2  pb-3">
                    <CheckIcon color={COLORS.GREEN} size={24} />{' '}
                    <h1 className="text-3xl font-bold">Your withdrawal has been confirmed</h1>
                </header>
                <>
                    <section className="md:w-10/12 md:flex-nowrap md:gap-x-5">
                        {/* Withdrawall status */}
                        <p className="md:w-12/12 text-2xl font-bold text-hypay-pink">
                            Please wait for our email to confirm your receipt, <br /> The email and may take a few hours
                            to be received. The HyPay group thanks you for your patience.
                        </p>

                        <main className="mt-8 flex items-center justify-between  gap-x-6 md:w-9/12">
                            <Button primary className="px-5 font-bold">
                                <Link href="">
                                    <a onClick={() => push('/dashboard/bankAccount')}>Withdraw</a>
                                </Link>
                            </Button>

                            <Image src={mailbox} alt="flowery post main" />
                        </main>
                    </section>
                </>
            </div>
        </PrimaryLayout>
    )
}

export default Index
