import React, { useState } from 'react'
import cx from 'classnames'
import Image from 'next/image'
import { useOnClickOutside } from '../../hooks/useOnClickOutSide'
import { COLORS } from '../../lib/constants/colors'
import { Input } from '../form'
import { CommentIcon, MenuIcon, MoreOptionsVIcon, NotificationIcon, SearchIcon } from '../Icons'
import { BUYER_SIDE_NAV_WIDTH } from '../../lib/constants/elements'
import { Dropdown } from '../Dropdown'
import { dropdownMenuItems } from '../../lib/data'
import { useRouter } from 'next/router'
import { NextLink } from '../Links'
import { Logo } from '../Logo'

export const BuyersHeader = () => {
    const [open, setOpen] = useState(false)
    const { ref } = useOnClickOutside<HTMLDivElement>(() => setOpen(false))

    const width = BUYER_SIDE_NAV_WIDTH + 'px'

    return (
        <div className="flex w-full items-center justify-between bg-white py-4 px-2 md:justify-end md:px-8">
            <div
                ref={ref}
                style={{ width }}
                className={cx(
                    !open && 'translate-x-full',
                    'absolute left-[50%] top-0 block h-screen bg-hypay-light-blue transition duration-500 ease-in-out md:hidden'
                )}
            >
                Side
            </div>
            <Logo size={24} />
            <div className="flex items-center justify-end gap-x-2 md:gap-x-4">
                <Input
                    placeholder="Search"
                    fullWidth
                    autoFocus
                    className="bg-hypay-light-gray text-sm"
                    parentClassName="mr-20 hidden md:block"
                    icon={<SearchIcon color={COLORS.PLACEHOLDER} />}
                    type="search"
                />
                <button className=" block rounded-lg p-2 transition duration-200 ease-in-out hover:scale-105 hover:shadow-md md:hidden">
                    <SearchIcon size={26} />
                </button>
                <button className="p-2" onClick={() => setOpen(true)}>
                    <MenuIcon size={26} color={COLORS.ICON_GRAY} />
                </button>
            </div>
        </div>
    )
}
