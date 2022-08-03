import { EditorState } from 'draft-js'
import React, { useEffect, useState } from 'react'
import cx from 'classnames'

import { Button } from '../../../components/Button'
import { Card } from '../../../components/Card'
import { LoaderIcon, StarIcon, TrashCanIcon } from '../../../components/Icons'
import { PrimaryLayout } from '../../../components/Layout'
import { RichText } from '../../../components/RichText'
import { useMessages } from '../../../hooks/useMessages'
import { useSnackbar } from '../../../hooks/useSnackbar'
import { MessageData, MessageThread } from '../../../interfaces/messages'
import { COLORS } from '../../../lib/constants/colors'
import { useMediaQuery } from '../../../hooks/useMediaQuery'
import { ArrowLeftIcon } from '../../../components/Icons/ArrowLeftIcon'
import { NextPage } from 'next'

type messageCardProps = {
    active: boolean
    messageThread: MessageThread
    onClick: () => void
}

type ThreadMessagesProps = {
    thread_id: number
}

export const ThreadList = ({ active, messageThread: { messages }, onClick }: messageCardProps) => {
    const { message, time, to } = messages[0]

    return (
        <button onClick={onClick} className="mb-4 w-full">
            <Card
                elevation={active ? 'md' : 'none'}
                padding="px-4 py-2"
                className={cx(
                    active && 'bg-blue-50',
                    'hidden items-start justify-start gap-x-4 rounded-md text-sm md:flex'
                )}
            >
                <div className="flex h-full items-start pt-1">
                    <input
                        type="checkbox"
                        className="h-4 w-4 cursor-pointer border-[5px] border-black"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
                <div className="flex w-full flex-col">
                    <div className="flex items-center justify-between">
                        <div className="">{to}</div>
                        <div className="">{time}</div>
                    </div>
                    <div className="flex items-center justify-between">
                        <div>{message}</div>
                        <div className="flex items-center gap-1">
                            <div className="box-border rounded-full px-2 py-2 hover:bg-gray-50">
                                <TrashCanIcon size={18} />
                            </div>
                            <div className="box-border rounded-full px-2 py-2 hover:bg-gray-50">
                                <StarIcon size={18} />
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
            {/* Mobile screen cards designs starts here */}
            <Card className="mb-3 flex flex-col items-stretch justify-between rounded-md p-3 text-sm shadow-xl md:hidden">
                <div className="item-center flex justify-between">
                    <b>{to}</b>
                    <div className="flex gap-x-3 text-sm">
                        <p>{time}</p>
                        {/* <p>{date}</p> */}
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <div>
                        <span>{message}</span>
                    </div>
                    <div className="mr-2 cursor-pointer self-end">
                        <TrashCanIcon size={18} color={COLORS.YELLOW} />
                    </div>
                </div>
            </Card>
        </button>
    )
}

const ThreadMessages = ({ thread_id }: ThreadMessagesProps) => {
    const [editorState, setEditorSatte] = useState<EditorState>(() => EditorState.createEmpty())
    const [thread, setThread] = useState<MessageThread>()
    const [isSendingMessage, setIsSendingMessage] = useState(false)

    const { getThread, isLoadingOne: isLoading, sendMessage } = useMessages()
    const { showErrorSnackbar, showSuccessSnackbar } = useSnackbar()

    useEffect(() => {
        const fetchData = async () => {
            const thread = await getThread({ thread_id }).unwrap()
            setThread(thread ?? [])
        }

        fetchData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [thread_id])

    const handleSendMessage = async () => {
        if (isSendingMessage) {
            return
        }

        setIsSendingMessage(true)
        const messageData: MessageData = {
            message: editorState.getCurrentContent().getPlainText(),
            thread_id: `${thread?.thread_id}`,
            receiver_id: '1',
        }

        try {
            const payload = await sendMessage(messageData)
            if (payload) {
                setThread((prev) => {
                    return { thread_id: prev?.thread_id as number, messages: payload }
                })
                showSuccessSnackbar('Message sent!')
                setEditorSatte(() => EditorState.createEmpty())
            } else {
                showErrorSnackbar('Error! Message not sent!')
            }
        } catch (error) {
            console.log(error)
            showErrorSnackbar('Error! Message not sent!')
        } finally {
            setIsSendingMessage(false)
        }
    }

    return isLoading ? (
        <div className="mt-8 flex justify-center">
            <LoaderIcon />
        </div>
    ) : (
        <div className="leading-5">
            <section className="mb-8 h-[75vh] w-full md:overflow-scroll">
                <Card className="shadow-md" padding="p-2 pb-5 w-full mb-4" rounded>
                    <h1 className="text-md">
                        <b>{thread?.messages[0].to}</b>
                    </h1>
                    <p>{thread?.messages[0].time}</p>

                    <div className="mt-5">
                        <p>
                            <b>Titulo:</b> Meu produto veio errado!
                        </p>
                        <p>
                            <b>Mensagem:</b> {thread?.messages[0].message}
                        </p>
                    </div>
                </Card>

                <div className="mb-8">
                    {thread
                        ? [...thread.messages].slice(1, thread.messages.length).map(({ message, time }, i) => {
                              return (
                                  <div key={i} className="mb-3 flex justify-end gap-x-4">
                                      <Card key={i} className="max-w-md" padding="px-4 py-2" bg="bg-blue-50" rounded>
                                          <div className="text-xs">
                                              You: <span className="text-[10px] text-hypay-placeholder">{time}</span>
                                          </div>
                                          <div>{message}</div>
                                      </Card>
                                  </div>
                              )
                          })
                        : null}
                </div>

                <RichText editorState={editorState} setEditorState={setEditorSatte} />
                <div className="flex justify-end md:justify-start">
                    <Button
                        primary
                        size="md"
                        className="my-6 flex h-10 w-[8rem] items-center justify-center"
                        padding="px-6 py-2"
                        onClick={() => handleSendMessage()}
                    >
                        {isSendingMessage ? <LoaderIcon size={28} color={COLORS.WHITE} /> : 'Responder'}
                    </Button>
                </div>
            </section>
        </div>
    )
}

const Messages: NextPage = () => {
    const [messageThreads, setMessageThreads] = useState<Array<MessageThread>>([])
    const { getMessageThreads, isLoading } = useMessages()
    const isDesktop = useMediaQuery('md')
    const [activeThread, setActiveThread] = useState<number | null>(null)

    useEffect(() => {
        const fetchData = async () => {
            const result = await getMessageThreads().unwrap()
            setMessageThreads(result ?? [])
        }

        fetchData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <PrimaryLayout className="mb-6" isLoading={isLoading}>
            <div className="mx-auto py-4 px-4 leading-5 md:px-8">
                <header className="mb-2 flex items-center justify-between md:mb-10 md:items-center">
                    <div className="flex flex-col items-start justify-between md:w-full md:flex-row md:items-center">
                        <h2 className="text-2xl font-bold">Mensagens</h2>
                    </div>
                    {messageThreads.length ? (
                        <div className="mr-2 block cursor-pointer md:hidden">
                            <StarIcon size={28} />
                        </div>
                    ) : null}
                </header>
                {messageThreads.length ? (
                    <div className="pt-3 pb-2">
                        {!isDesktop ? <ArrowLeftIcon size={20} onClick={() => setActiveThread(null)} /> : null}
                    </div>
                ) : null}
                {messageThreads.length ? (
                    <main className="grid grid-cols-12 gap-2">
                        <div className="col-span-12 h-[75vh] w-full overflow-scroll md:col-span-5 md:pr-2">
                            {activeThread !== null && !isDesktop ? (
                                <ThreadMessages thread_id={messageThreads[activeThread].thread_id} />
                            ) : (
                                messageThreads.map((messageThread, i) => (
                                    <ThreadList
                                        key={messageThread.thread_id}
                                        active={activeThread === i}
                                        messageThread={messageThread}
                                        onClick={() => setActiveThread(i)}
                                    />
                                ))
                            )}
                        </div>
                        <div className="col-span-7 hidden md:block">
                            {activeThread === null ? (
                                <div className="mt-8 text-center">No thread selected</div>
                            ) : (
                                <ThreadMessages thread_id={messageThreads[activeThread].thread_id} />
                            )}
                        </div>
                    </main>
                ) : (
                    <div className="mt-8 text-center text-hypay-pink">You don't have any messages yet</div>
                )}
            </div>
        </PrimaryLayout>
    )
}

export default Messages
