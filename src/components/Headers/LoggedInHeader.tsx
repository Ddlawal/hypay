import React, { useState } from 'react'
import classNames from 'classnames'
import Image from 'next/image'
import { useOnClickOutside } from '../../hooks/useOnClickOutSide'
import { COLORS } from '../../lib/constants/colors'
import { TextField } from '../form'
import { CommentIcon, MenuIcon, MoreOptionsIcon, NotificationIcon, SearchIcon } from '../Icons'
import { SideNav } from '../Layout'
import { SIDE_NAV_WIDTH } from '../../lib/constants/elements'

export const LoggedInHeader = () => {
    const [open, setOpen] = useState(false)
    const [searchString, setSearchString] = useState('')
    const { ref } = useOnClickOutside(() => setOpen(false))

    const width = SIDE_NAV_WIDTH + 'px'

    return (
        <div className="flex w-full items-center justify-between bg-white py-4 px-2 md:justify-end md:px-8">
            <div className="block md:hidden">
                <div
                    ref={ref}
                    style={{ width }}
                    className={classNames(
                        !open && '-translate-x-full',
                        'absolute left-0 top-0 block h-screen transition duration-500 ease-in-out md:hidden'
                    )}
                >
                    <SideNav />
                </div>
                <button className="p-2 transition" onClick={() => setOpen(true)}>
                    <MenuIcon size={26} color={COLORS.ICON_GRAY} />
                </button>
            </div>
            <div className="flex items-center justify-end gap-x-2 md:gap-x-4">
                <TextField
                    value={searchString}
                    onChange={(input) => setSearchString(input)}
                    inputClassName="bg-hypay-light-gray text-sm"
                    placeholder="Search"
                    inputIcon={<SearchIcon color={COLORS.PLACEHOLDER} />}
                    className="mr-20 hidden md:block"
                />
                <button className="hidden rounded-lg p-2 transition duration-200 ease-in-out hover:scale-105 hover:shadow-md md:block">
                    <CommentIcon size={26} color={COLORS.ICON_GRAY} />
                </button>
                <button className="rounded-lg p-2 transition duration-200 ease-in-out hover:scale-105 hover:shadow-md">
                    <NotificationIcon indicator size={26} color={COLORS.ICON_GRAY} />
                </button>
                <button className="block rounded-lg py-2 transition duration-200 ease-in-out hover:scale-105 hover:shadow-md md:hidden">
                    <MoreOptionsIcon size={26} color={COLORS.ICON_GRAY} />
                </button>
                <button className="hidden rounded-full transition duration-200 ease-in-out hover:scale-105 md:block">
                    <Image
                        className="rounded-full"
                        loader={({ src }) => src}
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWnQScKMx5KEgFZiQtqXBFX8EuF7GI-DWfsA&usqp=CAU"
                        alt="avatar"
                        width={40}
                        height={40}
                        quality={100}
                    />
                </button>
            </div>
        </div>
    )
}
