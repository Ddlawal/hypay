import classNames from 'classnames'
import { useState } from 'react'
import { COLORS } from '../../lib/constants/colors'
import { headerLinks } from '../../lib/data'
import { Button } from '../Button'
import { CloseIcon, MenuIcon, RightArrowIcon } from '../Icons'
import { NextLink } from '../Links'
import { Logo } from '../Logo'
import { useRouter } from 'next/router'

const HeaderLinks = () => {
    const { push } = useRouter()
    return (
        <ul className="flex flex-col justify-between gap-6 sm:gap-7 md:flex-row md:gap-10">
            {headerLinks.map(({ id, title, href }) => {
                return (
                    <li key={id} className="flex items-center gap-2">
                        <NextLink
                            href={href}
                            className="text-base text-hypay-primary hover:text-hypay-secondary md:text-sm"
                        >
                            {title}
                        </NextLink>
                        {id === 4 && <RightArrowIcon color={COLORS.PRIMARY} size={14} />}
                    </li>
                )
            })}
            <Button primary onClick={() => push('/createstore')} className="md:ml-5">
                Create your store
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
    return (
        <>
            <div
                className={classNames(
                    !open && 'translate-x-full',
                    'absolute top-0 right-0 block h-screen w-10/12 bg-white py-8 px-6 transition duration-500 ease-in-out sm:w-8/12 sm:p-10 md:hidden'
                )}
            >
                <div onClick={() => setOpen(false)} className="mb-2 flex justify-end">
                    <CloseIcon />
                </div>
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
