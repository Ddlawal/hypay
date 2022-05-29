import React, { useState } from 'react'
import cx from 'classnames'
import { useOnClickOutside } from '../../hooks/useOnClickOutSide'
import { COLORS } from '../../lib/constants/colors'
import { Input } from '../form'
import { MenuIcon, SearchIcon } from '../Icons'
import { BUYER_SIDE_NAV_WIDTH } from '../../lib/constants/elements'
import { NextLink } from '../Links'
import { Logo } from '../Logo'

export const BuyersHeader = () => {
    const [open, setOpen] = useState(false)
    const { ref } = useOnClickOutside<HTMLDivElement>(() => setOpen(false))

    const width = BUYER_SIDE_NAV_WIDTH + 'px'

    return (
        <div className="flex w-screen items-center justify-between overflow-hidden bg-white py-4 px-2 md:justify-end md:px-28">
            <div className="fixed right-0 top-0">
                <div
                    ref={ref}
                    style={{ width }}
                    className={cx(
                        !open && 'translate-x-full',
                        'absolute right-0 top-0 block h-screen rounded-tl-xl rounded-bl-xl bg-hypay-light-blue transition duration-500 ease-in-out md:hidden'
                    )}
                >
                    <header className="flex w-full items-center justify-center pt-8 pb-16">
                        <NextLink href="/dashboard/home">
                            <Logo
                                labelled={{ labelPosition: 'right' }}
                                labelColor={'text-white'}
                                color={COLORS.WHITE}
                            />
                        </NextLink>
                    </header>

                    <div className="text-bold w-full pl-4 text-xl text-white">
                        <NextLink href="/store" className="block py-2">
                            Home
                        </NextLink>
                        <NextLink href="/store/checkout" className="block py-2">
                            Checkout
                        </NextLink>
                        <NextLink href="/store/support" className="block py-2">
                            Atendimento
                        </NextLink>
                    </div>
                </div>
            </div>

            <Logo size={24} labelled={{ labelPosition: 'right' }} />
            <div className="text-bold ml-44 hidden w-full gap-x-20 pl-4 text-xl md:flex">
                <NextLink href="/store">Home</NextLink>
                <NextLink href="/store/checkout">Checkout</NextLink>
                <NextLink href="/store/support">Atendimento</NextLink>
            </div>
            <div className="flex items-center justify-end gap-x-2 md:gap-x-0">
                <Input
                    placeholder="Search"
                    autoFocus
                    className="w-60 bg-hypay-light-gray text-sm"
                    parentClassName="hidden md:block"
                    icon={<SearchIcon color={COLORS.PLACEHOLDER} />}
                    type="search"
                />
                <button className=" block rounded-lg p-2 transition duration-200 ease-in-out hover:scale-105 hover:shadow-md md:hidden">
                    <SearchIcon size={26} />
                </button>
                <button className="p-2 md:hidden" onClick={() => setOpen(true)}>
                    <MenuIcon size={26} color={COLORS.ICON_GRAY} />
                </button>
            </div>
        </div>
    )
}
