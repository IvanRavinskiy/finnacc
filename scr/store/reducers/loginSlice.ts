import {createSlice} from '@reduxjs/toolkit';

export type InitStateType = {
  isAuth: boolean;
};

const initialState: InitStateType = {
  isAuth: false,
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    isGoogleLogin: (state: InitStateType) => {
      state.isAuth = true;
    },
  },
});

export const {isGoogleLogin} = loginSlice.actions;
