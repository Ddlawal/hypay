import cx from 'classnames'
import React, { ReactNode } from 'react'
import Select, { components } from 'react-select'

type Option<T> = {
    label: string
    value: T
}

type SelectFieldProps<T> = {
    name: string
    value: T
    placeholder?: ReactNode
    labelClassName?: string
    onChange: (value: T | null) => void
    label?: string
    options: Option<T>[]
    isSearchable?: boolean
    isClearable?: boolean
    CustomOption?: typeof components.Option
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function SelectField<T = unknown>({
    name,
    value,
    placeholder,
    label,
    labelClassName,
    options,
    isSearchable = true,
    isClearable = false,
    CustomOption,
    onChange,
}: SelectFieldProps<T>): JSX.Element {
    return (
        <div>
            {label && (
                <label htmlFor={name} className={cx(labelClassName, 'my-3 block')}>
                    {label}
                </label>
            )}

            <Select<Option<T>>
                id={name}
                options={options}
                value={options.find((option) => option.value === value)}
                onChange={(option) => onChange(option?.value ?? null)}
                isSearchable={isSearchable}
                className="react-select rounded border"
                classNamePrefix="react-select"
                isClearable={isClearable}
                placeholder={placeholder}
                components={CustomOption ? { Option: CustomOption } : {}}
            />
        </div>
    )
}
