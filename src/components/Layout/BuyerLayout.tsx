import React, { FC, ReactNode } from 'react'
import { BuyersHeader } from '../Headers'
import { LoadingPage } from './LoadingPage'

type BuyerLayoutProps = {
    children: ReactNode
    isLoading?: boolean
    isOwner?: boolean
}

export const BuyerLayout: FC<BuyerLayoutProps> = ({ children, isLoading, isOwner = false }) => {
    return (
        <div>
            <BuyersHeader isOwner={isOwner} />
            <div>{isLoading ? <LoadingPage /> : children}</div>
        </div>
    )
}
