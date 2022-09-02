import React from 'react'
import { COLORS } from '../../lib/constants/colors'
import { FacebookIcon, InstagramIcon } from '../Icons'
import { NextLink } from '../Links'
import { Logo } from '../Logo'

export const LandingPageFooter = () => (
    <footer className="grid h-[412px] place-items-center bg-hypay-primary py-3 px-6 ">
        <div className="h-[80%] w-[100%]  md:w-[58%]">
            <div className="flex h-[80%] flex-col-reverse items-center justify-start md:flex-row">
                <div className="mt-3 h-full w-full md:mt-0 md:w-[40%]">
                    <ul>
                        <li className="mb-3 font-bold tracking-wide text-white">
                            <NextLink href="/">Hypay</NextLink>{' '}
                        </li>
                        <li className="mb-3 tracking-wide text-white">
                            <NextLink href="#solution">Solução</NextLink>
                        </li>
                        <li className="mb-3 tracking-wide text-white">
                            <NextLink href="#function">Como funciona</NextLink>
                        </li>
                        <li className="mb-3 tracking-wide text-white">
                            {' '}
                            <NextLink href="#benefit">Benefícios</NextLink>
                        </li>
                        <li className="text-underline mb-3 w-min border-b border-hypay-pink tracking-wide text-hypay-pink">
                            <a href="mailto:support@pepperest.com">Suporte</a>
                        </li>
                    </ul>
                </div>
                <div className="items-base-line flex h-full  w-full  justify-between py-5 md:w-[60%] md:py-0">
                    <div className="flex  w-[40%] items-center justify-between md:justify-evenly">
                        <InstagramIcon color={COLORS.WHITE} size={43} />
                        <FacebookIcon color={COLORS.PRIMARY} size={43} />
                    </div>
                    <div className="flex w-[50%] items-center justify-end">
                        <Logo color={COLORS.WHITE} labelColor="text-white" labelled={{ labelPosition: 'bottom' }} />
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap items-center justify-between border-hypay-secondary pt-4 text-sm  text-white md:border-t">
                <NextLink href="/privacy">Política de Privacidade</NextLink>
                <NextLink href="/terms-conditions" className="font-semibold underline md:order-3 ">
                    Termos e Condições
                </NextLink>
                <p className=" mx-auto mt-4 font-normal md:order-2 md:mx-0 md:mt-0">
                    Copyright © {new Date().getFullYear()} Todos os Direitos Reservados
                </p>
            </div>
        </div>
    </footer>
)
