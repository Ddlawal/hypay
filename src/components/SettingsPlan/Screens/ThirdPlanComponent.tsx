import React, { useState } from 'react'
import { COLORS } from '../../../lib/constants/colors'
import { plans } from '../../../lib/data'
import { Barcode } from '../../Barcode'
import { Button } from '../../Button'
import { Card } from '../../Card'
import { BookTagIcon, PaymentCardIcon } from '../../Icons'
import PlanCard from '../PlanCard'
import { ComponentChangeState } from './SecondPlanComponent'

const CARD = 'Card'
const TICKET = 'Ticket'

function ThirdPlanComponent({ setPlanStage }: ComponentChangeState) {
    const [paymentMethod, setPaymentMethod] = useState(CARD)
    return (
        <section className="flex  w-full items-start justify-between gap-x-10">
            <div className="w-full">
                <div className="mx-auto flex w-full items-center justify-center gap-x-5  pt-3 text-center">
                    <div className="flex items-center gap-x-3">
                        <span className="grid h-10 w-10 place-items-center rounded-full bg-white text-black">1</span>
                        <p>Assine o plano</p>
                    </div>
                    <div className="flex items-center gap-x-3">
                        <span className="grid h-10 w-10 place-items-center rounded-full bg-white">2</span>
                        <p>Indentificação do pagamento</p>
                    </div>
                    <div className="flex items-center gap-x-3">
                        <span className="grid h-10 w-10 place-items-center rounded-full bg-hypay-pink text-white">
                            3
                        </span>
                        <p>Confirmação</p>
                    </div>
                </div>

                <div className="mt-5  px-4 py-4 md:px-12">
                    <header className="mb-5 flex gap-x-6">
                        <div>
                            <span className="mb-1 block">
                                <PaymentCardIcon color={COLORS.PINK} size={24} />
                            </span>
                            <span
                                // onClick={() => setPaymentMethod(CARD)}
                                className={`${
                                    paymentMethod === CARD
                                        ? 'border-b-4    border-hypay-secondary text-black'
                                        : 'border-b-2 border-hypay-gray text-hypay-gray'
                                } text-md cursor-pointer py-1 font-bold`}
                            >
                                Cartão de crédito
                            </span>
                        </div>
                        <div>
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

                    {/* {paymentMethod === CARD && <CardComponent setPlanStage={setPlanStage} />}
                    {paymentMethod === TICKET && <TicketComponent setPlanStage={setPlanStage} />} */}
                </div>

                <section className="flex w-full items-start justify-between gap-x-10 px-4 py-4 md:px-12">
                    <div className="md:w-10/12">
                        <Card className="w-10/12 py-12 px-10" rounded>
                            <header className="mb-2 flex items-center justify-between">
                                <h1 className="font-bold">Você tem até três dias úteis para pagar</h1>
                            </header>
                            <p className="mb-16 text-sm">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet est convallis pulvinar
                                habitasse. Nibh accumsan eu et mauris at tempor, eu. Integer morbi ac elit quis egestas
                                fringilla. Ut consequat leo quis quis enim gravida nibh tellus.
                            </p>

                            <div className="">
                                <Barcode />
                            </div>
                        </Card>
                    </div>
                    <div className="flex w-4/12 flex-col items-center justify-center">
                        <PlanCard
                            showMonthPay={false}
                            planTitle="Plano 1"
                            planAmount={plans[0].planAmount}
                            packages={plans[0].packages}
                        />
                    </div>
                </section>

                <footer>
                    <div className="flex items-center justify-center gap-x-5">
                        <Button onClick={() => setPlanStage(4)} primary className="w-max px-6 shadow-md">
                            Gerar Boleto
                        </Button>
                        <Button
                            onClick={() => setPlanStage(4)}
                            className="w-max border border-hypay-secondary px-6 text-hypay-secondary"
                        >
                            Copiar código
                        </Button>
                    </div>
                </footer>
            </div>
        </section>
    )
}

export default ThirdPlanComponent
