import React, { FC, ReactNode } from 'react'

type DropdownProps = {
    children?: ReactNode
}

export const Dropdown: FC<DropdownProps> = ({ children }) => {
    return <div>{children}</div>
}
