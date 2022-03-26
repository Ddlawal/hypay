import { createSlice } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'

interface initialStateInterface {
    showModal: boolean
    modalType: string
    modalProps: {}
}

const initialState: initialStateInterface = {
    showModal: false,
    modalType: '',
    modalProps: {},
}

export const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        showModal: (state, action) => {
            state.showModal = action.payload.showModal
            state.modalType = action.payload.modalType
            state.modalProps = action.payload.modalProps
        },
        hideModal: (state) => {
            state.showModal = false
            state.modalType = ''
            state.modalProps = {}
        },
    },
    extraReducers: {
        [HYDRATE]: (state, action) => {
            console.log('HYDRATE', state, action.payload)
            return {
                ...state,
                ...action.payload.subject,
            }
        },
    },
})

export const { showModal, hideModal } = uiSlice.actions

export default uiSlice.reducer
