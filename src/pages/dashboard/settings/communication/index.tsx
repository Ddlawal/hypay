import React, { useState } from 'react'
import { NextPage } from 'next'
import { PrimaryLayout } from '../../../../components/Layout'
import { SettingsMenuItemList } from '../../../../lib/data'
import { Card } from '../../../../components/Card'
import Image from 'next/image'
import { Button } from '../../../../components/Button'
import { Input } from '../../../../components/form'
import { CircularPlusIcon, WhatsAppIcon } from '../../../../components/Icons'
import Link from 'next/link'
import { COLORS } from '../../../../lib/constants/colors'

const Communication: NextPage = () => {
    const [enterNumber, setEnterNumber] = useState(false)
    return (
        <PrimaryLayout currentTabIndex={1} menuItemList={SettingsMenuItemList} isPrimary={false}>
            <div>
                <header className="">
                    <h1 className="  ml-3 p-6 text-2xl font-bold md:text-4xl lg:p-8">
                        Auxilie seus clientes de maneira fácil
                    </h1>
                    {enterNumber && (
                        <div className="mb-4 flex items-center justify-center md:p-8 lg:justify-start">
                            <Card className="sm:5/6  flex w-4/5 items-start rounded lg:w-3/5">
                                <WhatsAppIcon size={20} color={COLORS.PINK} />
                                <div className="flex flex-col pl-4">
                                    <h1 className="text-xl font-bold">Iphone 13 Pro Max</h1>
                                    <Input
                                        className=" mr-8 w-full items-end md:my-0 "
                                        name="phoneNumber"
                                        placeholder="+55 (41) 9999-9999"
                                        type="text"
                                        padding="p-0"
                                    />
                                    <h4 className="text-sm text-hypay-pink">Editar</h4>
                                </div>
                            </Card>
                        </div>
                    )}
                </header>
                <main className="flex flex-col items-center px-8 lg:flex-row lg:items-start">
                    <Image
                        className="cursor-pointer border  transition-transform hover:scale-105 "
                        src="/images/two-men-image.png"
                        width="466"
                        height="378"
                        alt="two-men"
                    />
                    <div className=" lg:2/5  w-full sm:w-4/5 md:w-1/2 md:px-10 xl:w-4/5 ">
                        <p className="mb-10 pt-4 text-sm font-normal lg:p-0 xl:text-xl">
                            As dúvidas de seus clientes podem ser esclarecidas atravez de seu contato, transmita
                            confiança para eles permitindo que escrevam mensage para sua loja via WhatsApp, utilizando o
                            icone do app.
                        </p>
                        <Button className=" bg-hypay-pink text-white" padding="p-3">
                            <Link href="/dashboard/settings/communication/whatsappQrCode">
                                <a className="flex items-center">
                                    <CircularPlusIcon />
                                    <p className="ml-1">
                                        {enterNumber ? 'Conectar novo whatsapp' : 'Conectar whatsapp'}
                                    </p>
                                </a>
                            </Link>
                        </Button>
                    </div>
                </main>
            </div>
        </PrimaryLayout>
    )
}

export default Communication
