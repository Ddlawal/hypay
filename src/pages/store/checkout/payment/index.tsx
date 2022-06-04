import React, { useState } from 'react'
import { NextPage } from 'next'
import Image from 'next/image'
import { FieldError, useForm, UseFormHandleSubmit, UseFormRegister } from 'react-hook-form'

import { Button } from '../../../../components/Button'
import { SecondInput } from '../../../../components/form'
import { LockIcon } from '../../../../components/Icons'
import { BuyerLayout } from '../../../../components/Layout'
import { SelectField } from '../../../../components/Select'
import { Timeline, TimelineEvent } from '../../../../components/Timeline'
import { useMediaQuery } from '../../../../hooks/useMediaQuery'
import { COLORS } from '../../../../lib/constants/colors'
import { Radio } from '../../../../components/form/Radio'
import { PurchaseSummary } from '../../../../components/PurchaseSummary'
import { Card } from '../../../../components/Card'

type FormFields = {
    payment_type: string
}

type FormProps = {
    register: UseFormRegister<FormFields>
    errors: {
        payment_type?: FieldError | undefined
    }
    handleSubmit: UseFormHandleSubmit<FormFields>
    cancel: () => void
}

const AddCreditCard = ({ register, errors, handleSubmit, cancel }: FormProps) => {
    return (
        <form className="my-12">
            <SecondInput
                className="my-3 text-gray-800 md:my-0"
                name="buyer_name"
                errors={errors}
                label="Nome impresso no cartão*"
                register={register}
                validation={{
                    required: true,
                }}
                type="text"
            />

            <div className="grid grid-cols-12 gap-x-2 lg:gap-x-4">
                <SecondInput
                    className="col-span-12 mb-3 text-gray-800 md:my-0 lg:col-span-6"
                    name="buyer_name"
                    errors={errors}
                    label="Número do cartão de crédito*"
                    register={register}
                    validation={{
                        required: true,
                    }}
                    type="text"
                />
                <SecondInput
                    className="col-span-12 mb-3 text-gray-800 md:col-span-6 md:my-0 lg:col-span-3"
                    name="buyer_name"
                    errors={errors}
                    label="Validade*"
                    register={register}
                    validation={{
                        required: true,
                    }}
                    type="text"
                />
                <SecondInput
                    className="col-span-12 mb-3 text-gray-800 md:col-span-6 md:my-0 lg:col-span-3"
                    name="buyer_name"
                    errors={errors}
                    label="CVV*"
                    register={register}
                    validation={{
                        required: true,
                    }}
                    type="text"
                />
            </div>

            <div className="grid grid-cols-12 gap-x-2 md:mt-5 lg:gap-x-4">
                <SecondInput
                    className="col-span-12 mb-3 text-gray-800 md:col-span-6 md:my-0"
                    inputClassName="py-5"
                    name="buyer_name"
                    errors={errors}
                    label="Telefone"
                    register={register}
                    validation={{
                        required: true,
                    }}
                    type="text"
                />
                <div className="col-span-12 md:col-span-6">
                    <SelectField<number | null>
                        labelClassName="my-3 md:my-1 md:mt-3"
                        label="Parcelas"
                        options={[
                            { label: 'Option One', value: 1 },
                            { label: 'Option Two', value: 2 },
                        ]}
                        name="subject"
                        value={null}
                        onChange={() => null}
                    />
                </div>
            </div>

            <div className="mt-10 grid grid-cols-12 gap-x-4 lg:gap-x-8">
                <Button padding="py-4 md:py-3" className="col-span-6 bg-white" onClick={cancel}>
                    Descartar
                </Button>
                <Button padding="py-4 md:py-3" className="col-span-6 bg-black text-white" onClick={() => handleSubmit}>
                    Salvar Cartão
                </Button>
            </div>
        </form>
    )
}

const CreditCardList = ({ onAddCard }: { onAddCard: () => void }) => {
    return (
        <div>
            <Card className="my-16 flex items-center justify-between">
                <div className="flex items-center">
                    <div className="mr-2 w-24 lg:mr-4">
                        <Image src="/images/master-card.png" layout="responsive" height={35} width={65} quality={100} />
                    </div>
                    <div>Bank********7777</div>
                </div>
                <div>Alterar</div>
            </Card>
            <Button padding="px-16 py-4 md:py-3" className="w-full bg-white md:w-fit" onClick={onAddCard}>
                Adiconar novo cartão
            </Button>
        </div>
    )
}

const CheckoutPayment: NextPage = () => {
    const isLargeScreen = useMediaQuery('md')
    const [index] = useState(0)
    const [paymentType, setPaymentType] = useState('card')
    const [showItem, setShowItem] = useState(false)
    const [addCard, setAddCard] = useState(false)
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormFields>()

    return (
        <BuyerLayout>
            <div className="mt-6 grid grid-cols-12 md:px-[10%]">
                <div className="col-span-12 px-4 md:col-span-9 md:px-0">
                    <div className="flex justify-center">
                        <Timeline
                            thickness={2}
                            gap={isLargeScreen ? 80 : 50}
                            progressBarBackground={COLORS.BLACK}
                            activeIndex={index}
                            position="top"
                        >
                            <TimelineEvent
                                bgColor={COLORS.CYAN}
                                border="none"
                                label="Identification"
                                labelFontSize={isLargeScreen ? 13 : 10}
                                labelTextHeight={30}
                                labelTextWidth={120}
                                eventSize={20}
                            />
                            <TimelineEvent
                                bgColor={COLORS.CYAN}
                                border="none"
                                label="Payment"
                                labelFontSize={isLargeScreen ? 13 : 10}
                                labelTextHeight={20}
                                labelTextWidth={100}
                                eventSize={20}
                            />
                            <TimelineEvent
                                bgColor={COLORS.CYAN}
                                border="none"
                                label="Confirmation"
                                labelFontSize={isLargeScreen ? 13 : 10}
                                labelTextHeight={20}
                                labelTextWidth={100}
                                eventSize={20}
                            />
                        </Timeline>
                    </div>
                    <div className="mt-6">Checkout</div>
                    <div className="mt-6">Escolha sua forma de pagamento </div>
                    <div className="item-center my-4 hidden justify-between md:flex">
                        <Radio<FormFields>
                            checkedValue={paymentType}
                            onChange={setPaymentType}
                            name="payment_type"
                            label="Boleto"
                            value="bill"
                            register={register}
                            className="h-8 w-8"
                        />
                        <Radio<FormFields>
                            checkedValue={paymentType}
                            onChange={setPaymentType}
                            name="payment_type"
                            label="Cartão de Crédito"
                            value="card"
                            register={register}
                            className="h-8 w-8"
                        />
                        <Radio<FormFields>
                            checkedValue={paymentType}
                            onChange={setPaymentType}
                            name="payment_type"
                            label="Pix"
                            value="pix"
                            register={register}
                            className="h-8 w-8"
                        />
                    </div>
                    <div className="item-center my-4 grid grid-cols-12 justify-between gap-x-4 md:hidden">
                        <Button
                            onClick={() => setPaymentType('bill')}
                            className={`${paymentType === 'bill' ? 'bg-hypay-pink text-white' : 'bg-white'} col-span-3`}
                        >
                            Bill
                        </Button>
                        <Button
                            onClick={() => setPaymentType('card')}
                            className={`${paymentType === 'card' ? 'bg-hypay-pink text-white' : 'bg-white'} col-span-6`}
                        >
                            Cartão de Crédito
                        </Button>
                        <Button
                            onClick={() => setPaymentType('pix')}
                            className={`${paymentType === 'pix' ? 'bg-hypay-pink text-white' : 'bg-white'} col-span-3`}
                        >
                            Pix
                        </Button>
                    </div>
                    <div className="my-4 flex justify-center">
                        <Button onClick={() => setShowItem(!showItem)} className="bg-white">
                            {showItem ? 'Ocultar seu item' : 'Veja seu item'}
                        </Button>
                    </div>
                    {showItem ? (
                        <PurchaseSummary />
                    ) : (
                        <>
                            {paymentType === 'bill' && (
                                <div>
                                    <div>Bill</div>
                                </div>
                            )}
                            {paymentType === 'card' && (
                                <>
                                    {addCard ? (
                                        <AddCreditCard
                                            register={register}
                                            errors={errors}
                                            handleSubmit={handleSubmit}
                                            cancel={() => setAddCard(false)}
                                        />
                                    ) : (
                                        <CreditCardList onAddCard={() => setAddCard(true)} />
                                    )}
                                </>
                            )}
                            {paymentType === 'pix' && (
                                <div>
                                    <div>Pix</div>
                                </div>
                            )}
                        </>
                    )}
                </div>
                <div className="hidden items-start gap-x-1 font-semibold md:col-span-3 md:flex md:text-[.7rem] lg:text-[.9rem]">
                    <LockIcon size={15} /> Compra 100% segura
                </div>
            </div>
        </BuyerLayout>
    )
}

export default CheckoutPayment
