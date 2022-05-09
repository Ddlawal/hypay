import React, { FC, useState } from 'react'
import cx from 'classnames'
import { useRouter } from 'next/router'

type NavItemProps = {
    text: string
    isActive: boolean
    href: string
    setActive: (index: number) => void
    parentIndex?: number
    childIndex?: number
    leftIcon?: JSX.Element | (() => JSX.Element) | undefined
    isDropDown?: { href: string; text: string }[] | undefined
    hasRightIcon?: boolean | undefined
    rightIcon?: JSX.Element | (() => JSX.Element) | undefined
    activeTab?: number
}

export const NavItem: FC<NavItemProps> = ({
    href,
    parentIndex = 0,
    childIndex,
    text,
    leftIcon,
    rightIcon,
    isActive,
    setActive,
    isDropDown,
}) => {
    const [showDropdown, setShowDropdown] = useState<boolean>(isActive)
    const { push } = useRouter()

    const changeTab = (tab: number, href: string) => {
        if (isDropDown) {
            if (showDropdown) {
                setActive(parentIndex)
            }
            push(href)
        }
    }

    const routeToPage = (tab: string) => {
        push(tab)
    }

    return (
        <div>
            <div
                className={cx(
                    !isDropDown ? isActive && 'bg-hypay-secondary' : '',
                    `flex w-full cursor-pointer py-3 px-4 outline-hidden transition ease-in hover:bg-hypay-secondary ${
                        isActive && isDropDown && 'pb-2'
                    }  relative items-center gap-4 text-white`
                )}
                onClick={isDropDown ? () => setShowDropdown(!showDropdown) : () => routeToPage(href)}
            >
                {leftIcon}
                <p className="">{text}</p>
                {rightIcon}
            </div>
            {showDropdown &&
                isDropDown?.map(({ href, text }: { href: string; text: string }, i: number) => {
                    return (
                        <button
                            onClick={() => changeTab(i, href)}
                            key={text}
                            className={cx(
                                i === childIndex && isActive && 'border-l-4 border-hypay-pink bg-hypay-secondary',
                                'flex w-full cursor-pointer py-2 pl-[3.1rem] text-white outline-hidden transition ease-in hover:bg-hypay-secondary'
                            )}
                        >
                            <span className={`${i === childIndex && '-ml-1'}`}>{text}</span>
                        </button>
                    )
                })}
        </div>
    )
}
