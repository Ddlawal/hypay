import * as React from 'react'
import cx from 'classnames'

type Props = {
    className?: string
    error?: boolean
    icon?: JSX.Element
    errors?: any
    name: string
    label?: string
    validation?: any
    register?: any
    placeholder?: string
    type?: string
    rightLabel?: boolean
} & React.HTMLProps<HTMLInputElement>

export const SecondInput = ({
    className,
    error,
    icon,
    errors,
    name,
    label,
    register,
    validation,
    type,
    rightLabel,
    placeholder,
    ...rest
}: Props): React.ReactElement => {
    const borderColor =
        errors != null
            ? Object.keys(errors).length && (errors[name]?.type ? 'border-red-600' : 'border-hypay-gray')
            : ''

    return (
        <div className={`${className} h-[86px]`}>
            {label && (
                <label htmlFor="email" className="mt-3 flex font-semibold">
                    <div className="flex w-full items-baseline justify-between">
                        {label}
                        {rightLabel && <p className="text-xs text-hypay-gray">Forgotten your password?</p>}
                    </div>
                </label>
            )}
            <div
                id={name}
                className={`mt-1 flex items-center justify-between gap-2 rounded-md border-[1px] bg-white ${borderColor} h-[34px] px-2`}
            >
                <input
                    type={type}
                    {...register(name, { ...validation })}
                    {...rest}
                    className="h-full w-full appearance-none border-none bg-transparent outline-none"
                    placeholder={placeholder}
                />
                {icon && icon}
            </div>

            {errors ? (
                Object.keys(errors).length && errors[name]?.type == 'password' ? (
                    errors.password.type == 'minLength' ? (
                        <p className="mt-2 text-right text-xs font-semibold text-hypay-orange">
                            Must contain at least 6 characters
                        </p>
                    ) : (
                        <p className="text-sm text-red-600">This field is required!</p>
                    )
                ) : (
                    errors[name] && (
                        <p className="text-sm text-red-600">
                            {errors[name]?.type != 'required'
                                ? errors[name].message
                                : ` this field is ${errors[name]?.type}`}
                        </p>
                    )
                )
            ) : null}
        </div>
    )
}
