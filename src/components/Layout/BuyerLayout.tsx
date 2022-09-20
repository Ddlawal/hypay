import React, { FC, ReactNode } from 'react'
import { BuyersHeader } from '../Headers'
import { LoadingPage } from './LoadingPage'

type BuyerLayoutProps = {
    cartCount?: number
    children: ReactNode
    isLoading?: boolean
}

export const BuyerLayout: FC<BuyerLayoutProps> = ({ cartCount, children, isLoading }) => {
    return (
        <div>
            <BuyersHeader cartCount={cartCount} />
            <div>{isLoading ? <LoadingPage /> : children}</div>
        </div>
    )
}
