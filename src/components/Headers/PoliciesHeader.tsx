import React from 'react'
import { COLORS } from '../../lib/constants/colors'
import { useRouter } from 'next/router'
import { ArrowLeftIcon } from '../Icons/ArrowLeftIcon'
import { useMediaQuery } from '../../hooks/useMediaQuery'
import { Logo } from '../Logo'
import { NextLink } from '../Links'

type PoliciesHeaderProps = { subHeader: string; mobileHeaderText: string }

export const PoliciesHeader = ({ subHeader, mobileHeaderText }: PoliciesHeaderProps) => {
    const { back } = useRouter()
    const isDesktop = useMediaQuery('md')

    return (
        <div className="w-full">
            {isDesktop ? (
                <>
                    <div className="flex items-center justify-between bg-hypay-primary py-4 px-[10%]">
                        <Logo color={COLORS.WHITE} labelled={{ labelPosition: 'right' }} labelColor="text-white" />

                        <div className="flex items-center gap-x-6">
                            <NextLink href="/" className="font-bold text-white">
                                Home
                            </NextLink>
                            <NextLink href="/privacy" className="font-bold text-white">
                                Privacy
                            </NextLink>
                            <NextLink href="/terms-conditions" className="font-bold text-white">
                                Terms and Conditions
                            </NextLink>
                        </div>
                    </div>
                    <div className="flex items-center justify-between bg-white py-2 px-[10%]">
                        <div className="text-xl font-bold text-hypay-primary">Hypay {subHeader}</div>
                        <div className="flex gap-x-6">
                            <NextLink href="#" target="_blank" className="text-hypay-placeholder hover:text-[#0056b3]">
                                Join Community
                            </NextLink>
                            <NextLink href="#" target="_blank" className="text-hypay-placeholder hover:text-[#0056b3]">
                                Visit Our Blog
                            </NextLink>
                        </div>
                    </div>
                </>
            ) : (
                <div className="flex w-full bg-hypay-primary py-4 px-2">
                    <div className="cursor-pointer">
                        <ArrowLeftIcon onClick={() => back()} size={26} color={COLORS.WHITE} />
                    </div>
                    <div className="w-full pl-6 text-lg font-bold text-white">{mobileHeaderText}</div>
                </div>
            )}
        </div>
    )
}
