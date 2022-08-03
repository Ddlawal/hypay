import { RootState } from '../index'
import { createSlice, Slice, SliceCaseReducers } from '@reduxjs/toolkit'

interface initialTemporaryState {
    userData: any
    product: Array<never>
}

const initialState: initialTemporaryState = {
    userData: {},
    product: [],
}

export const temporaryDataSlice = createSlice({
    name: 'TemporaryDataSlice',
    initialState,
    reducers: {
        setUserData: (state, action) => {
            return {
                ...state,
                userData: action.payload.userProfile,
            }
        },
        addProduct: (state, action) => {
            return {
                ...state,
                product: action.payload.products,
            }
        },
    },
})

export const { setUserData, addProduct } = temporaryDataSlice.actions
// Pass the updatedUserData function into a use Selector to get the data from this slice
export const updatedUserData = (state: RootState) => state?.temporaryDataSlice?.userData
export default temporaryDataSlice.reducer
