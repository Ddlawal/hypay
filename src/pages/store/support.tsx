import React, { useState } from 'react'
import { NextPage } from 'next/types'
import { BuyerLayout } from '../../components/Layout'
import { SecondInput, TextArea } from '../../components/form'
import { useForm } from 'react-hook-form'
import { SelectField } from '../../components/Select'
import { Button } from '../../components/Button'
import { useRouter } from 'next/router'

type FormFields = {
    buyer_email: string
    buyer_name: string
    dexcription: string
    subject: string
}

const BuyerSupportPage: NextPage = () => {
    const [isLoading, setIsLoading] = useState(false)
    const { back } = useRouter()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormFields>()

    const onSubmit = (data: FormFields) => {
        setIsLoading(true)

        if (isLoading) {
            return
        }

        console.log(data)
    }

    return (
        <BuyerLayout>
            <div className="md:flex md:divide-x md:divide-gray-400 md:px-[15%]">
                <div className="px-4 md:h-screen md:basis-1/3 md:px-8">
                    <div className="mt-10">
                        <div className="mb-6 font-bold">Fale conosco</div>
                        <div className="text-justify text-sm">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eros, pharetra ut pharetra augue
                            tincidunt orci amet egestas tristique. Tincidunt vel vitae pharetra placerat. Et sem id
                            aliquet vel gravida venenatis feugiat vulputate arcu. Pulvinar ultricies dui in id integer.
                        </div>
                    </div>
                </div>
                <div className="px-4 md:basis-2/3 md:px-8">
                    <div className="mt-10">
                        <form onSubmit={handleSubmit(onSubmit)} className="mt-4 md:w-10/12">
                            <SecondInput
                                className="my-5 text-gray-800 md:my-0"
                                name="buyer_email"
                                errors={errors}
                                label="Email"
                                register={register}
                                validation={{
                                    required: true,
                                }}
                                placeholder="Lucian Store"
                                type="text"
                            />
                            <SecondInput
                                className="my-5 text-gray-800 md:my-0"
                                name="buyer_name"
                                errors={errors}
                                label="Name"
                                register={register}
                                validation={{
                                    required: true,
                                }}
                                placeholder="Lucian Store"
                                type="text"
                            />
                            <SelectField<number | null>
                                labelClassName="my-5 md:my-2"
                                label="Assunto"
                                options={[
                                    { label: 'Option One', value: 1 },
                                    { label: 'Option Two', value: 2 },
                                ]}
                                name="subject"
                                value={null}
                                onChange={() => null}
                            />
                            <TextArea
                                className="my-5"
                                register={register}
                                validation={{
                                    required: true,
                                }}
                                label="Mensagem"
                                name="dexcription"
                                onChange={() => null}
                            />
                            <div className="mb-16 mt-10 flex gap-x-4">
                                <Button className="w-full bg-white px-6 md:w-fit" onClick={() => back()}>
                                    Valtar
                                </Button>
                                <Button
                                    className="w-full bg-black px-6 text-white md:w-fit"
                                    onClick={() => handleSubmit}
                                >
                                    Enviar
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </BuyerLayout>
    )
}

export default BuyerSupportPage
