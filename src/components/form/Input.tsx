import * as React from 'react'
import cx from 'classnames'

type Props = {
    className?: string
    error?: boolean
    icon?: JSX.Element
} & React.HTMLProps<HTMLInputElement>

export const Input = ({ className, error, icon, ...rest }: Props): React.ReactElement => {
    const borderColor = error ? 'border-red-200' : ''

    return (
        <div className="relative">
            {icon && <span className="absolute inset-y-0 left-0 flex items-center pl-4">{icon}</span>}
            <input
                className={cx(
                    `w-full appearance-none rounded-lg bg-white py-2 pl-11 pr-4 focus:outline-none ${borderColor}`,
                    className
                )}
                {...rest}
            />
        </div>
    )
}
