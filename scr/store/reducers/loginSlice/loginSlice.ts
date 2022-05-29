import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {GoogleProfileType, InitStateType} from './types';

const initialState: InitStateType = {
  profile: {
    email: '',
    familyName: '',
    givenName: '',
    id: '',
    name: '',
    photo: '',
  },
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setProfile: (
      state: InitStateType,
      action: PayloadAction<GoogleProfileType>,
    ) => {
      state.profile = action.payload;
    },
  },
});

export const {setProfile} = loginSlice.actions;
