import React, { useState } from 'react'
import { CloseEyeIcon } from '../Icons'

function PasswordInput({ errors, register, validation, className, placeholder }: any) {
    const [passwordType, setPasswordType] = useState(false)
    return (
        <div className={`${className} h-[86px]`}>
            <label htmlFor="password" className="mt-3 flex font-semibold">
                <div className="flex w-full items-baseline justify-between">
                    <p>Password</p>
                    <p className="text-xs text-hypay-gray">Esqueceu sua senha?</p>
                </div>
            </label>
            <div
                className={`mt-1 flex items-center justify-between gap-2 rounded-md border-[1px] ${
                    errors['password']?.type ? 'border-red-600' : 'border-hypay-gray'
                } h-[34px] px-2`}
            >
                <input
                    type={passwordType ? 'text' : 'password'}
                    {...register('password', { ...validation })}
                    className="h-full w-full border-none bg-white bg-transparent outline-none"
                    placeholder={placeholder}
                />
                <CloseEyeIcon
                    onClick={() => {
                        setPasswordType(!passwordType)
                    }}
                />
            </div>

            {!Object.keys(errors).length && (
                <p className="mt-2 text-right text-xs font-semibold text-hypay-orange">
                    Deve conter no mínimo 6 caracteres
                </p>
            )}

            {errors.password ? (
                errors.password.type == 'minLength' ? (
                    <p className="mt-2 text-right text-xs font-semibold text-hypay-orange">
                        Deve conter no mínimo 6 caracteres
                    </p>
                ) : (
                    <p className="text-sm text-red-600">This field is required!</p>
                )
            ) : (
                ''
            )}
        </div>
    )
}

export default PasswordInput
