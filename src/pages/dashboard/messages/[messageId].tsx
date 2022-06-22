import React from 'react'
import { PrimaryLayout } from '../../../components/Layout'
import { LeftArrowIcon } from '../../../components/Icons'
import { Card } from '../../../components/Card'
import { useRouter } from 'next/router'
import { Button } from '../../../components/Button'
import { dummyMessages, dummyMessagesType } from '../../../lib/data'
import { RichText } from '../../../components/RichText'

type paramsType = {
    messageId: string
    name: string
    message: string
    time: string
    date: string
}

export async function getStaticPaths() {
    const paths: {
        params: paramsType
    }[] = dummyMessages.map((path, index) => ({ params: { ...path, messageId: `${index}` } }))
    return { paths, fallback: false }
}

export async function getStaticProps({ params }: any) {
    const data: dummyMessagesType = dummyMessages[params.messageId]
    return {
        props: {
            data,
        },
    }
}

function Message({ data }: any) {
    const { back } = useRouter()
    const { name, message, time, date } = data

    return (
        <PrimaryLayout>
            <div className="mx-auto  py-4 px-4 leading-5 md:px-8 lg:px-24">
                <section className="mb-8 flex items-start gap-x-2 md:w-9/12">
                    <div className="cursor-pointer pt-2" onClick={() => back()}>
                        <LeftArrowIcon />
                    </div>
                    <Card className="shadow-md" padding="p-2 pb-5" rounded>
                        <h1 className="text-md">
                            <b>{name}</b>
                        </h1>
                        <p>
                            {time} as {date}
                        </p>

                        <div className="mt-5">
                            <p>
                                <b>Titulo:</b> {message}
                            </p>
                            <p>
                                <b>Mensagem:</b> Preciso de ajuda com um pedido, pois chegou outra coisa aqui na minha
                                casa no nome de outra pessoa!!!
                            </p>
                        </div>
                    </Card>
                </section>
                <div className="pl-4  md:w-9/12">
                    <RichText />
                    <div className="flex justify-end md:justify-start">
                        <Button onClick={() => back()} className="my-6 py-3 px-6 text-2xl" size="lg" primary>
                            Responder
                        </Button>
                    </div>
                </div>
            </div>
        </PrimaryLayout>
    )
}

export default Message
