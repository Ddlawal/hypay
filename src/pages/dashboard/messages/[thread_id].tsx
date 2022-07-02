import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { EditorState } from 'draft-js'

import { PrimaryLayout } from '../../../components/Layout'
import { LeftArrowIcon } from '../../../components/Icons'
import { Card } from '../../../components/Card'
import { Button } from '../../../components/Button'
import { dummyMessages } from '../../../lib/data'
import { RichText } from '../../../components/RichText'
import { useMessages } from '../../../hooks/useMessages'
import { Message, MessageData } from '../../../interfaces/messages'
import { useSnackbar } from '../../../hooks/useSnackbar'
import { messageApi } from '../../../store/services/messages'
import { dispatch } from 'react-hot-toast/dist/core/store'

type paramsType = {
    thread_id: string
}

// export async function getStaticPaths() {
//     const paths: {
//         params: paramsType
//     }[] = dummyMessages.map((path, index) => ({ params: { ...path, thread_id: `${index}` } }))

//     const result = messageApi.endpoints.getAllMessages.select()()
//     const { data, status, error } = result
//     console.log('uuuuuuuuuuuuuuuuuuuuu', result)
//     return { paths, fallback: false }
// }

export async function getServerSideProps({ params }: any) {
    return {
        props: {
            thread_id: params.thread_id,
        },
    }
}

function Message({ thread_id }: { thread_id: number }) {
    const { back } = useRouter()
    const [editorState, setEditorSatte] = useState<EditorState>(() => EditorState.createEmpty())

    const { thread, isLoading, sendMessage } = useMessages(thread_id)
    const { showErrorSnackbar, showSuccessSnackbar } = useSnackbar()

    const handleSendMessage = async () => {
        const messageData: MessageData = {
            message: editorState.getCurrentContent().getPlainText(),
            thread_id: `${thread?.thread_id}`,
            receiver_id: '1',
        }

        const sent = await sendMessage(messageData)
        if (sent) {
            showSuccessSnackbar('Message sent!')
            setEditorSatte(() => EditorState.createEmpty())
        } else {
            showErrorSnackbar('Error! Message not sent!')
        }
    }

    return (
        <PrimaryLayout className="mb-0" isLoading={isLoading}>
            <div className="mx-auto flex gap-x-3 px-4 pt-4 leading-5 md:w-10/12 md:px-8 lg:px-24">
                <div className="cursor-pointer pt-2" onClick={() => back()}>
                    <LeftArrowIcon />
                </div>
                <section className="mb-8 h-[85vh] w-full overflow-scroll px-2">
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
                                          <Card key={i} padding="px-4 py-2" rounded bg="bg-blue-50">
                                              <div className="text-xs">
                                                  You:{' '}
                                                  <span className="text-[10px] text-hypay-placeholder">{time}</span>
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
                            onClick={() => handleSendMessage()}
                            className="my-6 py-3 px-6 text-2xl"
                            size="lg"
                            primary
                        >
                            Responder
                        </Button>
                    </div>
                </section>
            </div>
        </PrimaryLayout>
    )
}

export default Message
