import React from 'react'
import { NextPage } from 'next'

import { BuyerLayout } from '../../../components/Layout'
import { PurchaseSummary } from '../../../components/PurchaseSummary'

const Checkout: NextPage = () => {
    return (
        <BuyerLayout>
            <div className="my-12 px-[33%]">
                <div className="mb-2 text-lg font-bold">Resumo da compra</div>
                <PurchaseSummary />
            </div>
        </BuyerLayout>
    )
}

export default Checkout
