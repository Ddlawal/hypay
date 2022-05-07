import cx from 'classnames'
import React, { FC, ReactNode, useState } from 'react'
import { useOnClickOutside } from '../../hooks/useOnClickOutSide'
import { signOut } from 'next-auth/react'
import { useAppDispatch, useAppSelector } from '../../hooks/useStoreHooks'
import { useLogoutMutation } from '../../store/services/auth'
import { logout as logUserOut } from '../../store/reducers/auth'

type DropdownItemProps = {
    title: string
    onClick?: () => void
}

type DropdownProps = {
    items: Array<DropdownItemProps>
    children?: ReactNode
    className?: string
}

type DropdownButtonProps = {
    items: Array<DropdownItemProps>
    className?: string
}

const DropdownItems: FC<DropdownButtonProps> = ({ items, className }) => {
    const dispatch = useAppDispatch()
    const [logoutMutation] = useLogoutMutation()
    const token = useAppSelector((state) => state.auth.token)

    const logOut = async () => {
        const res = await logoutMutation({ token: token?.access_token })
        await signOut({ redirect: false })
        if (res) {
            localStorage.clear()
            dispatch(logUserOut())
        }
    }
    return (
        <ul className={cx(className)}>
            {items.map(({ title, onClick }, id) => (
                <li key={id} onClick={onClick} className=" w-full transition-transform hover:scale-105">
                    {title}
                </li>
            ))}
            <li
                className="w-full transition-transform hover:scale-105"
                onClick={() => {
                    logOut()
                }}
            >
                Logout
            </li>
        </ul>
    )
}

export const Dropdown: FC<DropdownProps> = ({ children, className, items }) => {
    const [showDropdown, setShowDropdown] = useState(false)
    const { ref } = useOnClickOutside<HTMLDivElement>(() => setShowDropdown(false))

    return (
        <div ref={ref} className={cx(className, 'relative')}>
            <button onClick={() => setShowDropdown(!showDropdown)}>{children}</button>
            <DropdownItems
                className={cx(
                    !showDropdown && 'hidden',
                    'absolute top-16 right-0 z-10 flex w-48 cursor-pointer flex-col items-start justify-center gap-y-3 rounded-xl bg-white py-4 pl-8 shadow-md'
                )}
                items={items}
            ></DropdownItems>
        </div>
    )
}
