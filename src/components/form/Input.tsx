import * as React from 'react'
import cx from 'classnames'

type Props = {
    className?: string
    parentClassName?: string
    error?: boolean
    icon?: JSX.Element
    padding?: string
    fullWidth?: boolean
} & React.HTMLProps<HTMLInputElement>

export const Input = ({
    className,
    parentClassName,
    padding,
    error,
    icon,
    fullWidth,
    ...rest
}: Props): React.ReactElement => {
    const borderColor = error ? 'border-red-200' : ''

    return (
        <div className={cx(parentClassName, fullWidth && 'w-full', 'relative')}>
            {icon && <span className="absolute inset-y-0 left-0 flex items-center pl-4">{icon}</span>}
            <input
                className={cx(
                    className,
                    padding || 'py-2 pl-11 pr-4',
                    `w-full appearance-none rounded-lg bg-white focus:outline-none ${borderColor}`
                )}
                {...rest}
            />
        </div>
    )
}
