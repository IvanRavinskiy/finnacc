import {createSlice, PayloadAction} from '@reduxjs/toolkit';

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
  isAuth: boolean;
  profile: GoogleProfileType;
};

const initialState: InitStateType = {
  isAuth: false,
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
    isGoogleLogin: (state: InitStateType) => {
      state.isAuth = true;
    },
    setProfile: (
      state: InitStateType,
      action: PayloadAction<GoogleProfileType>,
    ) => {
      state.profile = action.payload;
      return state;
    },
  },
});

export const {isGoogleLogin, setProfile} = loginSlice.actions;
