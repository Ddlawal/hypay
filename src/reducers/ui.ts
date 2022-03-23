import { createSlice } from '@reduxjs/toolkit'

interface initialStateInterface {
    showModal: boolean
    modalType: string
    modalProps: {}
}

const initialState = {
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
})

export const { showModal, hideModal } = uiSlice.actions

export default uiSlice.reducer
