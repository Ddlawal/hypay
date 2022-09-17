import React, { useEffect, useState } from 'react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import cx from 'classnames'

import { NextImage as Image } from '../../../../../components/Image'
import { PrimaryLayout } from '../../../../../components/Layout'
import { LeftArrowIcon, LoaderIcon } from '../../../../../components/Icons'
import { Card } from '../../../../../components/Card'
import phoneAuth from '../../../../../../public/images/phoneAuth.png'
import { SecondInput, TextField } from '../../../../../components/form'
import { Button } from '../../../../../components/Button'
import { useTwoFA } from '../../../../../hooks/useTwoFA'
import { COLORS } from '../../../../../lib/constants/colors'
import { QRCode } from '../../../../../components/CodeGenerator'
import { useAppDispatch, useAppSelector } from '../../../../../hooks/useStoreHooks'
import { updateUserLoggedInData, UserInfo } from '../../../../../store/reducers/auth'
import { Modal, ModalHeading } from '../../../../../components/Modal'
import { showErrorSnackbar, showSuccessSnackbar, updateUserInLocalStorage } from '../../../../../lib/helper'
import { AuthFormInputData, GeneratedTwoFASecret } from '../../../../../interfaces/auth'

const AuthViaApp: NextPage = () => {
    const dispatch = useAppDispatch()
    const user = useAppSelector((state) => state.auth.user as UserInfo)
    const { back } = useRouter()
    const {
        formState: { errors },
        handleSubmit,
        register,
        reset,
    } = useForm<AuthFormInputData>()
    const { generateSecret, isLoading, isEnabling, isDisabling, enableTwoFA, disableTwoFA } = useTwoFA()
    const [showModal, setShowModal] = useState(false)
    const [showTwoFAForm, setShowTwoFAForm] = useState(false)
    const [password, setPassword] = useState('')
    const [generatedTwoFASecret, setGeneratedTwoFASecret] = useState<GeneratedTwoFASecret>()

    useEffect(() => {
        const fetchData = async () => {
            const res = await generateSecret().unwrap()

            setGeneratedTwoFASecret(res)
        }

        fetchData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleDisableTwoFA = async () => {
        if (password === '') {
            return showErrorSnackbar('Você deve digitar sua senha')
        }

        try {
            const res = await disableTwoFA({ 'current-password': password }).unwrap()
            if (res.success) {
                dispatch(updateUserLoggedInData({ ...user, google2fa_enabled: false }))
                updateUserInLocalStorage({ google2fa_enabled: false })
                showSuccessSnackbar(res.message)
                setShowModal(false)
                setPassword('')
            } else {
                showErrorSnackbar(res.message)
            }
        } catch (error) {
            showErrorSnackbar('Error! Failed to disable Two Factor Authentication')
            console.log(error)
        }
    }

    const onSubmit = async ({ code }: AuthFormInputData) => {
        if (isEnabling) {
            return
        }
        try {
            const res = await enableTwoFA({ code }).unwrap()
            if (res.success) {
                dispatch(updateUserLoggedInData({ ...user, google2fa_enabled: true }))
                updateUserInLocalStorage({ google2fa_enabled: true })
                showSuccessSnackbar(res.message)
                setShowTwoFAForm(false)
                reset()
            } else {
                showErrorSnackbar(res.message)
            }
        } catch (error) {
            showErrorSnackbar('Error! Failed to enable Two Factor Authentication')
            console.log(error)
        }
    }

    return (
        <PrimaryLayout>
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

                    {showTwoFAForm ? (
                        <div>
                            <div>
                                <h1 className="text-md mt-7 mb-2 font-semibold">
                                    1- Ler o código {user?.google2fa_enabled}
                                </h1>
                                <Card rounded>
                                    <div className="flex h-40 items-center justify-center">
                                        {isLoading || !generatedTwoFASecret ? (
                                            <LoaderIcon size={32} color={COLORS.RED} />
                                        ) : (
                                            <div>
                                                <p>
                                                    Scan the QR Code below or enter this secret key in you Authenticator
                                                    app: {generatedTwoFASecret.google2fa_secret}
                                                </p>
                                                <div className="flex items-center justify-center">
                                                    <QRCode {...generatedTwoFASecret} />
                                                </div>
                                            </div>
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
                                    errors={errors}
                                    validation={{ required: true, minLength: 6, maxLength: 6 }}
                                />
                                <Button
                                    primary
                                    size="md"
                                    className="flex h-10 w-[8rem] items-center justify-center"
                                    padding="px-6 py-2"
                                >
                                    {isEnabling ? <LoaderIcon size={28} color={COLORS.WHITE} /> : 'Validar'}
                                </Button>
                            </form>
                        </div>
                    ) : (
                        <Card className="my-3 flex items-center justify-between" rounded>
                            <div>
                                Two-Factor Authentication: {user?.google2fa_enabled}
                                <span className="font-bold italic text-hypay-gray">
                                    {user?.google2fa_enabled ? ' Activada' : ' Não ativado'}
                                </span>
                            </div>
                            <Button
                                onClick={() => (user?.google2fa_enabled ? setShowModal(true) : setShowTwoFAForm(true))}
                                className={cx(
                                    'font-bold',
                                    user?.google2fa_enabled ? 'bg-gray-300' : 'bg-hypay-pink text-white'
                                )}
                                padding="py-[0.4rem] px-6"
                            >
                                {user?.google2fa_enabled ? 'Desativar' : 'Permitir'}
                            </Button>
                        </Card>
                    )}
                </section>
            </div>
            {showModal ? (
                <Modal
                    isOpen={showModal}
                    dismissable
                    onDismiss={() => setShowModal(false)}
                    onProceed={handleDisableTwoFA}
                    isDialog
                    isLoading={isDisabling}
                >
                    <ModalHeading>Desativar TwoFA</ModalHeading>
                    <div>
                        <TextField
                            inputClassName="border border-hypay-gray mb-6"
                            padding="py-2 px-4"
                            label="Digite sua senha para desativar a autenticação de dois fatores"
                            placeholder="Digite sua senha"
                            value={password}
                            type="text"
                            onChange={(val) => setPassword(val)}
                        />
                    </div>
                </Modal>
            ) : null}
        </PrimaryLayout>
    )
}

export default AuthViaApp
