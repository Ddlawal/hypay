import React from 'react'
import Select, { components } from 'react-select'

type Option<T> = {
    label: string
    value: T
}

type SelectFieldProps<T> = {
    name: string
    value: T
    placeholder: string
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
    options,
    isSearchable = true,
    isClearable = false,
    CustomOption,
    onChange,
}: SelectFieldProps<T>): JSX.Element {
    return (
        <div>
            {label && <label htmlFor={name}>{label}</label>}

            <Select<Option<T>>
                id={name}
                options={options}
                value={options.find((option) => option.value === value)}
                onChange={(option) => onChange(option?.value ?? null)}
                isSearchable={isSearchable}
                className="react-select"
                classNamePrefix="react-select"
                isClearable={isClearable}
                placeholder={placeholder}
                components={CustomOption ? { Option: CustomOption } : {}}
            />
        </div>
    )
}
