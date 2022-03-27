import classNames from 'classnames'
import React, { FC, ReactNode, useState } from 'react'
import { useOnClickOutside } from '../../hooks/useOnClickOutSide'

type DropdownProps = {
    items: Array<{ title: string }>
    children?: ReactNode
    className?: string
}

type DropdownButtonProps = {
    items: Array<{ title: string }>
    className?: string
}

const DropdownItems: FC<DropdownButtonProps> = ({ items, className }) => {
    return (
        <ul className={classNames(className)}>
            {items.map(({ title }, id) => (
                <li key={id}>{title}</li>
            ))}
        </ul>
    )
}

export const Dropdown: FC<DropdownProps> = ({ children, className, items }) => {
    const [showDropdown, setShowDropdown] = useState(false)
    const { ref } = useOnClickOutside<HTMLDivElement>(() => setShowDropdown(false))

    return (
        <div ref={ref} className={classNames(className, 'relative')}>
            <button onClick={() => setShowDropdown(!showDropdown)}>{children}</button>
            <DropdownItems
                className={classNames(
                    !showDropdown && 'hidden',
                    'absolute top-16 right-0 z-10 flex w-48 flex-col items-start justify-center gap-y-3 rounded-xl bg-white py-4 pl-8 shadow-md'
                )}
                items={items}
            />
        </div>
    )
}
