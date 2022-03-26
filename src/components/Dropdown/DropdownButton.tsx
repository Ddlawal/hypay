import React, { FC } from 'react'

type DropdownButtonProps = {
    className?: string
}

export const DropdownButton: FC<DropdownButtonProps> = ({ children }) => {
    return <button>{children}</button>
}
