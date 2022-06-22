import React from 'react'
import { Card } from '../../../components/Card'
import { StarIcon, TrashCanIcon } from '../../../components/Icons'
import { PrimaryLayout } from '../../../components/Layout'
import { NextLink } from '../../../components/Links'
import { useMessages } from '../../../hooks/useMessages'
import { MessageThread } from '../../../interfaces/messages'
import { COLORS } from '../../../lib/constants/colors'
import { dummyMessages } from '../../../lib/data'

type messageCardProps = {
    messageDetails: {
        messageThread: MessageThread
        index: number
    }
}

export const MessagesCard = ({ messageDetails }: messageCardProps) => {
    const { messages } = messageDetails.messageThread
    const { from, message, attachment, time, to } = messages[0]

    return (
        <div>
            <Card className="my-3 hidden items-center justify-between rounded-md p-3 pl-8 text-sm shadow-xl md:flex">
                <div className="flex w-[20%] items-center justify-start text-left">
                    <input type="checkbox" className="mr-3 h-4 w-4 border-[5px] border-black" />
                    <label className="font-light ">{to}</label>
                </div>
                <div className="w-[40%] pl-3">
                    <p>{message}</p>
                </div>
                <div className="flex w-[20%] items-center justify-between">
                    <NextLink href={`/dashboard/messages/${messageDetails.index}`}>
                        <p className="mr-3 cursor-pointer font-bold text-hypay-pink">Responder</p>
                    </NextLink>
                    <div className="mr-2 cursor-pointer">
                        <TrashCanIcon size={18} />
                    </div>
                    <div className="mr-2 cursor-pointer">
                        <StarIcon size={18} />
                    </div>
                </div>
                <div className="flex w-[20%] justify-end gap-x-3 text-sm">
                    <p className="">{time}</p>
                    {/* <p className="">{date}</p> */}
                </div>
            </Card>
            {/* Mobile screen cards designs starts here */}
            <Card className="my-3 flex flex-col items-stretch justify-between rounded-md p-3  text-sm shadow-xl md:hidden">
                <div className="item-center flex justify-between">
                    <p>{to}</p>
                    <div className="flex gap-x-3 text-sm">
                        <p>{time}</p>
                        {/* <p>{date}</p> */}
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <div>
                        <NextLink href={`/dashboard/messages/${messageDetails.index}`}>
                            <b>{message}</b>
                        </NextLink>
                        <p>Olá, gostaria de saber quel é o...</p>
                    </div>
                    <div className="mr-2 cursor-pointer self-end">
                        <TrashCanIcon size={18} color={COLORS.YELLOW} />
                    </div>
                </div>
            </Card>
        </div>
    )
}

function Messages() {
    const { messageThreads } = useMessages()

    return (
        <PrimaryLayout>
            <div className="mx-auto py-4 px-4 leading-5 md:px-8 lg:px-24">
                <div className="md:w-10/12">
                    <header className="mb-10 flex items-center justify-between md:items-center">
                        <div className="flex flex-col items-start justify-between md:w-full md:flex-row md:items-center">
                            <h2 className="text-2xl font-bold">Mensagens</h2>
                            <p className="text-md mt-4 font-semibold  md:mt-0">Marcar todas como lida</p>
                        </div>
                        <div className="mr-2 block cursor-pointer md:hidden">
                            <StarIcon size={28} />
                        </div>
                    </header>
                    <main className="">
                        {messageThreads.map((messageThread, index) => (
                            <MessagesCard key={messageThread.thread_id} messageDetails={{ messageThread, index }} />
                        ))}
                    </main>
                </div>
            </div>
        </PrimaryLayout>
    )
}

export default Messages
