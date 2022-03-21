import * as React from 'react'
import cx from 'classnames'

import { Input } from './Input'
import { Label } from './Label'

type Props = {
    value: string
    className?: string
    inputClassName?: string
    inputIcon?: JSX.Element
    onChange: (newVal: string) => void
    label?: string
    placeholder?: string
    type?: string
}

const randomId = () => Math.floor(Math.random() * 0x100000).toString(16)

export const TextField = ({
    label,
    value,
    placeholder,
    type,
    onChange,
    className,
    inputClassName,
    inputIcon,
}: Props): React.ReactElement => {
    const idRef = React.useRef(randomId())

    return (
        <div className={cx('my-1', className)}>
            {label && <Label htmlFor={idRef.current}>{label}</Label>}
            <Input
                className={inputClassName}
                id={idRef.current}
                value={value}
                placeholder={placeholder}
                type={type}
                icon={inputIcon}
                onChange={(e: any) => onChange(e.target.value)}
            />
        </div>
    )
}
