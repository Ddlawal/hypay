import { NextPage } from 'next'
import { useRouter } from 'next/router'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Button } from '../../../components/Button'
import { SecondInput } from '../../../components/form'
import { LockIcon } from '../../../components/Icons'
import { BuyerLayout } from '../../../components/Layout'
import { SelectField } from '../../../components/Select'
import { BuyerTimeline } from '../../../components/Timeline'

type FormFields = {
    buyer_email: string
    buyer_name: string
    dexcription: string
    subject: string
}

const Identification: NextPage = () => {
    const { push } = useRouter()
    const {
        register,
        // handleSubmit,
        formState: { errors },
    } = useForm<FormFields>()

    return (
        <BuyerLayout>
            <div className="mt-6 grid grid-cols-12 md:gap-x-10 md:px-[10%]">
                <div className="col-span-12 px-4 md:col-span-9 md:px-0 md:pl-[20%] lg:pl-[30%]">
                    <BuyerTimeline />
                    <div className="mt-6 text-lg font-semibold">*Campos obrigatórios</div>
                    <div className="mt-6 text-lg font-semibold">Identificação</div>
                    <form className="my-12" onSubmit={(e) => e.preventDefault()}>
                        <SecondInput
                            className="my-3 text-gray-800 md:my-0"
                            name="buyer_name"
                            errors={errors}
                            label="Nome Completo"
                            register={register}
                            validation={{
                                required: true,
                            }}
                            placeholder="Lucian Store"
                            type="text"
                        />

                        <div className="grid grid-cols-12 gap-x-2 lg:gap-x-4">
                            <SecondInput
                                className="col-span-12 mb-3 text-gray-800 md:col-span-6 md:my-0"
                                name="buyer_name"
                                errors={errors}
                                label="Telefone"
                                register={register}
                                validation={{
                                    required: true,
                                }}
                                placeholder="Lucian Store"
                                type="text"
                            />
                            <SecondInput
                                className="col-span-12 mb-3 text-gray-800 md:col-span-6 md:my-0"
                                name="buyer_name"
                                errors={errors}
                                label="CPF"
                                register={register}
                                validation={{
                                    required: true,
                                }}
                                placeholder="Lucian Store"
                                type="text"
                            />
                        </div>

                        <div className="mt-6 mb-4">Endereço de entrega</div>

                        <div className="grid grid-cols-12 gap-x-2 lg:gap-x-4">
                            <SecondInput
                                className="col-span-12 mb-3 text-gray-800 md:col-span-4 md:my-0"
                                name="buyer_name"
                                errors={errors}
                                label="CEP*"
                                register={register}
                                validation={{
                                    required: true,
                                }}
                                placeholder="Lucian Store"
                                type="text"
                            />
                            <SecondInput
                                className="col-span-12 mb-3 text-gray-800 md:col-span-8 md:my-0"
                                name="buyer_name"
                                errors={errors}
                                label="Rua*"
                                register={register}
                                validation={{
                                    required: true,
                                }}
                                placeholder="Lucian Store"
                                type="text"
                            />
                        </div>

                        <div className="grid grid-cols-12 gap-x-2 md:mt-5 lg:gap-x-4">
                            <SecondInput
                                className="col-span-12 mb-3 text-gray-800 md:order-last md:col-span-5 md:my-0"
                                name="buyer_name"
                                errors={errors}
                                label="Bairro*"
                                register={register}
                                validation={{
                                    required: true,
                                }}
                                placeholder="Lucian Store"
                                type="text"
                            />

                            <div className="col-span-12 grid grid-cols-12 gap-x-2 md:col-span-7 lg:gap-x-4">
                                <SecondInput
                                    className="col-span-4 mb-3 text-gray-800 md:my-0"
                                    name="buyer_name"
                                    errors={errors}
                                    label="Número*"
                                    register={register}
                                    validation={{
                                        required: true,
                                    }}
                                    placeholder="Lucian Store"
                                    type="text"
                                />
                                <SecondInput
                                    className="col-span-8 mb-3 text-gray-800 md:my-0"
                                    name="buyer_name"
                                    errors={errors}
                                    label="Complemento"
                                    register={register}
                                    validation={{
                                        required: true,
                                    }}
                                    placeholder="Lucian Store"
                                    type="text"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-12 gap-x-2 md:mt-5 lg:gap-x-4">
                            <div className="col-span-12 md:col-span-6">
                                <SelectField<number | null>
                                    labelClassName="my-3 md:my-2"
                                    label="Estado*"
                                    options={[
                                        { label: 'Option One', value: 1 },
                                        { label: 'Option Two', value: 2 },
                                    ]}
                                    name="subject"
                                    value={null}
                                    onChange={() => null}
                                />
                            </div>
                            <div className="col-span-12 md:col-span-6">
                                <SelectField<number | null>
                                    labelClassName="my-3 md:my-2"
                                    label="Cidade*"
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
                        <div className="mt-10 flex justify-center md:block">
                            <Button
                                padding="px-16 py-4 md:py-3"
                                className="w-full bg-black text-white md:w-fit"
                                onClick={() => push('/store/checkout/payment')}
                            >
                                Confirmar
                            </Button>
                        </div>
                    </form>
                </div>
                <div className="hidden items-start gap-x-1 font-semibold md:col-span-3 md:flex md:text-[.7rem] lg:text-[.9rem]">
                    <LockIcon size={15} /> Compra 100% segura
                </div>
            </div>
        </BuyerLayout>
    )
}

export default Identification
