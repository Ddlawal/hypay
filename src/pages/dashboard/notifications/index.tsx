import Image from 'next/image'
import React from 'react'
import { Card } from '../../../components/Card'
import { StarIcon, TrashCanIcon } from '../../../components/Icons'
import { PrimaryLayout } from '../../../components/Layout'
import { COLORS } from '../../../lib/constants/colors'

const notificationData = {
    Hoje: [
        { name: 'Rafael Cardoso', time: '09:01h', latest: false },
        { name: 'Camisa Polo Branca', time: '09:01h', latest: true },
    ],
    Ontem: [
        { name: 'Rafael Cardoso', time: '09:01h', latest: false },
        { name: 'Camisa Amarela', time: '09:01h', latest: true },
        { name: 'Vitória Silva', time: '09:01h', latest: true },
    ],
    '01/02': [
        { name: 'Camisa Polo Branca', time: '09:01h', latest: false },
        { name: 'Kit de Maquiagem', time: '09:01h', latest: true },
        { name: 'Rafael Cardoso', time: '09:01h', latest: false },
        { name: 'Calça Jeans Marfinno', time: '09:01h', latest: true },
    ],
}

function index() {
    return (
        <PrimaryLayout>
            <div className="mx-auto py-4 px-4 leading-5 md:px-8 lg:px-24">
                <div className="md:w-10/12">
                    <header className="mb-10 flex items-center justify-between md:items-center">
                        <div className="flex flex-col items-start justify-between md:w-full md:flex-row md:items-center">
                            <h2 className="text-2xl font-bold">Notificações</h2>
                            <p className="text-md mt-4 font-semibold  md:mt-0">Marcar todas como lida</p>
                        </div>
                        <div className="mr-2 block cursor-pointer md:hidden">
                            <StarIcon size={28} />
                        </div>
                    </header>
                    <main className="">
                        {Object.entries(notificationData).map(([heading, details], index) => (
                            <div key={index}>
                                <h2 className="mt-6 font-semibold">{heading}</h2>

                                {details.map((notify, index) => (
                                    <div key={index}>
                                        <Card
                                            padding="px-2 py-3"
                                            className="relative my-3 hidden items-center justify-between gap-x-5 rounded-md shadow-xl md:flex"
                                        >
                                            {notify.latest && (
                                                <span className="absolute top-[-5px] right-0 h-3 w-3 rounded-full bg-hypay-pink"></span>
                                            )}
                                            <div className="flex items-center gap-x-3">
                                                <Image
                                                    className="rounded-[50%]"
                                                    loader={({ src }) => src}
                                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWnQScKMx5KEgFZiQtqXBFX8EuF7GI-DWfsA&usqp=CAU"
                                                    alt="avatar"
                                                    width={40}
                                                    height={40}
                                                    quality={100}
                                                    unoptimized
                                                />
                                                <div>
                                                    <div>
                                                        <p>
                                                            Você recebeu um pagamento de <b>{notify.name}</b>
                                                        </p>
                                                    </div>
                                                    <div>
                                                        <b>09:01h</b>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex gap-x-3">
                                                <div className="mr-2 cursor-pointer">
                                                    <TrashCanIcon color={COLORS.PINK} size={18} />
                                                </div>

                                                <div className="mr-2  cursor-pointer">
                                                    <StarIcon size={18} />
                                                </div>

                                                <input
                                                    type="checkbox"
                                                    className="mr-3 h-4 w-4 border-[5px] border-black"
                                                />
                                            </div>
                                        </Card>
                                        <Card className="items-between my-3 flex flex-col md:hidden" rounded>
                                            <div className="flex items-center gap-x-2">
                                                <Image
                                                    className="rounded-[50%]"
                                                    loader={({ src }) => src}
                                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWnQScKMx5KEgFZiQtqXBFX8EuF7GI-DWfsA&usqp=CAU"
                                                    alt="avatar"
                                                    width={40}
                                                    height={40}
                                                    quality={100}
                                                    unoptimized
                                                />
                                                <p>
                                                    Você recebeu um pagamento de <b>{notify.name}</b>
                                                </p>
                                            </div>
                                            <div className="mt-3 flex items-center justify-between">
                                                <b>{notify.time}</b>
                                                <TrashCanIcon color={COLORS.YELLOW} />
                                            </div>
                                        </Card>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </main>
                </div>
            </div>
        </PrimaryLayout>
    )
}

export default index

{
    /* <div>
                            <h2 className="font-semibold">Hoje</h2>
                            <Card
                                padding="px-2 py-3"
                                className="my-3 flex items-center justify-between gap-x-5 rounded-md shadow-xl"
                            >
                                <div className="flex items-center gap-x-3">
                                    <Image
                                        className="rounded-[50%]"
                                        loader={({ src }) => src}
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWnQScKMx5KEgFZiQtqXBFX8EuF7GI-DWfsA&usqp=CAU"
                                        alt="avatar"
                                        width={40}
                                        height={40}
                                        quality={100}
                                        unoptimized
                                    />
                                    <div>
                                        <div>
                                            <p>
                                                Você recebeu um pagamento de <b> Rafael Cardoso</b>
                                            </p>
                                        </div>
                                        <div>
                                            <b>09:01h</b>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-x-3">
                                    <div className="mr-2 cursor-pointer">
                                        <TrashCanIcon color={COLORS.PINK} size={18} />
                                    </div>

                                    <div className="mr-2  cursor-pointer">
                                        <StarIcon size={18} />
                                    </div>

                                    <input type="checkbox" className="mr-3 h-4 w-4 border-[5px] border-black" />
                                </div>
                            </Card>
                        </div> */
}
