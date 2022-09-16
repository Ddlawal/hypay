import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { COLORS } from '../../../lib/constants/colors'
import { plans } from '../../../lib/data'
import { Button } from '../../Button'
import { SecondInput } from '../../form'
import { BookTagIcon, PaymentCardIcon } from '../../Icons'
import { NextLink } from '../../Links'
import { SelectField } from '../../Select'
import PlanCard from '../PlanCard'

const CARD = 'Card'
const TICKET = 'Ticket'

export interface ComponentChangeState {
    setPlanStage: React.Dispatch<React.SetStateAction<number>>
}

export const SecondPlanComponent = ({ setPlanStage }: ComponentChangeState) => {
    const [paymentMethod, setPaymentMethod] = useState(CARD)
    return (
        <div className="w-full">
            {/* Header Timeline */}
            <div className="mx-auto flex w-full items-center justify-center gap-x-5  pt-3 text-center">
                <div className="flex items-center gap-x-3">
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-white text-black">1</span>
                    <p>Assine o plano</p>
                </div>
                <div className="flex items-center gap-x-3">
                    <span className="grid h-10 w-10 place-items-center rounded-full  bg-hypay-pink  text-black">2</span>
                    <p>Indentificação do pagamento</p>
                </div>
                <div className="flex items-center gap-x-3">
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-white  text-black">3</span>
                    <p>Confirmação</p>
                </div>
            </div>
            {/* Select Card or Ticket section*/}
            <div className="mt-5  px-4 py-4 md:px-12">
                <header className="mb-5 flex gap-x-6">
                    <div className="">
                        <span className="mb-1 block">
                            <PaymentCardIcon color={COLORS.PINK} size={24} />
                        </span>
                        <span
                            onClick={() => setPaymentMethod(CARD)}
                            className={`${
                                paymentMethod === CARD
                                    ? 'border-b-4    border-hypay-secondary text-black'
                                    : 'border-b-2 border-hypay-gray text-hypay-gray'
                            } text-md cursor-pointer py-1 font-bold`}
                        >
                            Cartão de crédito
                        </span>
                    </div>
                    <div className="">
                        <span className="mb-1 block">
                            <BookTagIcon color={COLORS.PINK} size={24} />
                        </span>
                        <span
                            onClick={() => setPaymentMethod(TICKET)}
                            className={`${
                                paymentMethod === TICKET
                                    ? 'border-b-4 border-hypay-secondary text-black'
                                    : 'border-b-2 border-hypay-gray text-hypay-gray'
                            } text-md cursor-pointer py-1 font-bold`}
                        >
                            Boleto
                        </span>
                    </div>
                </header>

                {paymentMethod === CARD && <CardComponent setPlanStage={setPlanStage} />}
                {paymentMethod === TICKET && <TicketComponent setPlanStage={setPlanStage} />}
            </div>
        </div>
    )
}

const CardComponent = function ({ setPlanStage }: ComponentChangeState) {
    const { register } = useForm()

    return (
        <section className="flex  w-full items-start justify-between gap-x-10">
            <div className="md:w-8/12">
                <form onClick={(e) => e.preventDefault()}>
                    <div>
                        <SecondInput name="name" label="Nome impresso no cartão*" type="text" register={register} />
                    </div>
                    {/* Second Row fields */}
                    <div className="flex gap-x-3">
                        <div className="w-6/12">
                            <SecondInput
                                name="CardName"
                                label="Número do cartão de crédito*"
                                type="text"
                                register={register}
                            />
                        </div>
                        <div className="flex gap-x-3">
                            <div className="w-1/2">
                                <SecondInput name="validate" label="Validade*" type="text" register={register} />
                            </div>
                            <div className="w-1/2">
                                <SecondInput name="cvv" label="CVV*" type="text" register={register} />
                            </div>
                        </div>
                    </div>
                    {/* Third Row fields */}
                    <div className="flex items-center gap-x-3 ">
                        <div className="w-6/12">
                            <SecondInput
                                className="-mt-1"
                                inputClassName="h-[38px]"
                                name="phone"
                                label="Telefone*"
                                type="text"
                                register={register}
                            />
                        </div>
                        <div className="w-6/12 pt-5">
                            <SelectField
                                name="phone"
                                placeholder="Parcelas"
                                options={[]}
                                value={'Parcelas'}
                                onChange={() => null}
                            />
                        </div>
                    </div>
                    {/* Fourth Row Starts here */}
                    <h1 className="text-lg font-bold">Endereço de cobrança</h1>

                    <div className="flex items-center justify-between gap-x-3">
                        <div className="w-5/12">
                            <SecondInput name="cep" label="CEP" type="text" register={register} />
                        </div>
                        <div className="w-7/12">
                            <SecondInput name="rua" label="Rua" type="text" register={register} />
                        </div>
                    </div>

                    {/* Fifit row rields */}
                    <div className="jutsify-start flex items-center gap-x-3">
                        <div className="w-3/12">
                            <SecondInput name="number" label="Número" type="text" register={register} />
                        </div>
                        <div className="w-4/12">
                            <SecondInput name="complemento" label="Complemento" type="text" register={register} />
                        </div>
                        <div className="w-5/12">
                            <SecondInput name="Bairro" label="Bairro" type="text" register={register} />
                        </div>
                    </div>

                    {/* Sixth Row fields */}
                    <div className="flex items-center gap-x-3">
                        <div className="w-1/2">
                            <SelectField
                                labelClassName="font-bold"
                                label="Estado"
                                name="phone"
                                placeholder="São Paulo"
                                options={[]}
                                value={'Sâo Paulo'}
                                onChange={() => null}
                            />
                        </div>
                        <div className="w-1/2">
                            <SelectField
                                labelClassName="font-bold"
                                label="Cidade"
                                name="phone"
                                placeholder="Sâo Paulo"
                                options={[]}
                                value={'Sâo Paulo'}
                                onChange={() => null}
                            />
                        </div>
                    </div>
                    <footer className="flex items-center justify-center">
                        <Button onClick={() => setPlanStage(3)} primary className="my-4 w-max px-6 shadow-md">
                            Finalizar Pagamento
                        </Button>
                    </footer>
                </form>
            </div>
            <div className="flex flex-col items-center justify-center md:w-4/12">
                <PlanCard planTitle="Plano 1" planAmount={plans[0].planAmount} packages={plans[0].packages} />

                <NextLink href="" className=" mt-3 text-center text-hypay-pink underline">
                    Trocar Plano
                </NextLink>
            </div>
        </section>
    )
}

// const

const TicketComponent = function ({ setPlanStage }: ComponentChangeState) {
    // const [generatedTicket, setGeneratedTicket] = useState(CARD)
    const { register } = useForm()
    return (
        <section className="flex  w-full items-start justify-between gap-x-10">
            <div className="w-8/12">
                <form>
                    <SecondInput name="name" label="Nome Completo" type="text" register={register} />

                    <div className="flex items-center gap-x-3">
                        <div className="w-1/2">
                            <SecondInput label="Telefone" name="phone" onChange={() => null} register={register} />
                        </div>
                        <div className="w-1/2">
                            <SecondInput label="CPF" name="cpf" onChange={() => null} register={register} />
                        </div>
                    </div>
                    {/* Fourth Row Starts here */}
                    <h1 className="mt-10 text-lg font-bold">Endereço de cobrança</h1>

                    <div className="flex items-center justify-between gap-x-3">
                        <div className="w-5/12">
                            <SecondInput name="cep" label="CEP*" type="text" register={register} />
                        </div>
                        <div className="w-7/12">
                            <SecondInput name="rua" label="Rua" type="text" register={register} />
                        </div>
                    </div>

                    {/* Fifit row rields */}
                    <div className="jutsify-start flex items-center gap-x-3">
                        <div className="w-3/12">
                            <SecondInput name="number" label="Número" type="text" register={register} />
                        </div>
                        <div className="w-4/12">
                            <SecondInput name="complemento" label="Complemento" type="text" register={register} />
                        </div>
                        <div className="w-5/12">
                            <SecondInput name="Bairro" label="Bairro" type="text" register={register} />
                        </div>
                    </div>
                    {/* Sixth Row fields */}
                    <div className="flex items-center gap-x-3">
                        <div className="w-1/2">
                            <SelectField
                                labelClassName="font-bold"
                                label="Estado"
                                name="phone"
                                placeholder="São Paulo"
                                options={[]}
                                value={'Sâo Paulo'}
                                onChange={() => null}
                            />
                        </div>
                        <div className="w-1/2">
                            <SelectField
                                labelClassName="font-bold"
                                label="Cidade"
                                name="phone"
                                placeholder="Sâo Paulo"
                                options={[]}
                                value={'Sâo Paulo'}
                                onChange={() => null}
                            />
                        </div>
                    </div>
                    <footer className="flex items-center justify-center">
                        <Button onClick={() => setPlanStage(3)} primary className="my-4 w-max px-6 shadow-md">
                            Gerar Boleto
                        </Button>
                    </footer>
                </form>
            </div>
            <div className="flex w-4/12 flex-col items-center justify-center">
                <PlanCard planTitle="Plano 1" planAmount={plans[0].planAmount} packages={plans[0].packages} />

                <NextLink href="" className=" mt-3 text-center text-hypay-pink underline">
                    Trocar Plano
                </NextLink>
            </div>
        </section>
    )
}
