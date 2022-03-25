import React from 'react'
import { OpenLinkIcon } from '../../../components/Icons'
import { PrimaryLayout } from '../../../components/Layout'
import { useMediaQuery } from '../../../hooks/useMediaQuery'
import { COLORS } from '../../../lib/constants/colors'

const Home = () => {
    const isDesktop = useMediaQuery('md')

    return (
        <PrimaryLayout>
            <div className="md:text-md flex items-center justify-center bg-hypay-green text-center text-xs leading-6 text-white">
                Veja sua loja antes dela ser publicada
                <button className="rounded-full p-2 transition duration-200 ease-in-out hover:scale-105 hover:shadow-sm">
                    <OpenLinkIcon size={isDesktop ? 18 : 12} color={COLORS.WHITE} />
                </button>
            </div>
            <div className="p-4">
                <strong>Bem vindo ao Hypay</strong>
            </div>
        </PrimaryLayout>
    )
}

export default Home
