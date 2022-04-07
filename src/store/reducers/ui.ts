import { createSlice } from '@reduxjs/toolkit'

export interface initialUiStateInterface {
    showModal: boolean
    modalType: string
    modalProps: object
}

const initialUiState: initialUiStateInterface = {
    showModal: false,
    modalType: '',
    modalProps: {},
}

export const uiSlice = createSlice({
    name: 'ui',
    initialState: initialUiState,
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
