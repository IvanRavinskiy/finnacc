import {createAction, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {SagaPattern} from '../enums/SagaPattern';

export type NullableType<T> = T | null;

export type GoogleProfileType = {
  email: NullableType<string>;
  familyName: NullableType<string>;
  givenName: NullableType<string>;
  id: NullableType<string>;
  name: NullableType<string>;
  photo: NullableType<string>;
};

export type InitStateType = {
  profile: GoogleProfileType;
};

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

      return state;
    },
  },
});

export const {setProfile} = loginSlice.actions;

export const GoogleLoginAC = createAction(SagaPattern.isGoogleLogin);
export const GoogleLogoutAC = createAction(SagaPattern.isGoogleLogout);
