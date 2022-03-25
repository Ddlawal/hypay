import React, { FC, useState } from 'react'
import classNames from 'classnames'
import { NextLink } from '../Links'

type NavItemProps = {
    text: string
    isActive: boolean
    href: string
    setActive: (index: number) => void
    parentIndex?: number
    leftIcon?: JSX.Element | (() => JSX.Element) | undefined
    isDropDown?: string[] | undefined
    hasRightIcon?: boolean | undefined
    rightIcon?: JSX.Element | (() => JSX.Element) | undefined
}

export const NavItem: FC<NavItemProps> = ({
    href,
    parentIndex,
    text,
    leftIcon,
    rightIcon,
    isActive,
    setActive,
    isDropDown,
}) => {
    const [activeChild, setActiveChild] = useState<number>(-1)
    const [showDropdown, setShowDropdown] = useState<boolean>(false)
    const changeTab = () => {
        setActive(parentIndex!)
        setActiveChild(0)
    }
    const changeActiveChild = (i: number) => {
        setActiveChild(i)
        setActive(-1)
    }
    return (
        <div
            className={classNames(
                !isDropDown ? isActive && 'bg-hypay-secondary' : '',
                `w-full cursor-pointer py-3 px-4 outline-hidden transition ease-in hover:bg-hypay-secondary`
            )}
        >
            <NextLink
                href={href}
                className={`flex w-max ${isActive && isDropDown && 'pb-2'}  relative items-center gap-4 text-white`}
                onClick={isDropDown ? () => setShowDropdown(!showDropdown) : changeTab}
            >
                {leftIcon}
                <p className="">{text}</p>
                {rightIcon}
            </NextLink>
            {showDropdown &&
                isDropDown?.map((marketType: string, i: number) => (
                    <button
                        onClick={() => changeActiveChild(i)}
                        key={marketType}
                        className={classNames(
                            i === activeChild && `border-l-4 border-hypay-pink`,
                            i === activeChild && 'bg-hypay-secondary',
                            ` flex w-full cursor-pointer justify-center py-2 text-white outline-hidden transition ease-in   `
                        )}
                    >
                        {marketType}
                    </button>
                ))}
        </div>
    )
}
