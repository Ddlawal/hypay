import React, { useEffect, useState } from 'react'
import { NextPage } from 'next'
import { State, City } from 'country-state-city'

import { CheckoutWrapper } from '../../../components/Buyer'
import { SecondInput } from '../../../components/form'
import { useForm } from 'react-hook-form'
import { SelectField } from '../../../components/Select'
import { Button } from '../../../components/Button'
import { checkPhoneNumber } from '../../../lib/helper'
import { AddBuyerAddressType, BuyerAddresses } from '../../../interfaces/buyer'
import { useAddBuyerAddressMutation } from '../../../store/services/buyer'

type SelectOptionType = {
    label: string
    value: string
}

const Checkout: NextPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<AddBuyerAddressType>()
    const [userCountryCode, setUserCountryCode] = useState('BR')
    const [userState, setUserState] = useState<string | null>(null)
    const [userCity, setUserCity] = useState<string | null>(null)
    const [states, setStates] = useState<Array<SelectOptionType>>([])
    const [cities, setCities] = useState<Array<SelectOptionType>>([])
    const [buyerAddresses, setBuyerAddresses] = useState<Array<BuyerAddresses>>([])

    const [addBuyerAddress, { isLoading: isAddingBuyerAddress }] = useAddBuyerAddressMutation()

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('http://ip-api.com/json')
            const locationData = await res.json()

            setUserCountryCode(locationData.countryCode)
            const stt: Array<SelectOptionType> = State.getStatesOfCountry(locationData.countryCode).map((s) => ({
                label: s.name,
                value: s.isoCode,
            }))
            setStates(stt)
        }

        fetchData()
    }, [])

    const handleStateChange = (stateCode: string | null) => {
        if (!stateCode) {
            return
        }

        const state = State.getStateByCode(stateCode)

        console.log(state)
        setUserState(state?.name || null)

        const cityList: Array<SelectOptionType> = City.getCitiesOfState(userCountryCode, stateCode).map((c) => {
            return {
                label: c.name,
                value: c.name,
            }
        })

        setCities(cityList)
    }

    const handleCityChange = (city: string | null) => {
        console.log(city)
        setUserCity(city)
    }

    const onFormSubmit = async (data: AddBuyerAddressType) => {
        data.state = userState as string
        data.city = userCity as string
        data.country_id = 1

        try {
            const buyerAddresses = await addBuyerAddress(data).unwrap()

            setBuyerAddresses(buyerAddresses)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <CheckoutWrapper>
            <div className="mt-6 text-lg font-semibold">*Campos obrigatórios</div>
            <div className="mt-6 text-lg font-semibold">Identificação</div>
            <ul>
                {buyerAddresses.map(({ address }, i) => (
                    <li key={i}>{address}</li>
                ))}
            </ul>
            <form className="my-12" onSubmit={handleSubmit(onFormSubmit)}>
                <SecondInput
                    className="my-3 text-gray-800 md:my-0"
                    name="name"
                    errors={errors}
                    label="Nome Completo"
                    register={register}
                    validation={{
                        required: true,
                    }}
                    placeholder="Lucian Store"
                    type="text"
                />

                <div className="mb-3 grid grid-cols-12 gap-x-2 lg:gap-x-4">
                    <SecondInput
                        className="col-span-12 text-gray-800 md:col-span-6 md:my-0"
                        name="phone"
                        errors={errors}
                        label="Telefone"
                        register={register}
                        validation={{
                            required: false,
                            validate: (value: string) => checkPhoneNumber(value, 'en-NG'),
                        }}
                        placeholder="2348012345678"
                        type="tel"
                    />
                    <SecondInput
                        className="col-span-12 text-gray-800 md:col-span-6 md:my-0"
                        name="postal_code"
                        errors={errors}
                        label="Postal Code"
                        register={register}
                        validation={{
                            required: true,
                        }}
                        placeholder="Lucian Store"
                        type="text"
                    />
                </div>
                <SecondInput
                    className="col-span-12 mb-3 text-gray-800 md:col-span-4"
                    name="street_1"
                    errors={errors}
                    label="Street Address 1"
                    register={register}
                    validation={{
                        required: true,
                    }}
                    placeholder="Lucian Store"
                    type="text"
                />
                <SecondInput
                    className="col-span-12 mb-3 text-gray-800 md:col-span-8"
                    name="street_2"
                    errors={errors}
                    label="Street Address 2"
                    register={register}
                    validation={{
                        required: true,
                    }}
                    placeholder="Lucian Store"
                    type="text"
                />

                <div className="grid grid-cols-12 gap-x-2 md:mt-5 lg:gap-x-4">
                    <div className="col-span-12 md:col-span-6">
                        <SelectField<string | null>
                            labelClassName="my-3 md:my-2"
                            label="Estado*"
                            options={states}
                            name="state"
                            value={null}
                            onChange={handleStateChange}
                        />
                    </div>
                    <div className="col-span-12 md:col-span-6">
                        <SelectField<string | null>
                            labelClassName="my-3 md:my-2"
                            label="Cidade*"
                            options={cities}
                            name="city"
                            value={null}
                            onChange={handleCityChange}
                        />
                    </div>
                </div>
                <div className="mt-10 flex justify-center md:block">
                    <Button
                        padding="px-16 py-4 md:py-3"
                        className="w-full bg-black text-white md:w-fit"
                        loading={isAddingBuyerAddress}
                    >
                        Confirmar
                    </Button>
                </div>
            </form>
        </CheckoutWrapper>
    )
}

export default Checkout
