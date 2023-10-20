import { configureStore } from '@reduxjs/toolkit';
import addressReducer from './slices/addressSlice';
import modalActions from './slices/modalActions';

export const store = configureStore({
    reducer: {
        address: addressReducer,
        modal: modalActions
    }
});