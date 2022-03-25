import React, { useState } from 'react'
import classNames from 'classnames'
import Image from 'next/image'
import { useMediaQuery } from '../../hooks/useMediaQuery'
import { useOnClickOutside } from '../../hooks/useOnClickOutSide'
import { COLORS } from '../../lib/constants/colors'
import { TextField } from '../form'
import { CommentIcon, MenuIcon, MoreOptionsIcon, NotificationIcon, SearchIcon } from '../Icons'
import { SideNav } from '../Layout'

export const LoggedInHeader = () => {
    const [open, setOpen] = useState(false)
    const [searchString, setSearchString] = useState('')
    const isDesktop = useMediaQuery('md')

    const { ref } = useOnClickOutside(() => setOpen(false))

    return (
        <div className="fixed z-50 flex w-screen items-center justify-between bg-white py-4 px-2 md:justify-end md:px-8">
            {!isDesktop && (
                <>
                    <div
                        ref={ref}
                        className={classNames(
                            !open && '-translate-x-full',
                            'absolute left-0 top-0 block h-screen w-[188px] transition duration-500 ease-in-out md:hidden'
                        )}
                    >
                        <SideNav close={() => setOpen(false)} />
                    </div>
                    <button className="p-2 transition" onClick={() => setOpen(true)}>
                        <MenuIcon size={26} color={COLORS.ICON_GRAY} />
                    </button>
                </>
            )}
            <div className="flex items-center justify-end gap-x-2 md:gap-x-4">
                {isDesktop && (
                    <>
                        <TextField
                            value={searchString}
                            onChange={(input) => setSearchString(input)}
                            inputClassName="bg-hypay-light-gray text-sm"
                            placeholder="Search"
                            inputIcon={<SearchIcon color={COLORS.PLACEHOLDER} />}
                            className="mr-16"
                        />
                        <button className="rounded-lg p-2 transition duration-200 ease-in-out hover:scale-105 hover:shadow-md">
                            <CommentIcon size={26} color={COLORS.ICON_GRAY} />
                        </button>
                    </>
                )}
                <button className="rounded-lg p-2 transition duration-200 ease-in-out hover:scale-105 hover:shadow-md">
                    <NotificationIcon indicator size={26} color={COLORS.ICON_GRAY} />
                </button>
                {!isDesktop && (
                    <button className="rounded-lg py-2 transition duration-200 ease-in-out hover:scale-105 hover:shadow-md">
                        <MoreOptionsIcon size={26} color={COLORS.ICON_GRAY} />
                    </button>
                )}
                {isDesktop && (
                    <button className="rounded-lg transition duration-200 ease-in-out hover:scale-105">
                        <Image
                            className="rounded-lg"
                            loader={({ src }) => src}
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWnQScKMx5KEgFZiQtqXBFX8EuF7GI-DWfsA&usqp=CAU"
                            alt="avatar"
                            width={40}
                            height={40}
                            quality={100}
                        />
                    </button>
                )}
            </div>
        </div>
    )
}
