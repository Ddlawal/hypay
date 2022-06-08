import React from 'react'
import { NextPage } from 'next'
import { BuyerLayout } from '../../../components/Layout'

const Confirmation: NextPage = () => {
    return (
        <BuyerLayout>
            <div className="mt-6 grid grid-cols-12 md:px-[10%]">
                <div className="col-span-12 px-4 md:col-span-8 md:px-0">Confirmation</div>
                <div className="col-span-12 px-4 md:col-span-4 md:px-0">Summary</div>
            </div>
        </BuyerLayout>
    )
}

export default Confirmation
