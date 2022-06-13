import React, { useState } from 'react'
import { NextPage } from 'next'
import Link from 'next/link'
import { PrimaryLayout } from '../../../../components/Layout'
import { SettingsMenuItemList } from '../../../../lib/data'
import { Button } from '../../../../components/Button'
import { useForm } from 'react-hook-form'
import { SecondInput } from '../../../../components/form'
import { LockIcon, OpenLinkIcon, QuestionMarkIcon } from '../../../../components/Icons'

const General: NextPage = () => {
    const [saveEdit, setSaveEdit] = useState([])
    const { register } = useForm<any>()
    return (
        <PrimaryLayout currentTabIndex={6} menuItemList={SettingsMenuItemList} isPrimary={false}>
            <div>
                {saveEdit && (
                    <header className="mb-4 flex items-center justify-center">
                        <div className="mt-10 flex w-1/2 flex-col items-center justify-center lg:w-1/4">
                            <LockIcon size={38} />
                            <h2 className="my-2 font-bold capitalize">Atualize seu plano</h2>
                            <p className="p-1 text-center md:w-11/12">
                                O acesso a esse recurso só é possível a partir no Plano Champion
                            </p>

                            <Button className="m-2 w-11/12 bg-hypay-pink text-white">
                                <Link href="/dashboard/settings/general/instructions">
                                    <a className="capitalize">Saiba mais</a>
                                </Link>
                            </Button>
                        </div>
                    </header>
                )}
            </div>

            <div>
                <main className="flex flex-col items-center justify-between gap-8 border-hypay-gray text-gray-500  md:m-10 md:items-start md:border md:border-dotted md:p-4 ">
                    <section className=" w-full border  border-gray-300 px-2 pb-20 md:w-4/5">
                        <div>
                            <h2 className="mb-4 text-lg font-bold">Google Analytics</h2>
                            <h2 className="mb-2 text-sm font-bold"> Código do Google Analytics</h2>
                            <SecondInput
                                className="mt-5  w-full items-end md:my-0 "
                                name="productname"
                                register={register}
                                type="text"
                            />
                        </div>
                        <div className="start flex items-center ">
                            <div className="mr-12 flex  items-center">
                                <QuestionMarkIcon />
                                <p className="ml-2">Dúvidas?</p>
                            </div>
                            <div className="flex items-center">
                                <OpenLinkIcon />
                                <p className="ml-2">Saiba como vincular</p>
                            </div>
                        </div>
                    </section>
                    <section className="w-full border-gray-300 px-2 pb-20 md:w-4/5 md:border ">
                        <div>
                            <h2 className="mb-4 text-lg font-bold">Google Analytics</h2>
                            <h2 className="mb-2 text-sm font-bold"> Código do Google Analytics</h2>
                            <SecondInput
                                className="mt-5  w-full items-end md:my-0 "
                                name="productname"
                                register={register}
                                type="text"
                            />
                        </div>
                        <div className="start flex  items-center">
                            <div className="mr-12 flex items-center">
                                <QuestionMarkIcon />
                                <p className="ml-2">Dúvidas?</p>
                            </div>
                            <div className="flex items-center">
                                <OpenLinkIcon />
                                <p className="ml-2">Saiba como vincular</p>
                            </div>
                        </div>
                    </section>
                    <section className="w-full px-2 pb-20 md:w-4/5 ">
                        <div>
                            <h2 className="mb-4 text-lg font-bold">Outros códigos de conversão</h2>
                            <h2 className="mb-2 text-sm font-bold"> Código do Google Analytics</h2>
                            <SecondInput
                                className="mt-5  w-full items-end md:my-0 "
                                name="productname"
                                register={register}
                                type="text"
                            />
                        </div>
                        <div className="start flex  items-center ">
                            <div className="mr-12 flex items-center">
                                <QuestionMarkIcon />
                                <p className="ml-2">Dúvidas?</p>
                            </div>
                            <div className="flex items-center">
                                <OpenLinkIcon />
                                <p className="ml-2">Saiba como vincular</p>
                            </div>
                        </div>
                    </section>
                    <section className="w-full border-gray-300 px-2 px-2 pb-20 pb-20 md:w-4/5 md:border  ">
                        <div>
                            <h2 className="mb-3 text-lg font-bold">Conversões para Google e Facebook</h2>
                            <p className="mb-3 text-lg">
                                Escolha em que momento deseja medir as conversões das suas campanhas
                            </p>
                            <h4 className="text-lg">Meça quando:</h4>
                        </div>
                        <div className="my-4 flex">
                            <div className="mr-4 flex h-6 w-6 items-center justify-center rounded-full border bg-white">
                                <span className="h-4 w-4 rounded-full border bg-black"></span>
                            </div>
                            <p>O pedido tiver o pagamento confirmado</p>
                        </div>
                        <div className="flex ">
                            <span className="mr-4 h-6 w-6 rounded-full border bg-white"></span>
                            <p>O check</p>
                        </div>
                    </section>
                    <div className="flex md:w-4/5 md:items-end md:justify-end">
                        <Button
                            className={`${saveEdit ? 'bg-hypay-gray' : 'bg-hypay-red'} capitalize text-white md:w-1/4`}
                        >
                            Salvar Alterações
                        </Button>
                    </div>
                </main>
            </div>
        </PrimaryLayout>
    )
}

export default General
