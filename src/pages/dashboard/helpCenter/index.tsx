import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { PrimaryLayout } from '../../../components/Layout'
import { Card } from '../../../components/Card'
import Image from 'next/image'
import { Input } from '../../../components/form'
import {
    AnalysisIcon,
    DeliveryIcon,
    HeadPhoneIcon,
    SearchIcon,
    SettingsIcon,
    TelephoneIcon,
} from '../../../components/Icons'
import { COLORS } from '../../../lib/constants/colors'

const quickGuides = [
    { title: 'Configure sua loja', icon: <SettingsIcon size={26} color={COLORS.PINK} /> },
    { title: 'Gerencie suas vendas', icon: <TelephoneIcon size={26} color={COLORS.PINK} /> },
    { title: 'Impulsione seu negócio', icon: <AnalysisIcon size={26} color={COLORS.PINK} /> },
    { title: 'Categorize seus produtos', icon: <DeliveryIcon size={26} color={COLORS.PINK} /> },
]

function Index() {
    const { back } = useRouter()
    return (
        <PrimaryLayout>
            <div className="px-4 py-4 md:w-10/12 md:px-12">
                <header className="justify-venter flex items-center gap-x-6  pb-3">
                    <h1 className="text-3xl font-bold">Central de ajuda</h1>
                </header>
                <h1 className="text-1xl my-3 font-bold">Olá, como podemos te ajudar?</h1>

                <div>
                    <Input
                        placeholder="Buscar repostas"
                        fullWidth
                        className="bg-white text-sm"
                        parentClassName="mr-20  md:block"
                        icon={<SearchIcon color={COLORS.PINK} />}
                        type="search"
                        onChange={() => {
                            console.log('what you trying to search for')
                        }}
                    />
                </div>

                <section className="mt-10">
                    <h1 className="text-1xl my-3 font-bold">Guia rápido</h1>

                    <div className="flex items-start gap-x-3">
                        {quickGuides.map((item, index) => {
                            return (
                                <Card
                                    key={index}
                                    className="my-3 flex h-36 w-3/12 flex-col items-center justify-center gap-x-3"
                                    rounded
                                >
                                    {item.icon}
                                    <h1 className="text-md p-3 font-bold">{item.title}</h1>
                                </Card>
                            )
                        })}
                    </div>
                </section>
                <section className="mt-10">
                    <h1 className="text-1xl my-3 font-bold">
                        Não achou o que queria? Entre em contato com nosso suporte
                    </h1>
                    <div className="flex items-start gap-x-3">
                        {quickGuides.slice(0, -3).map((item, index) => {
                            return (
                                <Card
                                    key={index}
                                    className="my-3 flex h-36 w-3/12 flex-col items-center justify-center gap-x-3"
                                    rounded
                                >
                                    <HeadPhoneIcon />
                                    <h1 className="text-md p-3 font-bold">Fale conosco</h1>
                                </Card>
                            )
                        })}
                    </div>
                </section>
            </div>
        </PrimaryLayout>
    )
}

export default Index
