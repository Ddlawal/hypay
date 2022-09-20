import React from 'react'

import { plans } from '../../../lib/data'
import { Button } from '../../Button'
import PlanCard from '../PlanCard'

export const FirstPlanComponent = ({
    setPlanStage,
}: {
    setPlanStage: React.Dispatch<React.SetStateAction<number>>
}) => {
    return (
        <div className="w-full">
            <div className="mx-auto flex w-full items-center justify-center gap-x-5  pt-3 text-center">
                <div className="flex items-center gap-x-3">
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-hypay-pink text-white">1</span>
                    <p className="capitalize">Assine o plano</p>
                </div>
                <div className="flex items-center gap-x-3">
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-white  text-black">2</span>
                    <p>Indentificação do pagamento</p>
                </div>
                <div className="flex items-center gap-x-3">
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-white  text-black">3</span>
                    <p>Confirmação</p>
                </div>
            </div>
            <div className="mt-5 px-4 py-4 md:px-12">
                <header>
                    <h1 className="text-3xl font-bold">Assine o plano que cabe no seu bolso</h1>
                </header>

                <main className="mt-5 flex items-start justify-start gap-x-3">
                    {plans.map(({ planTitle, planAmount, packages }, index) => (
                        <PlanCard key={index} planTitle={planTitle} planAmount={planAmount} packages={packages} />
                    ))}
                </main>

                <footer className="mt-4">
                    <h2 className="font-xl text-center font-bold">Tem um código promocional?</h2>
                    <div className="flex items-center justify-center gap-x-5">
                        <Button
                            onClick={() => setPlanStage(2)}
                            className={`rounded border border-hypay-secondary
                                bg-white px-7 text-hypay-secondary`}
                        >
                            Meio de envio
                        </Button>
                    </div>
                </footer>
            </div>
        </div>
    )
}
