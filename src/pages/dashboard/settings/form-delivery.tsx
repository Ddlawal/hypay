import React, { useState } from 'react'
import { NextPage } from 'next'
import { useForm } from 'react-hook-form'
import { PrimaryLayout } from '../../../components/Layout'
import { SettingsMenuItemList } from '../../../lib/data'
import { Button } from '../../../components/Button'
import { SecondInput } from '../../../components/form'

// Deliivery type

const SHIPPED = 'Shipped'
const PICKUP = 'Pickup'

const FormDelivery: NextPage = () => {
    const [deliveryType, setDeliveryType] = useState(SHIPPED)
    return (
        <PrimaryLayout currentTabIndex={4} menuItemList={SettingsMenuItemList} isPrimary={false}>
            <div className="px-4 py-4 md:w-8/12 md:px-12">
                <header>
                    <h1 className="text-3xl font-bold">Formas de envio</h1>

                    <div className="my-8 flex  w-10/12 items-center gap-x-10">
                        <Button
                            onClick={() => setDeliveryType(SHIPPED)}
                            className={`${
                                deliveryType === SHIPPED
                                    ? 'border-hypay-secondary bg-white px-7 text-hypay-secondary'
                                    : 'border bg-white px-7 text-hypay-gray'
                            } rounded border  `}
                        >
                            Meio de envio
                        </Button>
                        <Button
                            onClick={() => setDeliveryType(PICKUP)}
                            className={`${
                                deliveryType === PICKUP
                                    ? 'border-hypay-secondary bg-white px-7 text-hypay-secondary'
                                    : 'border bg-white px-7 text-hypay-gray'
                            } rounded border `}
                        >
                            Loja física
                        </Button>
                    </div>

                    {deliveryType === SHIPPED && <ShippingMethod />}
                    {deliveryType === PICKUP && <PhysicalStore />}
                </header>
            </div>
        </PrimaryLayout>
    )
}

export default FormDelivery

const PhysicalStore = () => {
    const { register } = useForm()
    const [addPhysicalStore, setAddPhysicalStore] = useState(false)
    return (
        <section>
            <header className="text-xl font-bold">Você tem locais para que seus clientes retirem suas compras?</header>

            {!addPhysicalStore && (
                <Button primary className="my-4 px-10" onClick={() => setAddPhysicalStore(true)}>
                    Adicionar loja física
                </Button>
            )}
            {addPhysicalStore && (
                <form>
                    <SecondInput label="Nome da loja física*" name="storenamw" register={register} />

                    <div className="flex items-center justify-between gap-x-3">
                        <span className="w-4/12">
                            <SecondInput label="Estado*" name="Estado" register={register} />
                        </span>
                        <span className="w-4/12">
                            <SecondInput label="Cidade*" name="Cidade" register={register} />
                        </span>
                        <span className="w-4/12">
                            <SecondInput label="Bairro*" name="Bairro*" register={register} />
                        </span>
                    </div>
                    <div className="flex items-center justify-between gap-x-3">
                        <span className="w-4/12">
                            <SecondInput label="Endereço*" name="Estado" register={register} />
                        </span>
                        <span className="w-4/12">
                            <SecondInput label="Número*" name="Número" register={register} />
                        </span>
                        <span className="w-4/12">
                            <SecondInput label="Complemento (Opcional)" name="complemento*" register={register} />
                        </span>
                    </div>

                    <div className="flex justify-start gap-x-5">
                        <Button onClick={() => setAddPhysicalStore(false)} className="px-10 font-bold text-hypay-pink">
                            Cancelar
                        </Button>
                        <Button primary className="px-10">
                            Adicionar loja física
                        </Button>
                    </div>
                </form>
            )}
        </section>
    )
}

const ShippingMethod = () => {
    const { register } = useForm()
    return (
        <section>
            <header className="text-xl font-bold">De onde você vai enviar seus produtos?</header>

            <form>
                <SecondInput label="CEP" name="cep" register={register} />

                <div className="flex items-center justify-between gap-x-3">
                    <span className="w-4/12">
                        <SecondInput label="Estado*" name="Estado" register={register} />
                    </span>
                    <span className="w-4/12">
                        <SecondInput label="Cidade*" name="Cidade" register={register} />
                    </span>
                    <span className="w-4/12">
                        <SecondInput label="Bairro*" name="Bairro*" register={register} />
                    </span>
                </div>
                <div className="flex items-center justify-between gap-x-3">
                    <span className="w-4/12">
                        <SecondInput label="Endereço*" name="Estado" register={register} />
                    </span>
                    <span className="w-4/12">
                        <SecondInput label="Número*" name="Número" register={register} />
                    </span>
                    <span className="w-4/12">
                        <SecondInput label="Complemento (Opcional)" name="complemento*" register={register} />
                    </span>
                </div>

                <div className="flex justify-start">
                    <Button primary className="px-10">
                        Salvar
                    </Button>
                </div>
            </form>
        </section>
    )
}
