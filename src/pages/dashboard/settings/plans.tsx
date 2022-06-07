import React from 'react'
import { NextPage } from 'next'
import { PrimaryLayout } from '../../../components/Layout'
import { SettingsMenuItemList } from '../../../lib/data'
import { Card } from '../../../components/Card'
import { Button } from '../../../components/Button'
import { CheckmarkIcon } from 'react-hot-toast'
import { QuestionMarkIcon } from '../../../components/Icons'

const plans = [
    { planTitle: 'Plano 1', planAmount: '10', packages: [true, true, false, false, false] },
    { planTitle: 'Plano 2', planAmount: '500', packages: [true, true, true, false, false] },
    { planTitle: 'Plano 3', planAmount: '500', packages: [true, true, true, true, false] },
    { planTitle: 'Plano 4', planAmount: '500', packages: [true, true, true, true, false] },
]

const Plans: NextPage = () => {
    return (
        <PrimaryLayout currentTabIndex={5} menuItemList={SettingsMenuItemList} isPrimary={false}>
            <div className="w-full">
                <div className="mx-auto flex w-full items-center justify-center gap-x-5  pt-3 text-center">
                    <div className="flex items-center gap-x-3">
                        <span className="grid h-10 w-10 place-items-center rounded-full bg-hypay-pink text-white">
                            1
                        </span>
                        <p>Assine o plano</p>
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
                            <Card
                                key={index}
                                rounded
                                padding="p-2 py-4"
                                className="w-3/12 bg-plan-header-bg bg-no-repeat"
                            >
                                <header className=" text-center">
                                    <h6 className=" text-white">{planTitle}</h6>
                                    <Button primary className="my-4 px-3 shadow-md">
                                        Anual
                                    </Button>
                                    <p className="mb-2 text-sm text-hypay-iconGray">De 12X de R${planAmount}</p>
                                    <p className="mb-2 text-sm">Para 12X de </p>
                                    <h1 className="mb-2 text-2xl font-bold">R$300,00/Mês</h1>
                                    <Button primary className="my-2 px-12 font-bold shadow-md">
                                        Assinar
                                    </Button>
                                </header>

                                <ul className="list-none py-3">
                                    {packages.map((isActive, index) => (
                                        <li
                                            key={index}
                                            className="flex items-center justify-between border-b py-2 px-5"
                                        >
                                            {isActive ? (
                                                <CheckmarkIcon style={{ background: '#D95F76' }} />
                                            ) : (
                                                <span className="text-md font-extralight text-hypay-gray">X</span>
                                            )}
                                            {isActive ? (
                                                <span>Lorem Ipsum</span>
                                            ) : (
                                                <span className="text-sm text-hypay-gray line-through">
                                                    Lorem Ipsum
                                                </span>
                                            )}
                                            <QuestionMarkIcon />
                                        </li>
                                    ))}
                                </ul>
                            </Card>
                        ))}
                    </main>

                    <footer className="mt-4">
                        <h2 className="font-xl text-center font-bold">Tem um código promocional?</h2>
                        <div className="flex items-center justify-center gap-x-5">
                            <Button
                                className={`} rounded border border-hypay-secondary
                                bg-white px-7 text-hypay-secondary  `}
                            >
                                Meio de envio
                            </Button>
                        </div>
                    </footer>
                </div>
            </div>
        </PrimaryLayout>
    )
}

export default Plans
