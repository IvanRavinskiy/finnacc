import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {InitStateType} from './types';

const initialState: InitStateType = {
  isLoading: false,
};

export const loaderSlice = createSlice({
  name: 'loader',
  initialState,
  reducers: {
    isLoading: (state: InitStateType, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const {isLoading} = loaderSlice.actions;
