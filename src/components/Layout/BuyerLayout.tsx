import React, { FC, ReactNode } from 'react'
import { BuyersHeader } from '../Headers'
import { LoadingPage } from './LoadingPage'

type BuyerLayoutProps = {
    children: ReactNode
    isLoading?: boolean
}

export const BuyerLayout: FC<BuyerLayoutProps> = ({ children, isLoading }) => {
    return (
        <div className="pb-8">
            <BuyersHeader />
            <div>{isLoading ? <LoadingPage /> : children}</div>
        </div>
    )
}
