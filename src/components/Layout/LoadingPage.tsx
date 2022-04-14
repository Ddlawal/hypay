import React from 'react'
import { LoaderIcon } from '../Icons'

export const LoadingPage = ({ label }: { label?: string }) => {
    return (
        <div className="flex h-screen w-full flex-col items-center justify-center">
            <LoaderIcon />
            {label ? label : <p className="font-b0ld text-center text-base">Loading</p>}
        </div>
    )
}
