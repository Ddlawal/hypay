import React, { useState } from 'react'
import { NextPage } from 'next'
import { PrimaryLayout } from '../../../components/Layout'
import { SettingsMenuItemList } from '../../../lib/data'
import { LockIcon } from '../../../components/Icons'
import { Button } from '../../../components/Button'

const Notification: NextPage = () => {
    const [toggleNotifications, setToggleNotifications] = useState(false)
    return (
        <PrimaryLayout menuItemList={SettingsMenuItemList} isPrimary={false}>
            <div className="px-4 py-4 md:w-11/12 md:px-12">
                <header>
                    <h1 className="text-3xl font-bold">Notificações</h1>

                    <div className="my-6 flex items-center justify-start">
                        <div
                            onClick={() => setToggleNotifications(!toggleNotifications)}
                            className={`${
                                toggleNotifications ? 'justify-end' : 'justify-start'
                            } relative flex h-[26px] w-[58px] cursor-pointer items-center rounded-full bg-hypay-gray transition duration-500 ease-in-out`}
                        >
                            <span className="absolute h-[30px]  w-[30px] rounded-full bg-white"></span>
                        </div>
                    </div>
                </header>

                <main>
                    {/* the table */}
                    <section className="flex items-start justify-between">
                        <div className="w-6/12 py-8">
                            <header className="invisible mb-5  flex flex-col items-center">
                                <input type="radio" name="email" id="email" className="mb-4 h-[30px] w-[30px]" />

                                <label htmlFor="email" className="text-md font-bold text-hypay-primary">
                                    E-mail
                                </label>
                            </header>
                            <main>
                                <div className="border-b border-hypay-gray py-3">
                                    <p className="text-md">Pagamentos de banco</p>
                                </div>
                                <div className="border-b border-hypay-gray py-3">
                                    <p className="text-md">Recibos</p>
                                </div>
                                <div className="border-b border-hypay-gray py-3">
                                    <p className="text-md">Enviar recibos ao cliente</p>
                                </div>
                                <div className="border-b border-hypay-gray py-3">
                                    <p className="text-md">Enviar código de rastreio ao cliente</p>
                                </div>
                            </main>
                        </div>
                        <div className="w-[16.6%] py-8">
                            <header className="mb-5 flex flex-col items-center">
                                <input type="radio" name="email" id="email" className="mb-4 h-[30px] w-[30px]" />

                                <label htmlFor="email" className="text-md font-bold text-hypay-primary">
                                    E-mail
                                </label>
                            </header>
                            <main>
                                <div className="border-b border-hypay-gray  py-3 text-center">
                                    <input type="checkbox" name="pagamentos" id="pagamentos" />
                                </div>
                                <div className="border-b border-hypay-gray  py-3 text-center">
                                    <input type="checkbox" name="pagamentos" id="pagamentos" />
                                </div>
                                <div className="border-b border-hypay-gray  py-3 text-center">
                                    <input type="checkbox" name="pagamentos" id="pagamentos" />
                                </div>
                                <div className="border-b border-hypay-gray  py-3 text-center">
                                    <input type="checkbox" name="pagamentos" id="pagamentos" />
                                </div>
                            </main>
                        </div>
                        <div className="w-[16.6%] py-8">
                            <header className="mb-5 flex flex-col items-center">
                                <input
                                    type="radio"
                                    name="dashboard"
                                    id="dashboard"
                                    className="mb-4 h-[30px] w-[30px]"
                                />

                                <label htmlFor="dashboard" className="text-md font-bold text-hypay-primary">
                                    Dashboard
                                </label>
                            </header>
                            <main>
                                <div className="border-b border-hypay-gray  py-3 text-center">
                                    <input type="checkbox" name="pagamentos" id="pagamentos" />
                                </div>
                                <div className="border-b border-hypay-gray  py-3 text-center">
                                    <input type="checkbox" name="pagamentos" id="pagamentos" />
                                </div>
                                <div className="border-b border-hypay-gray  py-3 text-center">
                                    <input type="checkbox" name="pagamentos" id="pagamentos" />
                                </div>
                                <div className="border-b border-hypay-gray  py-3 text-center">
                                    <input type="checkbox" name="pagamentos" id="pagamentos" />
                                </div>
                            </main>
                        </div>
                        <div className="w-[16.6%] border border-hypay-gray py-8">
                            <header className="mb-5 flex flex-col items-center">
                                <input type="radio" name="whatsapp" id="whatsapp" className="mb-4 h-[30px] w-[30px]" />

                                <label htmlFor="whatsapp" className="text-md font-bold text-hypay-primary opacity-50">
                                    Whatsapp
                                </label>
                            </header>
                            <main>
                                <div className="border-b border-hypay-gray  py-[0.74rem] text-center">
                                    <input type="checkbox" name="pagamentos" id="pagamentos" />
                                </div>
                                <div className="border-b border-hypay-gray  py-[0.74rem] text-center">
                                    <input type="checkbox" name="pagamentos" id="pagamentos" />
                                </div>
                                <div className="border-b border-hypay-gray  py-[0.74rem] text-center">
                                    <input type="checkbox" name="pagamentos" id="pagamentos" />
                                </div>
                                <div className="border-b border-hypay-gray  py-3 text-center">
                                    <input type="checkbox" name="pagamentos" id="pagamentos" />
                                </div>
                            </main>
                        </div>
                    </section>
                </main>

                <footer className="mt-2 flex items-center justify-end">
                    <div className="w-[16%]  text-center">
                        <span className="my-2 flex items-center justify-center">
                            <LockIcon size={34} />
                        </span>
                        <p>Atualize seu plano</p>
                        <span className="text-[0.7rem] leading-[0.5rem]">
                            O acesso a esse recurso só é possível a partir no Plano Champion
                        </span>
                        <Button className="w-full text-center" primary>
                            Saiba mais
                        </Button>
                    </div>
                </footer>
            </div>
        </PrimaryLayout>
    )
}

export default Notification
