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
        showModal: (state: initialUiStateInterface, action: any) => {
            console.log(action, 'this action was fired')
            state.showModal = action.payload.showModal
            state.modalType = action.payload.modalType
            state.modalProps = action.payload.modalProps
            return state
        },
        hideModal: (state: initialUiStateInterface) => {
            state.showModal = false
            state.modalType = ''
            state.modalProps = {}
            return state
        },
    },
})

export const { showModal, hideModal } = uiSlice.actions

export default uiSlice.reducer
