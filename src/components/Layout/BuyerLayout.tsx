import React, { FC, ReactNode } from 'react'
import { BuyersHeader } from '../Headers'
import { LoadingPage } from './LoadingPage'

type BuyerLayoutProps = {
    children: ReactNode
    isLoading?: boolean
    showCart?: boolean
}

export const BuyerLayout: FC<BuyerLayoutProps> = ({ children, isLoading, showCart = false }) => {
    return (
        <div>
            <BuyersHeader showCart={showCart} />
            <div>{isLoading ? <LoadingPage /> : children}</div>
        </div>
    )
}
