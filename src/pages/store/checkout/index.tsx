import React, { useEffect, useState } from 'react'
import { NextPage } from 'next'
import { State, City } from 'country-state-city'

import { CheckoutWrapper } from '../../../components/Buyer'
import { SecondInput } from '../../../components/form'
import { useForm } from 'react-hook-form'
import { SelectField } from '../../../components/Select'
import { Button } from '../../../components/Button'
import { checkPhoneNumber, showErrorSnackbar, showSuccessSnackbar } from '../../../lib/helper'
import { AddBuyerAddressType, BuyerAddress } from '../../../interfaces/buyer'
import { useAddBuyerAddressMutation } from '../../../store/services/buyer'
import { useCheckout } from '../../../hooks/useCheckout'
import { ArrowLeftIcon } from '../../../components/Icons/ArrowLeftIcon'
import { useRouter } from 'next/router'

type SelectOptionType = {
    label: string
    value: string
}

const userCountryCode = 'NG'

const Checkout: NextPage = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<AddBuyerAddressType>()
    const [userState, setUserState] = useState<string | null>(null)
    const [userCity, setUserCity] = useState<string | null>(null)
    const [states, setStates] = useState<Array<SelectOptionType>>([])
    const [cities, setCities] = useState<Array<SelectOptionType>>([])
    const [cityError, setCityError] = useState(false)
    const [stateError, setStateError] = useState(false)
    const [addMoreAddresses, setAddMoreAddresses] = useState(false)
    const { addresses: buyerAddresses, isFetchingBuyerAddress, setAddress } = useCheckout('address')
    const [preferredAddressId, setPreferredAddressId] = useState<number>()
    const { back } = useRouter()

    const [addBuyerAddress, { isLoading: isAddingBuyerAddress }] = useAddBuyerAddressMutation()

    useEffect(() => {
        const fetchData = async () => {
            const stt: Array<SelectOptionType> = State.getStatesOfCountry(userCountryCode).map((s) => ({
                label: s.name,
                value: s.isoCode,
            }))
            setStates(stt)
        }

        setAddress(buyerAddresses[0])
        setPreferredAddressId(buyerAddresses[0]?.address_id)
        fetchData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [buyerAddresses[0]])

    const handleStateChange = (stateCode: string | null) => {
        if (!stateCode) {
            return
        }

        const state = State.getStateByCode(stateCode)

        setUserState(state?.name || null)

        const cityList: Array<SelectOptionType> = City.getCitiesOfState(userCountryCode, stateCode).map((c) => {
            return {
                label: c.name,
                value: c.name,
            }
        })

        setCities(cityList)
        setStateError(false)
    }

    const handleCityChange = (city: string | null) => {
        setUserCity(city)
        setCityError(false)
    }

    const handleSelectBuyerAddress = (id: number, data: BuyerAddress) => {
        setAddress(data)
        setPreferredAddressId(id)
    }

    const onFormSubmit = async (data: AddBuyerAddressType) => {
        if (!userState || !userCity) {
            !userState && setStateError(true)
            !userCity && setCityError(true)
            return
        }

        data.state = userState
        data.city = userCity
        data.country_id = 1

        try {
            await addBuyerAddress(data).unwrap()

            showSuccessSnackbar('Shipping address added successfully.')
            setUserState(null)
            setUserCity(null)
            setAddMoreAddresses(false)
            reset()
        } catch (error) {
            showErrorSnackbar('Error! Something went wrong!')
            console.log(error)
        }
    }

    return (
        <CheckoutWrapper isLoading={isFetchingBuyerAddress} canProceed={!!preferredAddressId} next="/shipping">
            <div className="mb-8 flex items-center justify-between text-lg font-semibold">
                <header className="mb-2 flex items-center gap-x-4 text-lg font-bold">
                    <Button preventDefault>
                        <ArrowLeftIcon size={28} onClick={() => back()} />
                    </Button>{' '}
                    Identificação
                </header>
                {buyerAddresses.length && !addMoreAddresses ? (
                    <Button
                        onClick={() => setAddMoreAddresses(true)}
                        preventDefault
                        primary
                        padding="px-4 py-1"
                        size="sm"
                    >
                        Add Address
                    </Button>
                ) : null}
            </div>

            {buyerAddresses.length && !addMoreAddresses ? (
                <ul className="mt-4">
                    {buyerAddresses.map((buyerAddress, i) => {
                        const { address_id, address, name, phone } = buyerAddress
                        return (
                            <li
                                key={i}
                                className="my-3 flex items-center gap-x-4 rounded border border-hypay-gray px-3 py-2"
                            >
                                <div>
                                    <input
                                        type="radio"
                                        name="address"
                                        onChange={() => handleSelectBuyerAddress(address_id, buyerAddress)}
                                        checked={preferredAddressId === address_id}
                                    />
                                </div>
                                <div>
                                    <div>{name}</div>
                                    <div>{address}</div>
                                    <div>{phone}</div>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            ) : (
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
                                required: true,
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
                                value={userState}
                                onChange={handleStateChange}
                                required={stateError}
                            />
                        </div>
                        <div className="col-span-12 md:col-span-6">
                            <SelectField<string | null>
                                labelClassName="my-3 md:my-2"
                                label="Cidade*"
                                options={cities}
                                name="city"
                                value={userCity}
                                onChange={handleCityChange}
                                required={cityError}
                            />
                        </div>
                    </div>
                    <div className="mt-10 flex justify-around gap-4">
                        {buyerAddresses.length ? (
                            <Button
                                padding="px-16 py-4 md:py-3"
                                className="w-full bg-gray-100 md:w-fit"
                                preventDefault
                                onClick={() => setAddMoreAddresses(false)}
                            >
                                Cancelar
                            </Button>
                        ) : null}
                        <Button
                            padding="px-16 py-4 md:py-3"
                            className="w-full bg-black text-white md:w-fit"
                            loading={isAddingBuyerAddress}
                        >
                            Confirmar
                        </Button>
                    </div>
                </form>
            )}
        </CheckoutWrapper>
    )
}

export default Checkout
