import React, { FC, ReactNode } from 'react'
import cx from 'classnames'
import Head from 'next/head'

import { SideNav } from '.'
import { MobileFooter } from '../Footer/MobileFooter'
import { LoggedInHeader } from '../Headers'
import { LoadingPage } from './LoadingPage'
import { SearchType } from '../../pages/dashboard/search'
import { MenuItemListType } from '../../lib/data'

type PrimaryLayoutProps = {
    children: ReactNode
    className?: string
    currentTabIndex?: number
    dropDownIndex?: number
    header?: ReactNode
    isNavBack?: boolean
    searchable?: SearchType
    navHeader?: string
    isLoading?: boolean
    menuItemList?: Array<MenuItemListType>
    isPrimary?: boolean
    desktopSearch?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const PrimaryLayout: FC<PrimaryLayoutProps> = ({
    children,
    className,
    currentTabIndex,
    dropDownIndex,
    header,
    isNavBack,
    searchable,
    navHeader,
    isLoading,
    menuItemList,
    isPrimary,
    desktopSearch,
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
                    <SideNav
                        currentTabIndex={currentTabIndex}
                        dropDownIndex={dropDownIndex}
                        menuItemList={menuItemList}
                        isPrimary={isPrimary}
                    />
                </div>

                {/* Careful when changing the marginLeft */}
                <div className="relative w-full md:ml-[22%] md:w-[78%]">
                    <div className="fixed z-50 flex w-full md:w-[78%]">
                        <LoggedInHeader
                            currentTabIndex={currentTabIndex}
                            dropDownIndex={dropDownIndex}
                            isNavBack={isNavBack}
                            searchable={searchable}
                            navHeader={navHeader}
                            header={header}
                            desktopSearch={desktopSearch}
                            menuItemList={menuItemList}
                            isPrimary={isPrimary}
                        />
                    </div>
                    <div className={cx(className, 'my-[4.6rem]')}>{isLoading ? <LoadingPage /> : children}</div>
                    <MobileFooter />
                </div>
            </div>
        </>
    )
}
