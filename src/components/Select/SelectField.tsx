import cx from 'classnames'
import React, { ReactNode } from 'react'
import Select, { components } from 'react-select'
import { COLORS } from '../../lib/constants/colors'

type Option<T> = {
    label: string
    value: T
}

type SelectFieldProps<T, F> = {
    name: string
    value: T
    placeholder?: ReactNode
    labelClassName?: string
    onChange: (value: T | null) => void
    label?: string
    options: Array<Option<T>>
    isSearchable?: boolean
    isClearable?: boolean
    isDisabled?: boolean
    CustomOption?: typeof components.Option
    field?: F | Record<string, unknown>
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function SelectField<T = unknown, F = unknown>({
    name,
    field = {},
    value,
    placeholder,
    label,
    labelClassName,
    options,
    isSearchable = true,
    isClearable = false,
    isDisabled = false,
    CustomOption,
    onChange,
}: SelectFieldProps<T, F>): JSX.Element {
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
                className="react-select rounded border "
                classNamePrefix="react-select"
                isClearable={isClearable}
                placeholder={placeholder}
                components={CustomOption ? { Option: CustomOption } : {}}
                isDisabled={isDisabled}
                {...field}
                theme={(theme) => ({ ...theme, colors: { ...theme.colors, primary: COLORS.PINK } })}
            />
        </div>
    )
}
