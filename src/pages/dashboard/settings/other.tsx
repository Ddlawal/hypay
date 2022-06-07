import React from 'react'
import { NextPage } from 'next'
import { PrimaryLayout } from '../../../components/Layout'
import { SettingsMenuItemList } from '../../../lib/data'
import { Button } from '../../../components/Button'

const Other: NextPage = () => {
    return (
        <PrimaryLayout currentTabIndex={3} menuItemList={SettingsMenuItemList} isPrimary={false}>
            <div className="relative min-h-[80vh] px-4 py-4 md:w-full md:px-12">
                <div className="md:w-10/12">
                    <header>
                        <h1 className="text-3xl font-bold">Domínios</h1>
                    </header>

                    <main>
                        <table className="my-2 w-full border-collapse overflow-hidden rounded-md border-2 bg-white py-5">
                            <thead className="mb-10 border-b-2 border-gray-200  px-6 py-10">
                                <tr className="text-md font-bold text-hypay-secondary">
                                    <td>Nome do domínio</td>
                                    <td>Data adicionada</td>
                                    <td>Provedor</td>
                                    <td>Status</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="py-3">
                                    <td>rafaelito.com</td>
                                    <td>21 de janeiro de 2022</td>
                                    <td>HyPay</td>
                                    <td>
                                        <Button className="border border-green-400 bg-white px-5 py-2 text-green-400 outline-none">
                                            Active
                                        </Button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </main>
                </div>
                <footer className="absolute bottom-0 w-full ">
                    <p className="text-center ">
                        O direcionamento automatico de domínio está desasbilitado.{' '}
                        <span className="text-hypay-secondary">Editar na loja virtual.</span>
                    </p>
                </footer>
            </div>
        </PrimaryLayout>
    )
}

export default Other
