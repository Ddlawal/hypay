import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import { NextImage as Image } from '../../../../components/Image'
import { LeftArrowIcon } from '../../../../components/Icons'
import { PrimaryLayout } from '../../../../components/Layout'
import { Card } from '../../../../components/Card'
import phoneAuth from '../../../../../public/images/phoneAuth.png'
import smsAuth from '../../../../../public/images/smsAuth.png'

function Index() {
    const { back } = useRouter()
    return (
        <PrimaryLayout>
            <div className="px-4 py-4 md:w-9/12 md:px-12">
                <header className="justify-venter flex items-center gap-x-6  pb-3">
                    <span onClick={() => back()}>
                        <LeftArrowIcon />{' '}
                    </span>
                    <h1 className="text-3xl font-bold">Autenticação em duas etapas</h1>
                </header>

                <section className="mt-10">
                    <Card className="itmes-center my-3 flex gap-x-3" rounded>
                        <Image src={phoneAuth} alt="Phone auth type" height={60} width={48} />
                        <Link href="/dashboard/accountManagement/authType/authViaApp">
                            <a className="p-3 text-2xl text-hypay-pink">Autenticação via App</a>
                        </Link>
                    </Card>
                    <Card className="itmes-center my-3 flex gap-x-3" rounded>
                        <Image src={smsAuth} alt="Phone auth type" height={60} width={60} />
                        <Link href="/dashboard/accountManagement/authType/authViaSms">
                            <a className="p-3 text-2xl text-hypay-pink">Autenticação via SMS</a>
                        </Link>
                    </Card>
                </section>
            </div>
        </PrimaryLayout>
    )
}

export default Index
