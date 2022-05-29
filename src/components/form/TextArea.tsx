import * as React from 'react'
import cx from 'classnames'

import { Label } from './Label'

type Props = {
    name: string
    className?: string
    textAreaClassName?: string
    register?: any
    validation?: any
    onChange: (newVal: string) => void
    label?: string
    placeholder?: string
}

const randomId = () => Math.floor(Math.random() * 0x100000).toString(16)

export const TextArea = ({
    label,
    placeholder,
    onChange,
    name,
    register,
    validation,
    className,
    textAreaClassName,
}: Props): React.ReactElement => {
    const idRef = React.useRef(randomId())

    return (
        <div className={cx('my-3', className)}>
            {label && (
                <Label className="items-baseline font-semibold" htmlFor={idRef.current}>
                    {label}
                </Label>
            )}
            <textarea
                className={cx('w-full rounded-lg', textAreaClassName)}
                id={idRef.current}
                placeholder={placeholder}
                {...register(name, { ...validation })}
                name={name}
                onChange={(e: any) => onChange(e.target.value)}
                rows={6}
            />
        </div>
    )
}
