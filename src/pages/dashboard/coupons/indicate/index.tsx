import React from 'react'
import { PrimaryLayout } from '../../../../components/Layout'
import { SecondInput } from '../../../../components/form'
import { useForm } from 'react-hook-form'
import { Card } from '../../../../components/Card'
import { indicateData, indicateDataType } from '../../../../lib/data'

function Indicate() {
    const {
        register,
        formState: { errors },
    } = useForm<any>()

    return (
        <PrimaryLayout currentTabIndex={6} dropDownIndex={1}>
            <div className="py-4 px-8 md:px-12">
                <header className="border-b-2 pb-8 md:py-6">
                    <h1 className="mb-6 text-4xl font-bold">Ganhe prêmios indicando o Hypay</h1>
                    <p className="text-base">
                        Compartilhe coupons com outros vendedores e ganhe prêmios na nossa plataforma. Todo vendedor que
                        entrar para o Hypay pelo link que você enviar, você acumula pontos. Quanto mais pontos você
                        alcançar, mais prêmios você ganha.
                    </p>
                    <p className="  flex  items-center gap-2 py-2 text-sm text-red-500">
                        Saiba mais detalhes sobre como funciona
                    </p>
                    <div className="flex flex-col md:flex-row md:items-end ">
                        <SecondInput
                            className="mb-5 mr-8 w-full items-end md:my-0 md:w-2/5"
                            name="productname"
                            errors={errors}
                            label="Link"
                            register={register}
                            // defaultValue={product?.productName}
                            validation={{
                                required: true,
                            }}
                            placeholder="www.hypay.com.br/abc123def4563def4"
                            type="text"
                        />
                        <button className="mb-4 h-8 w-44 rounded-lg bg-hypay-orange md:my-6 md:mb-1">
                            Copiar link
                        </button>
                    </div>
                    <p className="h-3 text-xs">Compartilhe esse link com outros vendedores e ganhe beneficios</p>
                </header>
                <section className="my-4">
                    <div className=" flex w-full flex-col items-center justify-between md:flex-row ">
                        <Card className="w-4/5 rounded-lg md:h-28 md:w-7/12 lg:w-3/5">
                            <p>Você está no nível 2</p>
                            <div className="flex h-11 w-full  items-center">
                                <div className="my-1 h-4 w-11/12 rounded-lg bg-hypay-gray">
                                    <div className="h-4 w-1/3 rounded-lg bg-hypay-secondary"></div>
                                </div>
                                <div className=" mb-4 ml-4 flex flex-col lg:w-1/3">
                                    <p className="text-xs">convites</p>
                                    <p className="font-bold text-hypay-secondary">04/10</p>
                                </div>
                            </div>
                        </Card>
                        <Card className="my-4 w-3/5 rounded-lg py-6 text-center md:mr-0  md:w-1/3 xl:w-1/3">
                            Parabéns! Você já ajudou 09 vendedores à aumentarem suas vendas usando o Hypay.
                        </Card>
                    </div>
                    <div className=" flex grid grid-cols-2 flex-wrap items-center justify-between gap-2  text-center sm:grid-cols-4 lg:flex lg:grid-cols-5  ">
                        {indicateData.map(({ name, bottomText, status, icon }: indicateDataType, index) => (
                            <div key={index} className="text-center">
                                <Card
                                    className={`${
                                        status === 'completed'
                                            ? 'bg-hypay-green text-white'
                                            : status === 'pending'
                                            ? 'border border-hypay-secondary text-hypay-secondary'
                                            : 'text-gray-500 text-opacity-50'
                                    } xlg:w-36 my-2 mt-2 flex h-24 w-full flex-col  items-center justify-center rounded-md text-center md:w-36`}
                                >
                                    <div className="">{icon}</div>
                                    <p>{name}</p>
                                </Card>
                                <p
                                    className={`${
                                        status === 'completed'
                                            ? 'text-hypay-green'
                                            : status === 'pending'
                                            ? 'text-hypay-secondary'
                                            : 'text-gray-500 text-opacity-50'
                                    } w-full sm:w-36 xl:w-36 `}
                                >
                                    {bottomText}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </PrimaryLayout>
    )
}

export default Indicate
