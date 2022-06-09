import React, { useState } from 'react'
import cx from 'classnames'
import { COLORS } from '../../lib/constants/colors'
import { headerLinks } from '../../lib/data'
import { Button } from '../Button'
import { MenuIcon, RightArrowIcon } from '../Icons'
import { NextLink } from '../Links'
import { Logo } from '../Logo'
import { useRouter } from 'next/router'
import { useOnClickOutside } from '../../hooks/useOnClickOutSide'

const HeaderLinks = () => {
    const { push } = useRouter()
    return (
        <ul className="flex flex-col justify-between gap-6 sm:gap-7 md:flex-row md:gap-10">
            {headerLinks.map(({ id, title, href }) => {
                return (
                    <li key={id} className="flex items-center gap-2">
                        {title !== 'Entrar' ? (
                            <NextLink
                                href={href}
                                className="text-base capitalize text-hypay-primary hover:text-hypay-secondary md:text-sm"
                            >
                                {title}
                            </NextLink>
                        ) : (
                            <NextLink
                                href={href}
                                target="_blank"
                                className="text-base capitalize text-hypay-primary hover:text-hypay-secondary md:text-sm"
                            >
                                {title}
                            </NextLink>
                        )}

                        {id === 4 && <RightArrowIcon color={COLORS.PRIMARY} size={14} />}
                    </li>
                )
            })}
            <Button primary className="md:ml-5">
                <NextLink target="_blank" href="/createstore">
                    Crie sua página
                </NextLink>
            </Button>
        </ul>
    )
}

const DesktopLinks = () => {
    return (
        <div className="hidden md:block">
            <HeaderLinks />
        </div>
    )
}

const MobileLinks = () => {
    const [open, setOpen] = useState(false)
    const { ref } = useOnClickOutside<HTMLDivElement>(() => setOpen(false))

    return (
        <>
            <div
                ref={ref}
                className={cx(
                    !open && 'translate-x-full',
                    'absolute top-0 right-0 block h-screen w-4/6 bg-white py-8 px-6 pt-12 transition duration-500 ease-in-out sm:w-8/12 sm:p-10 md:hidden'
                )}
            >
                <HeaderLinks />
            </div>
            <div className="block md:hidden" onClick={() => setOpen(true)}>
                <MenuIcon />
            </div>
        </>
    )
}

export const LandingPageHeader = () => {
    return (
        <div className="mb-1 h-20 w-full">
            <div className="fixed z-50 flex w-screen items-center justify-between bg-white py-6 px-6 shadow-lg sm:px-10 lg:px-24 xl:px-40">
                <Logo labelled={{ labelPosition: 'right' }} />
                <DesktopLinks />
                <MobileLinks />
            </div>
        </div>
    )
}
