import React from 'react'
import cx from 'classnames'
import { Path, UseFormRegister } from 'react-hook-form'

type RadioProps<T> = {
    name: Path<T>
    value: string
    checkedValue: string
    label?: string
    className?: string
    onChange: (value: string) => void
    register: UseFormRegister<T>
}

export function Radio<T = unknown>({ name, label, value, className, checkedValue, onChange, register }: RadioProps<T>) {
    return (
        <div className="flex items-center">
            <input
                type="radio"
                defaultChecked={checkedValue === value}
                className={cx(className, 'h-6 w-6')}
                value={value}
                {...register(name)}
                onChange={() => onChange(value)}
            />
            {label ? (
                <label htmlFor={name} className="ml-2 font-semibold">
                    {label}
                </label>
            ) : null}
        </div>
    )
}
