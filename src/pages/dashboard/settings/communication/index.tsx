import React, { useEffect, useState } from 'react'
import { NextPage } from 'next'
import { PrimaryLayout } from '../../../../components/Layout'
import { SettingsMenuItemList } from '../../../../lib/data'
import { Card } from '../../../../components/Card'
import Image from 'next/image'
import { Button } from '../../../../components/Button'
import { Input } from '../../../../components/form'
import { CircularPlusIcon, LoaderIcon, WhatsAppIcon } from '../../../../components/Icons'
import { COLORS } from '../../../../lib/constants/colors'
import { useAppDispatch, useAppSelector } from '../../../../hooks/useStoreHooks'
import { showModal } from '../../../../store/reducers/ui'
import AddWhatsappNoModal from '../../../../components/Modals/AddWhatsappNoModal'
import { useLazyGetWhatsAppNumberQuery } from '../../../../store/services/settings/notificationSettings'
import { IUpdatewhatsappNumber, IwhatsappAccounts } from '../../../../interfaces/onlineStore'
import { showErrorSnackbar } from '../../../../lib/helper'

const ADD_WHATSAPP_NO_MODAL = 'ADD_WHATSAPP_NUMBER_MODAL'
const UPDATE_WHATSAPP_NO_MODAL = 'UPDATE_WHATSAPP_NUMBER_MODAL'

const Communication: NextPage = () => {
    const [getUserWhatsappNumber, { isLoading }] = useLazyGetWhatsAppNumberQuery()
    const [AllwhatsappAccounts, setAllWhatsappAccount] = useState<Array<IwhatsappAccounts>>([])
    const { modalType } = useAppSelector((state) => state.ui)
    const dispatch = useAppDispatch()
    const handleWhatsappNumberModal = () => {
        dispatch(showModal({ showModal: true, modalType: ADD_WHATSAPP_NO_MODAL, modalProps: {} }))
    }
    const handleUpdateWhatsappNumberModal = (phoneToUpdate: IUpdatewhatsappNumber) => {
        dispatch(
            showModal({ showModal: true, modalType: UPDATE_WHATSAPP_NO_MODAL, modalProps: { phone: phoneToUpdate } })
        )
    }

    useEffect(() => {
        const fetchNumbers = async () => {
            try {
                const { whatsappAccounts } = await getUserWhatsappNumber().unwrap()
                return setAllWhatsappAccount(whatsappAccounts)
            } catch (error: any) {
                showErrorSnackbar('An error occurred')
            }
        }
        fetchNumbers()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [modalType])

    return (
        <PrimaryLayout currentTabIndex={1} menuItemList={SettingsMenuItemList} isPrimary={false}>
            <div>
                {isLoading ? (
                    <div className="flex h-[30vh] w-full flex-col items-center justify-center">
                        <LoaderIcon />
                        <p className="font-b0ld text-center text-base">loading Whatsapp Number...</p>
                    </div>
                ) : (
                    <header className="">
                        <h1 className="ml-3 p-6 text-2xl font-bold md:text-4xl lg:p-8">
                            Auxilie seus clientes de maneira fácil
                        </h1>
                        <div className="mb-4 flex flex-wrap items-center justify-center gap-3 md:justify-between md:p-8 lg:justify-start">
                            {AllwhatsappAccounts.length
                                ? AllwhatsappAccounts.map((number) => (
                                      <Card
                                          key={number.id}
                                          className="sm:3/12 md:4/12 flex w-4/5 items-start rounded lg:w-3/12"
                                      >
                                          <WhatsAppIcon size={20} color={COLORS.PINK} />
                                          <div className="flex flex-col pl-4">
                                              <h1 className="text-xl font-bold">Iphone 13 Pro Max</h1>
                                              <Input
                                                  className="mr-8 w-full items-end md:my-0"
                                                  name="phoneNumber"
                                                  placeholder="+55 (41) 9999-9999"
                                                  type="text"
                                                  padding="p-0"
                                                  value={number.phone}
                                                  readOnly
                                              />
                                              <div className="flex gap-x-4">
                                                  <button
                                                      onClick={() => {
                                                          handleUpdateWhatsappNumberModal({
                                                              phone: number.phone,
                                                              account_id: `${number.id}`,
                                                          })
                                                      }}
                                                      className="cursor-pointer border-0 text-sm text-hypay-pink outline-none"
                                                  >
                                                      Editar
                                                  </button>
                                                  <button
                                                      onClick={() => {
                                                          alert('This endpoint isnt available yet')
                                                      }}
                                                      className="cursor-pointer border-0 text-sm text-hypay-pink outline-none"
                                                  >
                                                      Deletar
                                                  </button>
                                              </div>
                                          </div>
                                      </Card>
                                  ))
                                : null}
                        </div>
                    </header>
                )}
                <main className="flex flex-col items-center px-8 lg:flex-row lg:items-start">
                    <Image
                        className="cursor-pointer border transition-transform hover:scale-105 "
                        src="/images/two-men-image.png"
                        width="466"
                        height="378"
                        alt="two-men"
                    />
                    <div className="lg:2/5 w-full sm:w-4/5 md:w-1/2 md:px-10 xl:w-4/5">
                        <p className="mb-10 pt-4 text-sm font-normal lg:p-0 xl:text-xl">
                            As dúvidas de seus clientes podem ser esclarecidas atravez de seu contato, transmita
                            confiança para eles permitindo que escrevam mensage para sua loja via WhatsApp, utilizando o
                            icone do app.
                        </p>
                        <Button className="bg-hypay-pink text-white" padding="p-3" onClick={handleWhatsappNumberModal}>
                            {/* <Link href="/dashboard/settings/communication/whatsappQrCode"> */}
                            <a className="flex items-center">
                                <CircularPlusIcon />
                                <p className="ml-1">
                                    {AllwhatsappAccounts.length ? 'Conectar novo whatsapp' : 'Conectar whatsapp'}
                                </p>
                            </a>
                            {/* </Link> */}
                        </Button>
                    </div>
                </main>
            </div>
            {modalType === ADD_WHATSAPP_NO_MODAL && <AddWhatsappNoModal />}
            {modalType === UPDATE_WHATSAPP_NO_MODAL && <AddWhatsappNoModal updatedNumbers={setAllWhatsappAccount} />}
        </PrimaryLayout>
    )
}

export default Communication
