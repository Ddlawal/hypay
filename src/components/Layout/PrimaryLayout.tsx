import classNames from 'classnames'
import React, { FC, ReactNode } from 'react'
import { SideNav } from '.'
import { MobileFooter } from '../Footer/MobileFooter'
import { LoggedInHeader } from '../Headers'

type PrimaryLayoutProps = {
    children: ReactNode
    className?: string
}

export const PrimaryLayout: FC<PrimaryLayoutProps> = ({ children, className }) => {
    return (
        <div className={classNames(className, 'flex')}>
            <div className="fixed z-10 hidden w-[22%] bg-black md:block">
                <SideNav />
            </div>

            {/* Careful when changing the marginLeft */}
            <div className="relative w-full md:ml-[22%] md:w-[78%]">
                <div className="fixed z-50 flex w-full md:w-[78%]">
                    <LoggedInHeader />
                </div>
                <div className="my-[4.6rem]">{children}</div>
                <MobileFooter />
            </div>
        </div>
    )
}
