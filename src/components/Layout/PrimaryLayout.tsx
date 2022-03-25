import React, { FC, ReactNode } from 'react'
import { SideNav } from '.'
import { useMediaQuery } from '../../hooks/useMediaQuery'
import { MobileFooter } from '../Footer/MobileFooter'
import { LoggedInHeader } from '../Headers'

type PrimaryLayoutProps = {
    children: ReactNode
}

export const PrimaryLayout: FC<PrimaryLayoutProps> = ({ children }) => {
    const isDesktop = useMediaQuery('md')
    return (
        <div className="flex">
            {isDesktop && <SideNav />}
            <div className="w-full">
                <LoggedInHeader />
                <div className="my-[4.6rem]">{children}</div>
                {!isDesktop && <MobileFooter />}
            </div>
        </div>
    )
}
