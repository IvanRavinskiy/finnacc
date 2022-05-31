import {RootStateType} from '../index';

export const selectLoader = (state: RootStateType) =>
  state.loaderReducer.isLoading;
