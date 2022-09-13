import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'

import { useAppDispatch, useAppSelector } from '../../hooks/useStoreHooks'
import { COLORS } from '../../lib/constants/colors'
import { hideModal } from '../../store/reducers/ui'
import { Button } from '../Button'
import { SecondInput } from '../form'
import { CloseIcon } from '../Icons'
import ModalLayout from '../Layout/ModalLayout'
import { useSnackbar } from '../../hooks/useSnackbar'
import {
    useAddWhatsAppNumberMutation,
    useUpdateWhatsAppNumberMutation,
} from '../../store/services/settings/notificationSettings'
import { IwhatsappAccounts, IwhatsappNumber } from '../../interfaces/onlineStore'

function AddWhatsappNoModal({ updatedNumbers }: { updatedNumbers?: (arr: Array<IwhatsappAccounts>) => void }) {
    const [addWhatsAppNumber, { isLoading }] = useAddWhatsAppNumberMutation()
    const [updateWhatsAppNumber, { isLoading: updateNUmberLoading }] = useUpdateWhatsAppNumberMutation()
    const { showSuccessSnackbar, showErrorSnackbar } = useSnackbar()
    const { phone: hasPhoneNoToUpdate } = useAppSelector((state) => state.ui.modalProps)
    const dispatch = useAppDispatch()
    const { register, handleSubmit, setValue } = useForm<IwhatsappNumber>()
    const { push } = useRouter()

    const submitWhatsappNumber = async (data: IwhatsappNumber) => {
        try {
            if (hasPhoneNoToUpdate?.phone) {
                const response = await updateWhatsAppNumber({
                    account_id: hasPhoneNoToUpdate.account_id,
                    phone: data.phone,
                }).unwrap()
                dispatch(hideModal())
                showSuccessSnackbar('Number Updated Successfully')
                updatedNumbers && updatedNumbers(response)
                return push({
                    pathname: `/dashboard/settings/communication`,
                })
            }
            const response = await addWhatsAppNumber(data).unwrap()
            dispatch(hideModal())
            showSuccessSnackbar('Number added Successfully')
            push({
                pathname: `/dashboard/settings/communication/whatsappQrCode`,
                query: { qrcode: response?.data?.qrcode, phone: response?.data?.phone },
            })
        } catch (err: any) {
            if (err?.status == 400) {
                showErrorSnackbar(err?.data?.message.phone[0] || 'Something went wrong')
            }
            console.log(err, 'error while trying to add your whatsapp Number')
        }
    }

    useEffect(() => {
        if (hasPhoneNoToUpdate?.phone) {
            setValue('phone', hasPhoneNoToUpdate?.phone)
        }
    }, [hasPhoneNoToUpdate?.phone, setValue])

    return (
        <ModalLayout width="md:w-5/12">
            <header className="flex items-center justify-between border-b border-b-hypay-iconGray pb-3">
                {hasPhoneNoToUpdate ? (
                    <h1 className="font-bold capitalize text-hypay-gray">Update um número do WhatsApp</h1>
                ) : (
                    <h1 className="font-bold capitalize text-hypay-gray">Adicionar um número do WhatsApp</h1>
                )}
                <span className="cursor-pointer">
                    <CloseIcon color={COLORS.GREY} onClick={() => dispatch(hideModal())} />
                </span>
            </header>

            <form onSubmit={handleSubmit(submitWhatsappNumber)}>
                <SecondInput
                    name="phone"
                    type="text"
                    label={hasPhoneNoToUpdate?.phone ? 'Update número do WhatsApp' : 'Adicionar número do WhatsApp'}
                    register={register}
                />
                {hasPhoneNoToUpdate ? (
                    <Button type="submit" disabled={isLoading} primary className="text-bold min-w-4/12 capitalize">
                        {updateNUmberLoading ? 'updateing...' : 'Update'}
                    </Button>
                ) : (
                    <Button type="submit" disabled={isLoading} primary className="text-bold min-w-4/12 capitalize">
                        {isLoading ? 'Loading...' : 'Adicio número'}
                    </Button>
                )}
            </form>
        </ModalLayout>
    )
}

export default AddWhatsappNoModal
