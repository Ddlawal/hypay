import React from 'react'
import { NextPage } from 'next'

import { BuyerLayout } from '../../../components/Layout'
import { PurchaseSummary } from '../../../components/PurchaseSummary'
import { useRouter } from 'next/router'

const Checkout: NextPage = () => {
    const { push } = useRouter()

    const goToIdentification = () => push('/store/checkout/identification')

    return (
        <BuyerLayout>
            <div className="my-12 px-4 md:px-[33%]">
                <div className="mb-2 text-lg font-bold">Resumo da compra</div>
                <PurchaseSummary onSubmit={goToIdentification} />
            </div>
        </BuyerLayout>
    )
}

export default Checkout
