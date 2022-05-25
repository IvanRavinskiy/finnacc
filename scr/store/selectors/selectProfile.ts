import {RootStateType} from '../index';

export const selectProfile = (state: RootStateType) =>
  state.loginReducer.profile;
