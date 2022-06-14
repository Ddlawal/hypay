import React from 'react'
import { CheckmarkIcon } from 'react-hot-toast'
import { PlansCardInterface } from '../../lib/data'
import { Button } from '../Button'
import { Card } from '../Card'
import { QuestionMarkIcon } from '../Icons'

type PlanCardComponent = PlansCardInterface & {
    showMonthPay?: boolean
}

function PlanCard({ planTitle, planAmount, packages, showMonthPay }: PlanCardComponent): JSX.Element {
    return (
        <Card rounded padding="p-2 py-4" className="w-full max-w-[233px] bg-plan-header-bg bg-no-repeat">
            <header className=" text-center">
                <h6 className=" text-white">{planTitle}</h6>
                <Button primary className="my-4 px-3 shadow-md">
                    Anual
                </Button>
                <p className="mb-2 text-sm text-hypay-iconGray">De 12X de R${planAmount}</p>
                <p className="mb-2 text-sm">Para 12X de </p>
                <h1 className=" text-2xl font-bold">R$300,00/Mês</h1>
                {showMonthPay && (
                    <Button primary className="my-2 px-12 font-bold shadow-md">
                        Assinar
                    </Button>
                )}
            </header>

            <ul className="list-none py-1">
                {packages.map((isActive, index) => (
                    <li key={index} className="flex items-center justify-between border-b py-2 px-5">
                        {isActive ? (
                            <CheckmarkIcon style={{ background: '#D95F76' }} />
                        ) : (
                            <span className="text-md font-extralight text-hypay-gray">X</span>
                        )}
                        {isActive ? (
                            <span>Lorem Ipsum</span>
                        ) : (
                            <span className="text-sm text-hypay-gray line-through">Lorem Ipsum</span>
                        )}
                        <QuestionMarkIcon />
                    </li>
                ))}
            </ul>
        </Card>
    )
}

export default PlanCard
