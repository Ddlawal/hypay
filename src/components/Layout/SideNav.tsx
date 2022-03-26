import React, { FC, useState } from 'react'
import { COLORS } from '../../lib/constants/colors'
import { Logo } from '../../components/Logo'
import { MenuItemList } from '../../lib/data'
import { NavItem } from './NavItem'
import Link from 'next/link'
import { SIDE_NAV_WIDTH } from '../../lib/constants/elements'

export const SideNav: FC = () => {
    const [activeTab, setActivetab] = useState(0)

    const changeTab = (i: number) => {
        setActivetab(i)
    }

    const settingsIndex = MenuItemList.length - 1

    return (
        <div className="items-normal flex h-screen min-h-screen w-full flex-col justify-between rounded-r-xl bg-[#36076B] md:rounded-none ">
            <header className="flex w-full items-center justify-center p-4">
                <Link href="#">
                    <a>
                        <Logo labelled={{ labelPosition: 'right' }} labelColor={'text-white'} color={COLORS.WHITE} />
                    </a>
                </Link>
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
                    isActive={settingsIndex === activeTab}
                    setActive={() => changeTab(settingsIndex)}
                />
            </div>
        </div>
    )
}
