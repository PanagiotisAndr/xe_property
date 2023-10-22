import { createSlice } from '@reduxjs/toolkit';

export const modalSlice = createSlice({
    name: 'modal',
    initialState: {
        show: false,
        content: null
    },
    reducers: {
        showModal: (state, action) => {
            state.show = true;
            state.content = action.payload;
        },
        hideModal: (state) => {
            state.show = false;
            state.content = null;
        }
    }
});

export const { showModal, hideModal } = modalSlice.actions;

export default modalSlice.reducer;

