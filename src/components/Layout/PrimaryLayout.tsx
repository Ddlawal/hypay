import classNames from 'classnames'
import React, { FC, ReactNode, useLayoutEffect, useState } from 'react'
import { SideNav } from '.'
import { useMediaQuery } from '../../hooks/useMediaQuery'
import { SIDE_NAV_WIDTH } from '../../lib/constants/elements'
import { MobileFooter } from '../Footer/MobileFooter'
import { LoggedInHeader } from '../Headers'

type PrimaryLayoutProps = {
    children: ReactNode
}

export const PrimaryLayout: FC<PrimaryLayoutProps> = ({ children }) => {
    const marginLeft = SIDE_NAV_WIDTH + 'px'

    return (
        <div className="flex">
            <div className="fixed z-10 hidden md:block">
                <SideNav />
            </div>

            {/* Careful when changing the marginLeft */}
            <div className="relative w-full md:ml-[200px]">
                <LoggedInHeader />
                <div className="my-[4.6rem]">{children}</div>
                <MobileFooter />
            </div>
        </div>
    )
}
