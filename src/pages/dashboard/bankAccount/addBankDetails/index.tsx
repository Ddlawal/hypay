import React from 'react'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'

import { PrimaryLayout } from '../../../../components/Layout'
import { Card } from '../../../../components/Card'
import { SelectField } from '../../../../components/Select'
import { SecondInput } from '../../../../components/form'
import { Button } from '../../../../components/Button'

function Index() {
    const { register } = useForm()
    const { back } = useRouter()
    return (
        <PrimaryLayout>
            <div className="px-4 py-4 md:w-full md:px-12">
                <header className="justify-venter flex items-center gap-x-6  pb-3">
                    <h1 className="text-3xl font-bold">Balance</h1>
                </header>
                <>
                    <Card rounded padding="py-6 px-8">
                        <h1 className="font-bold">Register Bank Account</h1>
                        <form>
                            {/* CHeck boxes div */}
                            <div className="my-6 flex justify-between md:w-1/2">
                                <div className="flex items-center gap-x-3">
                                    <input
                                        className="h-5 w-5 border pr-5 checked:border-black checked:bg-black"
                                        type="radio"
                                        name="checkingAccount"
                                        id="checkingAccount"
                                        value="checkingAccount"
                                    />
                                    <label htmlFor="checkingAccount">Checking account</label>
                                </div>
                                <div className="flex items-center gap-x-3">
                                    <input
                                        type="radio"
                                        className="h-5 w-5 border pr-5 checked:bg-black "
                                        name="checkingAccount"
                                        value="savingsAccount"
                                        id="savingsAccount"
                                    />
                                    <label htmlFor="savingsAccount">Savings account</label>
                                </div>
                            </div>
                            {/* select dropdown */}
                            <div className="w-full md:w-3/12">
                                <SelectField
                                    onChange={() => null}
                                    options={[]}
                                    label="Select Bank"
                                    name="selectBank"
                                    value="selectBank"
                                    labelClassName="text-md font-bold"
                                />
                            </div>

                            {/* Bank Info */}
                            <div className="my-2 flex  items-start justify-between gap-x-10">
                                <div className="w-full md:w-6/12 ">
                                    <SecondInput type="text" label="Accound" register={register} name="account" />
                                </div>
                                <div className="w-full md:w-6/12 ">
                                    <SecondInput type="text" label="Agency" register={register} name="agency" />
                                </div>
                            </div>
                            <div className="my-2 flex  items-start justify-between gap-x-10">
                                <div className="w-full md:w-6/12 ">
                                    <SecondInput
                                        type="text"
                                        label="Name of Holder"
                                        register={register}
                                        name="nameOfHolder"
                                    />
                                </div>
                                <div className="w-full md:w-6/12 ">
                                    <SecondInput type="text" label="CPF" register={register} name="CPF" />
                                </div>
                            </div>

                            <div className="bg-red w-ful flex items-center   justify-between md:ml-auto md:w-4/12">
                                <Button onClick={() => back()} className="font-bold">
                                    Cancelar
                                </Button>
                                <Button className="px-6 font-bold" primary>
                                    Register
                                </Button>
                            </div>
                        </form>
                    </Card>
                </>
            </div>
        </PrimaryLayout>
    )
}

export default Index
