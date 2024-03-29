import { createSlice } from '@reduxjs/toolkit'
import type { AsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '..'
import { buyerApi } from '../services/buyer'
import { BuyerAddress, PaymentProviders, ShippingRates } from '../../interfaces/buyer'

interface BuyerState {
    addresses: Array<BuyerAddress>
    shippingRates: Array<ShippingRates>
    preferredAddress: BuyerAddress | null
    preferredShipping: ShippingRates | null
    paymentProvider: PaymentProviders | null
}

const initialState: BuyerState = {
    addresses: [],
    shippingRates: [],
    preferredAddress: null,
    preferredShipping: null,
    paymentProvider: null,
}

const callback = (
    state: BuyerState,
    {
        payload,
        meta: {
            arg: { endpointName },
        },
    }: ReturnType<
        AsyncThunk<
            Array<BuyerAddress | ShippingRates> | undefined,
            { endpointName: string },
            Record<string, unknown>
        >['fulfilled']
    >
) => {
    if (!payload) {
        return state
    }

    switch (endpointName) {
        case 'getShipmentRates':
            state = { ...state, shippingRates: payload as Array<ShippingRates> }
            break
        default:
            state = { ...state, addresses: payload as Array<BuyerAddress> }
    }

    return state
}

const buyerSlice = createSlice({
    name: 'buyer',
    initialState,
    reducers: {
        setBuyerAddress(state, { payload }: PayloadAction<BuyerAddress | null>) {
            if (payload === undefined) {
                return state
            }
            return {
                ...state,
                preferredAddress: payload,
            }
        },
        setBuyerShipping(state, { payload }: PayloadAction<ShippingRates | null>) {
            if (payload === undefined) {
                return state
            }
            return {
                ...state,
                preferredShipping: payload,
            }
        },
        setPaymentProvider(state, { payload }: PayloadAction<PaymentProviders | null>) {
            if (payload === undefined) {
                return state
            }
            return {
                ...state,
                paymentProvider: payload,
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addMatcher(buyerApi.endpoints.addBuyerAddress.matchFulfilled, callback)
            .addMatcher(buyerApi.endpoints.getBuyerAddresses.matchFulfilled, callback)
            .addMatcher(buyerApi.endpoints.getShipmentRates.matchFulfilled, callback)
    },
})

export const getBuyerDetails = (state: RootState) => state.buyer
export const { setBuyerAddress, setBuyerShipping, setPaymentProvider } = buyerSlice.actions
export default buyerSlice.reducer
