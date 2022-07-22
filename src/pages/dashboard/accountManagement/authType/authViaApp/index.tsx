import React, { useState } from 'react'
import { NextPage } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'

import { PrimaryLayout } from '../../../../../components/Layout'
import { LeftArrowIcon, LoaderIcon } from '../../../../../components/Icons'
import { Card } from '../../../../../components/Card'
import phoneAuth from '../../../../../../public/images/phoneAuth.png'
import { SecondInput } from '../../../../../components/form'
import { Button } from '../../../../../components/Button'
import { useTwoFA } from '../../../../../hooks/useTwoFA'
import { COLORS } from '../../../../../lib/constants/colors'
import { QRCode } from '../../../../../components/CodeGenerator'
import { useSnackbar } from '../../../../../hooks/useSnackbar'
import { useAppSelector } from '../../../../../hooks/useStoreHooks'
import { UserInfo } from '../../../../../store/reducers/auth'

type FormInputData = { code: string }

const AuthViaApp: NextPage = () => {
    const user = useAppSelector((state) => state.auth.user?.userInfo as UserInfo)
    const { back } = useRouter()
    const { showErrorSnackbar, showSuccessSnackbar } = useSnackbar()
    const { register, handleSubmit } = useForm<FormInputData>()
    const { generatedTwoFASecret, isLoading, enableTwoFA, isEnabling } = useTwoFA()
    const [showModal, setShowModal] = useState(false)

    const handleDisableTwoFA = () => {
        setShowModal(true)
    }

    const onSubmit = async ({ code }: FormInputData) => {
        if (isEnabling) {
            return
        }
        try {
            // TODO
            const res = await enableTwoFA({ code }).unwrap()
            if (res.success) {
                showSuccessSnackbar(res.message)
                back()
            } else {
                showErrorSnackbar(res.message)
            }
        } catch (error) {
            showErrorSnackbar('Error! Failed to enable Two Factor Authentication')
            console.log(error)
        }
    }

    const DisableTwoFAModal = () => {
        return <div>Okay! Let's see how it looks</div>
    }

    const modalData = () => {
        return {
            modalClass: '',
            modalChildren: <DisableTwoFAModal />,
            open: showModal,
            onClose: () => setShowModal(false),
        }
    }

    return (
        <PrimaryLayout modalProps={modalData()}>
            <div className="px-4 py-4 md:w-9/12 md:px-12">
                <header className="justify-venter flex items-center gap-x-6  pb-3">
                    <span onClick={() => back()}>
                        <LeftArrowIcon />
                    </span>
                    <h1 className="text-3xl font-bold">Autenticação via App</h1>
                </header>

                <section className="mt-10">
                    <Card className="my-3 flex items-center gap-x-3" rounded>
                        <Image src={phoneAuth} alt="Phone auth type" height={60} width={48} />
                        <h1 className="p-3 text-2xl text-hypay-pink">Autenticação via App</h1>
                    </Card>

                    {user?.google2fa_enabled ? (
                        <Card className="my-3 flex items-center justify-between" rounded>
                            <div>
                                Two-Factor Authentication:{' '}
                                <span className="font-bold italic text-hypay-gray">Enabled</span>
                            </div>
                            <Button onClick={handleDisableTwoFA} primary>
                                Disable
                            </Button>
                        </Card>
                    ) : (
                        <div>
                            <div>
                                <h1 className="text-md mt-7 mb-2 font-semibold">
                                    1- Ler o código {user?.google2fa_enabled}
                                </h1>
                                <Card rounded>
                                    <div className="flex h-32 items-center justify-center">
                                        {isLoading || !generatedTwoFASecret ? (
                                            <LoaderIcon size={32} color={COLORS.RED} />
                                        ) : (
                                            <QRCode {...generatedTwoFASecret} />
                                        )}
                                    </div>
                                </Card>
                            </div>

                            <form onSubmit={handleSubmit(onSubmit)}>
                                <SecondInput
                                    label="2 - Inserir chave"
                                    name="code"
                                    type="text"
                                    register={register}
                                    required
                                />
                                <Button className=" px-5" primary>
                                    {isEnabling ? <LoaderIcon size={24} color={COLORS.RED} /> : 'Validar'}
                                </Button>
                            </form>
                        </div>
                    )}
                </section>
            </div>
        </PrimaryLayout>
    )
}

export default AuthViaApp
