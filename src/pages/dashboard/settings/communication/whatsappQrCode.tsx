import React from 'react'
import { NextPage } from 'next'
import { PrimaryLayout } from '../../../../components/Layout'
import { SettingsMenuItemList } from '../../../../lib/data'
import { Card } from '../../../../components/Card'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useConnectWhatsAppNumberMutation } from '../../../../store/services/settings/notificationSettings'
import { useSnackbar } from '../../../../hooks/useSnackbar'

const Communication: NextPage = () => {
    const { push } = useRouter()
    const [addWhatsAppNumber] = useConnectWhatsAppNumberMutation()
    const { showSuccessSnackbar, showErrorSnackbar } = useSnackbar()
    const {
        query: { qrcode, phone },
    } = useRouter()
    const connectWhatsappNumber = async () => {
        try {
            await addWhatsAppNumber({ phone, qrcode }).unwrap()
            showSuccessSnackbar('Whatsapp Number added successfully')
            push('/dashboard/settings/communication')
        } catch (err) {
            console.log(err)
            showErrorSnackbar('Error adding you whatsapp number')
        }
    }
    return (
        <PrimaryLayout currentTabIndex={1} menuItemList={SettingsMenuItemList} isPrimary={false}>
            <div>
                <header className="">
                    <h1 className="mb-4 p-8 text-4xl">Auxilie seus clientes de maneira fácil</h1>
                </header>
                <main className="flex h-1/2 flex-col items-center">
                    <Card className="my-14 mt-4 w-1/2 rounded-lg border-8 border-hypay-pink sm:w-1/4">
                        {qrcode ? (
                            <Image
                                height="300"
                                width="300"
                                src={qrcode as string}
                                className="cursor-pointer border  transition-transform hover:scale-105"
                                alt="brcode"
                            />
                        ) : (
                            <Image
                                className="cursor-pointer border  transition-transform hover:scale-105"
                                src="/images/qr-code.png"
                                width="300"
                                height="300"
                                alt="brcode"
                            />
                        )}
                    </Card>
                    <Card className="mt-2 flex w-4/5 items-center  justify-center rounded border border-hypay-secondary text-center sm:w-3/5">
                        <h3
                            className="cursor-pointer p-2 font-bold text-hypay-secondary md:p-5"
                            onClick={connectWhatsappNumber}
                        >
                            Conecte sua conta WhatsApp utilizando o QR Code acima
                        </h3>
                    </Card>
                </main>
            </div>
        </PrimaryLayout>
    )
}

export default Communication
