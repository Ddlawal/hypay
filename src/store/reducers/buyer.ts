import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '..'
import { buyerApi } from '../services/buyer'
import { BuyerAddresses } from '../../interfaces/buyer'

interface BuyerState {
    addresses: Array<BuyerAddresses>
}

const initialState: BuyerState = { addresses: [] }

const callback = (state: BuyerState, { payload }: PayloadAction<Array<BuyerAddresses> | undefined>) => {
    if (!payload) {
        return state
    }

    state = { addresses: payload }

    return state
}

const buyerSlice = createSlice({
    name: 'buyer',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addMatcher(buyerApi.endpoints.addBuyerAddress.matchFulfilled, callback)
    },
})

export const getBuyerDetails = (state: RootState) => state.buyer
export default buyerSlice.reducer
