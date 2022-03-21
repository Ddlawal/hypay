import * as React from 'react'
import cx from 'classnames'

type Props = {
    children: React.ReactNode
    className?: string
} & React.HTMLProps<HTMLLabelElement>

export const Label = ({ children, className, ...rest }: Props): React.ReactElement => {
    return (
        <label className={cx('block py-3 text-sm text-gray-800', className)} {...rest}>
            {children}
        </label>
    )
}
