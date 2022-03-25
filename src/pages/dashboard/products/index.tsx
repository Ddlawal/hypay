import * as React from 'react'
import { NextPage } from 'next'
import { OpenLinkIcon } from '../../../components/Icons'
import { PrimaryLayout } from '../../../components/Layout'
import { COLORS } from '../../../lib/constants/colors'

const Products: NextPage = () => {
    return (
        <PrimaryLayout>
            <div className="flex items-center justify-center bg-hypay-green text-center leading-6 text-white">
                See your store before it is published
                <button className="rounded-full p-2 transition duration-200 ease-in-out hover:scale-105 hover:shadow-sm">
                    <OpenLinkIcon color={COLORS.WHITE} />
                </button>
            </div>
            <div>
                <strong>Welcome to Hypay</strong>
            </div>
        </PrimaryLayout>
    )
}
export default Products
