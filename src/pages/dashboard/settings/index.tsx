import React, { useState, useEffect } from 'react'
import { NextPage } from 'next'
import { PrimaryLayout } from '../../../components/Layout'
import { SettingsMenuItemList } from '../../../lib/data'
import { LoaderIcon, LockIcon } from '../../../components/Icons'
import { Button } from '../../../components/Button'
import { useLazyGetProfileInfoQuery } from '../../../store/services/onlineStore'
import { IUserProfile, INotificationSettings, INotificationSettingsNumber } from '../../../interfaces/onlineStore'
import { useChangeNotificationStatusMutation } from '../../../store/services/settings/notificationSettings'
import { useSnackbar } from '../../../hooks/useSnackbar'

export interface singleNotif {
    [v: string]: boolean
}

const Notification: NextPage = () => {
    const [toggleNotifications, setToggleNotifications] = useState(false)
    const [profileInfo, { isFetching }] = useLazyGetProfileInfoQuery()
    const [changeNotifSettings, { isLoading: changingNotifStatus }] = useChangeNotificationStatusMutation()
    const { showSuccessSnackbar, showErrorSnackbar } = useSnackbar()
    const [formFields, setFormFields] = useState<INotificationSettings>({
        notification_enabled: false,
        notify_bank_payment_via_email: false,
        notify_bank_payment_via_dashboard: false,
        notify_bank_payment_via_whatsapp: false,
        send_receipt_to_me_via_email: false,
        send_receipt_to_me_via_dashboard: false,
        send_receipt_to_me_via_whatsapp: false,
        send_receipt_to_customer_via_email: false,
        send_receipt_to_customer_via_dashboard: false,
        send_receipt_to_customer_via_whatsapp: false,
        send_tracking_code_to_customer_via_email: false,
        send_tracking_code_to_customer_via_dashboard: false,
        send_tracking_code_to_customer_via_whatsapp: false,
    })

    useEffect(() => {
        async function getProfileInfo() {
            const response: IUserProfile = await profileInfo().unwrap()

            setToggleNotifications(response?.userProfile.notificationSettings.notification_enabled)
            if (response) {
                setFormFields(response?.userProfile.notificationSettings)
            }
        }
        getProfileInfo()

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const changeToggleState = async () => {
        const payload: Partial<INotificationSettingsNumber> = {}

        Object.entries(formFields).forEach(([key, value]) => {
            if (key === 'notification_enabled') {
                payload[key as keyof INotificationSettings] = formFields['notification_enabled'] ? 0 : 1
            } else {
                payload[key as keyof INotificationSettings] = value ? 1 : 0
            }
        })
        try {
            const response: IUserProfile = await changeNotifSettings(payload).unwrap()
            if (response) {
                setFormFields(response?.userProfile.notificationSettings)
                showSuccessSnackbar('Notification status changed successfully')
                setToggleNotifications(response?.userProfile.notificationSettings.notification_enabled)
            }
        } catch (err) {
            console.log(err, 'error while changing notificatino status')
            showErrorSnackbar('Something went wrong')
        }
    }

    const ChangeAllStatus: React.ChangeEventHandler<HTMLInputElement> = async function (evt) {
        const { name, checked } = evt.currentTarget
        const payload: Partial<INotificationSettingsNumber> = {}

        Object.entries(formFields).forEach(([key, value]) => {
            if (key.includes(name)) {
                payload[key as keyof INotificationSettings] = checked ? 1 : 0
            } else {
                payload[key as keyof INotificationSettings] = value ? 1 : 0
            }
        })
        try {
            const response: IUserProfile = await changeNotifSettings(payload).unwrap()
            if (response) {
                setFormFields(response?.userProfile.notificationSettings)
                showSuccessSnackbar('Notification status changed successfully')
            }
        } catch (err) {
            console.log(err, 'error while changing notificatino status')
            showErrorSnackbar('Something went wrong')
        }
    }

    return (
        <PrimaryLayout menuItemList={SettingsMenuItemList} isPrimary={false}>
            <div className="px-4 py-4 md:w-11/12 md:px-12">
                {isFetching || changingNotifStatus ? (
                    <div className="flex h-[30vh] w-full flex-col items-center justify-center">
                        <LoaderIcon />
                        <p className="font-b0ld text-center text-base">loading Notification...</p>
                    </div>
                ) : (
                    <>
                        <header>
                            <h1 className="text-3xl font-bold">Notificações</h1>

                            <div className="my-6 flex items-center justify-start">
                                <div
                                    onClick={() => changeToggleState()}
                                    className={`${
                                        toggleNotifications
                                            ? 'justify-end bg-hypay-secondary'
                                            : 'justify-start bg-hypay-gray'
                                    } relative flex h-[26px] w-[58px] cursor-pointer items-center rounded-full  transition duration-500 ease-in-out`}
                                >
                                    <span className="absolute h-[30px]  w-[30px] rounded-full bg-white"></span>
                                </div>
                            </div>
                        </header>

                        <main>
                            {/* the table */}
                            <section className="flex items-start justify-between">
                                <div className="w-[46%] py-8 md:w-6/12">
                                    <header className="invisible mb-5  flex flex-col items-center">
                                        <input
                                            type="radio"
                                            name="hidden"
                                            id="hidden"
                                            className="mb-4 h-[30px] w-[30px]"
                                        />

                                        <label htmlFor="hidden" className="text-md font-bold text-hypay-primary">
                                            This is dummy
                                        </label>
                                    </header>
                                    <main>
                                        <div className="border-b border-hypay-gray pb-[.8rem] md:py-2">
                                            <p className="text-xs capitalize md:text-base ">Pagamentos de banco</p>
                                        </div>
                                        <div className="border-b border-hypay-gray py-4 md:pt-2">
                                            <p className="text-xs md:text-base ">Recibos</p>
                                        </div>
                                        <div className="border-b border-hypay-gray py-4 md:pt-2">
                                            <p className="text-xs md:text-base">Enviar recibos ao cliente</p>
                                        </div>
                                        <div className="border-b border-hypay-gray py-4 md:pt-2">
                                            <p className="text-xs md:text-base ">
                                                Enviar código de rastreio ao cliente
                                            </p>
                                        </div>
                                    </main>
                                </div>
                                <div className="w-[20%] py-8 md:w-[16.6%]">
                                    <header className="mb-5 flex flex-col items-center">
                                        <input
                                            type="checkbox"
                                            name="email"
                                            checked={
                                                formFields['notify_bank_payment_via_email'] &&
                                                formFields['send_tracking_code_to_customer_via_email'] &&
                                                formFields['send_receipt_to_customer_via_email'] &&
                                                formFields['send_receipt_to_me_via_email']
                                            }
                                            onChange={ChangeAllStatus}
                                            className="mb-4 h-[18px] w-[18px] rounded-full md:h-[30px] md:w-[30px]"
                                        />

                                        <label
                                            htmlFor="notify_bank_payment_via_email"
                                            className="md:text-md text-xs font-bold text-hypay-primary"
                                        >
                                            E-mail
                                        </label>
                                    </header>
                                    <main>
                                        <div className="border-b border-hypay-gray  py-3 text-center">
                                            <input
                                                type="checkbox"
                                                name="notify_bank_payment_via_email"
                                                id="notify_bank_payment_via_email"
                                                checked={formFields['notify_bank_payment_via_email']}
                                                onChange={ChangeAllStatus}
                                            />
                                        </div>
                                        <div className="border-b border-hypay-gray  py-3 text-center">
                                            <input
                                                type="checkbox"
                                                name="send_receipt_to_me_via_email"
                                                id="send_receipt_to_me_via_email"
                                                checked={formFields['send_receipt_to_me_via_email']}
                                                onChange={ChangeAllStatus}
                                            />
                                        </div>
                                        <div className="border-b border-hypay-gray  py-3 text-center">
                                            <input
                                                type="checkbox"
                                                name="send_receipt_to_customer_via_email"
                                                id="send_receipt_to_customer_via_email"
                                                checked={formFields['send_receipt_to_customer_via_email']}
                                                onChange={ChangeAllStatus}
                                            />
                                        </div>
                                        <div className="border-b border-hypay-gray  py-3 text-center">
                                            <input
                                                type="checkbox"
                                                name="send_tracking_code_to_customer_via_email"
                                                id="send_tracking_code_to_customer_via_email"
                                                checked={formFields['send_tracking_code_to_customer_via_email']}
                                                onChange={ChangeAllStatus}
                                            />
                                        </div>
                                    </main>
                                </div>
                                <div className="w-[20%] py-8 md:w-[16.6%]">
                                    <header className="mb-5 flex flex-col items-center">
                                        <input
                                            type="checkbox"
                                            name="dashboard"
                                            onChange={ChangeAllStatus}
                                            className="mb-4 h-[18px] w-[18px] md:h-[30px] md:w-[30px]"
                                            checked={
                                                formFields['notify_bank_payment_via_dashboard'] &&
                                                formFields['send_receipt_to_me_via_dashboard'] &&
                                                formFields['send_receipt_to_customer_via_dashboard'] &&
                                                formFields['send_tracking_code_to_customer_via_dashboard']
                                            }
                                        />

                                        <label
                                            htmlFor="notify_bank_payment_via_dashboard"
                                            className="md:text-md text-xs font-bold capitalize text-hypay-primary"
                                        >
                                            Dashboard
                                        </label>
                                    </header>
                                    <main>
                                        <div className="border-b border-hypay-gray  py-3 text-center">
                                            <input
                                                type="checkbox"
                                                name="notify_bank_payment_via_dashboard"
                                                id="notify_bank_payment_via_dashboard"
                                                checked={formFields['notify_bank_payment_via_dashboard']}
                                                onChange={ChangeAllStatus}
                                            />{' '}
                                        </div>
                                        <div className="border-b border-hypay-gray  py-3 text-center">
                                            <input
                                                type="checkbox"
                                                name="send_receipt_to_me_via_dashboard"
                                                id="send_receipt_to_me_via_dashboard"
                                                checked={formFields['send_receipt_to_me_via_dashboard']}
                                                onChange={ChangeAllStatus}
                                            />
                                        </div>
                                        <div className="border-b border-hypay-gray  py-3 text-center">
                                            <input
                                                type="checkbox"
                                                name="send_receipt_to_customer_via_dashboard"
                                                id="send_receipt_to_customer_via_dashboard"
                                                checked={formFields['send_receipt_to_customer_via_dashboard']}
                                                onChange={ChangeAllStatus}
                                            />
                                        </div>
                                        <div className="border-b border-hypay-gray  py-3 text-center">
                                            <input
                                                type="checkbox"
                                                name="send_tracking_code_to_customer_via_dashboard"
                                                id="send_tracking_code_to_customer_via_dashboard"
                                                checked={formFields['send_tracking_code_to_customer_via_dashboard']}
                                                onChange={ChangeAllStatus}
                                            />
                                        </div>
                                    </main>
                                </div>
                                <div className="w-[20%] border border-hypay-gray py-8 md:w-[16.6%]">
                                    <header className="mb-5 flex flex-col items-center">
                                        <input
                                            type="checkbox"
                                            name="whatsapp"
                                            onChange={ChangeAllStatus}
                                            id="whatsapp"
                                            className="mb-4 h-[18px] w-[18px] md:h-[30px] md:w-[30px]"
                                            checked={
                                                formFields['notify_bank_payment_via_whatsapp'] &&
                                                formFields['send_receipt_to_me_via_whatsapp'] &&
                                                formFields['send_receipt_to_customer_via_whatsapp'] &&
                                                formFields['send_tracking_code_to_customer_via_whatsapp']
                                            }
                                        />

                                        <label
                                            htmlFor="notify_bank_payment_via_whatsapp"
                                            className="md:text-md text-xs font-bold text-hypay-primary opacity-50"
                                        >
                                            Whatsapp
                                        </label>
                                    </header>
                                    <main>
                                        <div className="border-b border-hypay-gray  py-[0.74rem] text-center">
                                            <input
                                                type="checkbox"
                                                name="notify_bank_payment_via_whatsapp"
                                                id="notify_bank_payment_via_whatsapp"
                                                checked={formFields['notify_bank_payment_via_whatsapp']}
                                                onChange={ChangeAllStatus}
                                            />
                                        </div>
                                        <div className="border-b border-hypay-gray  py-[0.74rem] text-center">
                                            <input
                                                type="checkbox"
                                                name="send_receipt_to_me_via_whatsapp"
                                                id="send_receipt_to_me_via_whatsapp"
                                                checked={formFields['send_receipt_to_me_via_whatsapp']}
                                                onChange={ChangeAllStatus}
                                            />
                                        </div>
                                        <div className="border-b border-hypay-gray  py-[0.74rem] text-center">
                                            <input
                                                type="checkbox"
                                                name="send_receipt_to_customer_via_whatsapp"
                                                id="send_receipt_to_customer_via_whatsapp"
                                                checked={formFields['send_receipt_to_customer_via_whatsapp']}
                                                onChange={ChangeAllStatus}
                                            />
                                        </div>
                                        <div className="border-b border-hypay-gray  py-3 text-center">
                                            <input
                                                type="checkbox"
                                                name="send_tracking_code_to_customer_via_whatsapp"
                                                id="send_tracking_code_to_customer_via_whatsapp"
                                                checked={formFields['send_tracking_code_to_customer_via_whatsapp']}
                                                onChange={ChangeAllStatus}
                                            />
                                        </div>
                                    </main>
                                </div>
                            </section>
                        </main>

                        <footer className="mt-2 flex items-center justify-end">
                            <div className="w-[40%] text-center md:w-[16%]">
                                <span className="my-2 flex items-center justify-center">
                                    <LockIcon size={34} />
                                </span>
                                <p className="capitalize">Atualize seu plano</p>
                                <span className="text-[0.7rem] leading-[0.5rem]">
                                    O acesso a esse recurso só é possível a partir no Plano Champion
                                </span>
                                <Button className="mt-3 w-full text-center" primary>
                                    Saiba mais
                                </Button>
                            </div>
                        </footer>
                    </>
                )}
            </div>
        </PrimaryLayout>
    )
}

export default Notification
