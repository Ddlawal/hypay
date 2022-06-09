import React, { useState } from 'react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { FieldError, useForm, UseFormHandleSubmit, UseFormRegister } from 'react-hook-form'

import { Button } from '../../../components/Button'
import { SecondInput } from '../../../components/form'
import { EmailNotificationIcon, LocationIcon, LockIcon } from '../../../components/Icons'
import { BuyerLayout } from '../../../components/Layout'
import { SelectField } from '../../../components/Select'
import { Timeline, TimelineEvent } from '../../../components/Timeline'
import { useMediaQuery } from '../../../hooks/useMediaQuery'
import { COLORS } from '../../../lib/constants/colors'
import { Radio } from '../../../components/form/Radio'
import { PurchaseSummary } from '../../../components/PurchaseSummary'
import { Card } from '../../../components/Card'
import { Barcode } from '../../../components/Barcode'

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

const DeliveryDetails = () => {
    return (
        <div className="my-6">
            <div>Delivery Details</div>
            <Card className="mt-2 mb-4 flex items-center gap-x-8">
                <div className="flex-none">
                    <LocationIcon />
                </div>
                <div className="grow text-[0.6rem]">
                    <div className="mb-1 text-[0.8rem]">Rua Lorem Ipsum, 300</div>
                    <div>
                        Curitiba, Paraná - CEP 80060150
                        <br />
                        Rafael Crespo - 9999999999
                    </div>
                </div>
                <button className="flex-none text-sm">Change</button>
            </Card>
            <Card className="my-4 flex items-center gap-x-8">
                <div className="flex-none">
                    <EmailNotificationIcon />
                </div>
                <div className="grow text-[0.8rem]">Your purchase will arrive between 02/02 and 03/02</div>
                <button className="flex-none text-sm">Change</button>
            </Card>
        </div>
    )
}

const CheckoutPayment: NextPage = () => {
    const isLargeScreen = useMediaQuery('md')
    const [index] = useState(0)
    const [paymentType, setPaymentType] = useState('card')
    const [showItem, setShowItem] = useState(false)
    const [addCard, setAddCard] = useState(false)
    const [showBarcode, setShowBarcode] = useState(false)
    const { push } = useRouter()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormFields>()

    const goToConfirmation = () => push('/store/checkout/confirmation')

    const handleSetPaymentType = (paymentTypeValue: string) => {
        setShowItem(false)
        setAddCard(false)
        setShowBarcode(false)
        setPaymentType(paymentTypeValue)
    }

    return (
        <BuyerLayout>
            <div className="mt-6 grid grid-cols-12 md:px-[10%]">
                <div className="col-span-12 px-4 md:col-span-8 md:px-0">
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
                            onChange={handleSetPaymentType}
                            name="payment_type"
                            label="Boleto"
                            value="bill"
                            register={register}
                            className="h-8 w-8"
                        />
                        <Radio<FormFields>
                            checkedValue={paymentType}
                            onChange={handleSetPaymentType}
                            name="payment_type"
                            label="Cartão de Crédito"
                            value="card"
                            register={register}
                            className="h-8 w-8"
                        />
                        <Radio<FormFields>
                            checkedValue={paymentType}
                            onChange={handleSetPaymentType}
                            name="payment_type"
                            label="Pix"
                            value="pix"
                            register={register}
                            className="h-8 w-8"
                        />
                    </div>
                    <div className="item-center my-4 grid grid-cols-12 justify-between gap-x-4 md:hidden">
                        <Button
                            onClick={() => handleSetPaymentType('bill')}
                            className={`${paymentType === 'bill' ? 'bg-hypay-pink text-white' : 'bg-white'} col-span-3`}
                        >
                            Bill
                        </Button>
                        <Button
                            onClick={() => handleSetPaymentType('card')}
                            className={`${paymentType === 'card' ? 'bg-hypay-pink text-white' : 'bg-white'} col-span-6`}
                        >
                            Cartão de Crédito
                        </Button>
                        <Button
                            onClick={() => handleSetPaymentType('pix')}
                            className={`${paymentType === 'pix' ? 'bg-hypay-pink text-white' : 'bg-white'} col-span-3`}
                        >
                            Pix
                        </Button>
                    </div>
                    <div className="mt-8 mb-6 flex justify-center md:hidden">
                        <Button onClick={() => setShowItem(!showItem)} className="bg-white">
                            {showItem ? 'Ocultar seu item' : 'Veja seu item'}
                        </Button>
                    </div>
                    {showItem ? (
                        <PurchaseSummary onSubmit={goToConfirmation} />
                    ) : (
                        <>
                            {paymentType === 'bill' && (
                                <div>
                                    {showBarcode ? (
                                        <div>
                                            <Card padding="py-4 px-6 md:px-16 mt-16">
                                                <div className="my-4 font-bold">
                                                    Você tem até três dias úteis para pagar
                                                </div>
                                                <div className="mb-12 text-sm">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet est
                                                    convallis pulvinar habitasse. Nibh accumsan eu et mauris at tempor,
                                                    eu. Integer morbi ac elit quis egestas fringilla. Ut consequat leo
                                                    quis quis enim gravida nibh tellus.
                                                </div>
                                                <Barcode />
                                            </Card>

                                            <div className="mt-10 grid grid-cols-12 gap-x-4 lg:gap-x-8">
                                                <Button
                                                    padding="py-4 md:py-3"
                                                    className="col-span-6 bg-white"
                                                    onClick={() => null}
                                                >
                                                    Copiar código
                                                </Button>
                                                <Button
                                                    padding="py-4 md:py-3"
                                                    className="col-span-6 bg-white"
                                                    onClick={() => null}
                                                >
                                                    Imprimir Boleto
                                                </Button>
                                            </div>
                                        </div>
                                    ) : (
                                        <>
                                            <Button
                                                padding="py-4 md:py-3 px-8"
                                                className="col-span-6 my-16 bg-black text-white"
                                                onClick={() => setShowBarcode(true)}
                                            >
                                                Generate Boleto
                                            </Button>
                                            <DeliveryDetails />
                                        </>
                                    )}
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
                                        <>
                                            <CreditCardList onAddCard={() => setAddCard(true)} />
                                            <DeliveryDetails />
                                        </>
                                    )}
                                </>
                            )}
                            {paymentType === 'pix' && (
                                <div>
                                    <Card padding="p-4 md:p-8">
                                        <div className="mb-2 text-lg font-bold">Escaneie este código para pagar</div>
                                        <ol className="list-decimal pl-4 text-sm">
                                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                            <li>Aliquet est convallis pulvinar habitasse.</li>
                                            <li>Aliquet est convallis pulvinar habitasse.</li>
                                        </ol>
                                        <div className="my-4 flex flex-row items-center gap-x-3 md:my-0 md:flex-col md:items-start">
                                            <div className="flex w-full justify-center md:my-12">
                                                <img src="/images/qrcode.png" />
                                            </div>
                                            <div>
                                                <div className="my-2 text-sm font-bold md:text-lg">
                                                    Ou copie o QR code para fazer o pagamento
                                                </div>
                                                <div className="text-xs md:text-sm">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                    <br /> Aliquet est convallis pulvinar habitasse.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-4 hidden items-center justify-between border-t-2 bg-[#F2F2F2] py-3 px-6 md:flex">
                                            <div>123456789123456789123456789123456789</div>
                                            <button>Copiar</button>
                                        </div>
                                    </Card>
                                    <div className="flex justify-center">
                                        <Button
                                            padding="py-4 md:py-3 px-12"
                                            className="col-span-6 mt-6 bg-white"
                                            onClick={() => null}
                                        >
                                            Copiar código
                                        </Button>
                                    </div>
                                    <DeliveryDetails />
                                </div>
                            )}
                        </>
                    )}
                </div>
                <div className="hidden px-12 font-semibold md:col-span-4 md:block md:text-[.7rem] lg:text-[.9rem]">
                    <div className="mb-6 flex items-start justify-end gap-x-2">
                        <LockIcon size={15} /> Compra 100% segura
                    </div>
                    <div className="mt-12 mb-2">Você está comprando</div>
                    <PurchaseSummary isSideSummary onSubmit={goToConfirmation} />
                    <Button
                        padding="py-4 md:py-3"
                        className="col-span-6 mt-6 w-full bg-white"
                        onClick={() => goToConfirmation()}
                    >
                        Navegar pela loja
                    </Button>
                </div>
            </div>
        </BuyerLayout>
    )
}

export default CheckoutPayment
