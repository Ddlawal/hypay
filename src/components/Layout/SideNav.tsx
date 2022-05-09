import React, { FC, useState } from 'react'
import { COLORS } from '../../lib/constants/colors'
import { Logo } from '../../components/Logo'
import { MenuItemList } from '../../lib/data'
import { NavItem } from './NavItem'
import { NextLink } from '../Links'
import { useRouter } from 'next/router'

type SideNavProps = { currentTabIndex?: number; dropDownIndex?: number }

export const SideNav: FC<SideNavProps> = ({ currentTabIndex = 0, dropDownIndex = 0 }) => {
    const [activeTab, setActiveTab] = useState<number>(currentTabIndex)
    const router = useRouter()

    const changeTab = (i: number) => {
        setActiveTab(i)
    }

    const settingsIndex = MenuItemList.length - 1

    return (
        <div className="items-normal flex h-screen min-h-screen w-full flex-col justify-between rounded-r-xl bg-[#36076B] md:rounded-none ">
            <header className="flex w-full items-center justify-center p-4">
                <NextLink href="/dashboard/home">
                    <Logo labelled={{ labelPosition: 'right' }} labelColor={'text-white'} color={COLORS.WHITE} />
                </NextLink>
            </header>

            <main className="flex w-full flex-1 items-center">
                <div className="h-max w-full">
                    {MenuItemList.slice(0, -1).map((item, index) => {
                        return (
                            <NavItem
                                key={`menu-${index}`}
                                {...item}
                                parentIndex={index}
                                isActive={index === activeTab}
                                childIndex={dropDownIndex}
                                setActive={changeTab}
                            />
                        )
                    })}
                </div>
            </main>

            <div className="w-full ">
                <NavItem
                    key={`menu-${settingsIndex}`}
                    {...MenuItemList[settingsIndex]}
                    isActive={router.pathname === MenuItemList[settingsIndex].href}
                    setActive={() => changeTab(settingsIndex)}
                />
            </div>
        </div>
    )
}
