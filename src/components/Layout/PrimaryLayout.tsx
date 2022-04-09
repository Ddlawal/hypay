import cx from 'classnames'
import React, { FC, ReactNode } from 'react'
import { SideNav } from '.'
import { MobileFooter } from '../Footer/MobileFooter'
import { LoggedInHeader } from '../Headers'
import Head from 'next/head'
import { LoadingPage } from './LoadingPage'

type PrimaryLayoutProps = {
    children: ReactNode
    className?: string
    currentTabIndex?: number
    isNavBack?: boolean
    navHeader?: string
    isLoading?: boolean
}

export const PrimaryLayout: FC<PrimaryLayoutProps> = ({
    children,
    className,
    currentTabIndex,
    isNavBack,
    navHeader,
    isLoading,
}) => {
    return (
        <>
            <Head>
                <title>Hypay / Dashboard</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="icon" type="image/x-icon" href="/images/hypayLogo.png"></link>
            </Head>
            <div className={cx(className, 'mb-10 flex md:mb-0')}>
                <div className="fixed z-10 hidden w-[22%] bg-black md:block">
                    <SideNav currentTabIndex={currentTabIndex} />
                </div>

                {/* Careful when changing the marginLeft */}
                <div className="relative w-full md:ml-[22%] md:w-[78%]">
                    <div className="fixed z-50 flex w-full md:w-[78%]">
                        <LoggedInHeader currentTabIndex={currentTabIndex} isNavBack={isNavBack} navHeader={navHeader} />
                    </div>
                    <div className="my-[4.6rem]">{isLoading ? <LoadingPage /> : children}</div>
                    <MobileFooter />
                </div>
            </div>
        </>
    )
}
