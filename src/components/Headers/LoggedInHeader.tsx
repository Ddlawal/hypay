import React, { ReactNode, useState } from 'react'
import cx from 'classnames'
import Image from 'next/image'
import { useOnClickOutside } from '../../hooks/useOnClickOutSide'
import { COLORS } from '../../lib/constants/colors'
import { Input } from '../form'
import { CommentIcon, MenuIcon, MoreOptionsVIcon, NotificationIcon, SearchIcon } from '../Icons'
import { SideNav } from '../Layout'
import { SIDE_NAV_WIDTH } from '../../lib/constants/elements'
import { Dropdown } from '../Dropdown'
import { dropdownMenuItems, MenuItemListType } from '../../lib/data'
import { useRouter } from 'next/router'
import { NextLink } from '../Links'
import { ArrowLeftIcon } from '../Icons/ArrowLeftIcon'
import { SearchType } from '../../pages/dashboard/search'

type LoggedInHeaderProps = {
    currentTabIndex?: number
    dropDownIndex?: number
    header?: ReactNode
    isNavBack?: boolean
    searchable?: SearchType
    navHeader?: string
    menuItemList?: Array<MenuItemListType>
    isPrimary?: boolean
    desktopSearch?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const LoggedInHeader = ({
    currentTabIndex,
    dropDownIndex,
    header,
    isNavBack,
    searchable,
    navHeader,
    menuItemList,
    isPrimary,
    desktopSearch,
}: LoggedInHeaderProps) => {
    const [open, setOpen] = useState(false)
    const { ref } = useOnClickOutside<HTMLDivElement>(() => setOpen(false))
    const { pathname, back } = useRouter()

    const isMessagesPage = pathname === '/dashboard/messages'
    const isNotificationsPage = pathname === '/dashboard/notifications'

    const width = SIDE_NAV_WIDTH + 'px'

    return (
        <div className="flex w-full items-center justify-between bg-white py-4 px-2 md:justify-end md:px-8">
            {isNavBack ? (
                <div className="flex w-full items-center justify-between gap-2 p-2">
                    <div className="cursor-pointer">
                        <ArrowLeftIcon onClick={() => back()} size={26} color={COLORS.ICON_GRAY} />
                    </div>
                    {header || (
                        <>
                            <div className="w-full text-center font-bold">{navHeader}</div>
                            {searchable ? (
                                <NextLink href={`search?q=${searchable}`}>
                                    <SearchIcon />
                                </NextLink>
                            ) : null}
                        </>
                    )}
                </div>
            ) : (
                <>
                    <div className="block md:hidden">
                        <div
                            ref={ref}
                            style={{ width }}
                            className={cx(
                                !open && '-translate-x-full',
                                'absolute left-0 top-0 block h-screen transition duration-500 ease-in-out md:hidden'
                            )}
                        >
                            <SideNav
                                currentTabIndex={currentTabIndex}
                                dropDownIndex={dropDownIndex}
                                menuItemList={menuItemList}
                                isPrimary={isPrimary}
                            />
                        </div>
                        <button className="p-2 transition" onClick={() => setOpen(true)}>
                            <MenuIcon size={26} color={COLORS.ICON_GRAY} />
                        </button>
                    </div>
                    <div className="flex items-center justify-end gap-x-2 md:gap-x-4">
                        <Input
                            placeholder="Search"
                            fullWidth
                            autoFocus
                            className="bg-hypay-light-gray text-sm"
                            parentClassName="mr-20 hidden md:block"
                            icon={<SearchIcon color={COLORS.PLACEHOLDER} />}
                            type="search"
                            onChange={desktopSearch}
                        />
                        <NextLink href="/dashboard/messages">
                            <button className="hidden rounded-lg p-2 transition duration-200 ease-in-out hover:scale-105 hover:shadow-md md:block">
                                <CommentIcon size={26} color={isMessagesPage ? COLORS.PINK : COLORS.ICON_GRAY} />
                            </button>
                        </NextLink>
                        <NextLink href="/dashboard/notifications">
                            <button className="rounded-lg p-2 transition duration-200 ease-in-out hover:scale-105 hover:shadow-md">
                                <NotificationIcon
                                    indicator
                                    size={26}
                                    color={isNotificationsPage ? COLORS.PINK : COLORS.ICON_GRAY}
                                />
                            </button>
                        </NextLink>
                        <Dropdown items={dropdownMenuItems}>
                            <div className="block rounded-lg py-2 transition duration-200 ease-in-out hover:scale-105 hover:shadow-md md:hidden">
                                <MoreOptionsVIcon size={26} color={COLORS.ICON_GRAY} />
                            </div>
                            <div className="hidden md:block">
                                <Image
                                    className="rounded-full"
                                    loader={({ src }) => src}
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWnQScKMx5KEgFZiQtqXBFX8EuF7GI-DWfsA&usqp=CAU"
                                    alt="avatar"
                                    width={60}
                                    height={60}
                                    quality={100}
                                    unoptimized
                                />
                            </div>
                        </Dropdown>
                    </div>
                </>
            )}
        </div>
    )
}
