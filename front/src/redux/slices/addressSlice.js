import { createSlice } from '@reduxjs/toolkit';

export const addressSlice = createSlice({
    name: 'address',
    initialState: {
        addresses: [],
        selectedAddress: null
    },
    reducers: {
        setAddresses: (state, action) => {
            state.addresses = action.payload;
        },
        setSelectedAddress: (state, action) => {
            state.selectedAddress = action.payload;
        }
    }
});

export const { setAddresses, setSelectedAddress } = addressSlice.actions;

export default addressSlice.reducer;
