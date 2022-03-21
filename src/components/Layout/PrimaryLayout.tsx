import React, { FC, ReactNode } from 'react'
import { SideNav } from '.'
import { LoggedInHeader } from '../Headers'

type PrimaryLayoutProps = {
    children: ReactNode
}

export const PrimaryLayout: FC<PrimaryLayoutProps> = ({ children }) => {
    return (
        <div className="flex">
            <SideNav />
            <div className="w-full">
                <LoggedInHeader />
                {children}
            </div>
        </div>
    )
}
