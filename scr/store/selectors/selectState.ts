import {RootStateType} from '../index';

export const selectExpenseData = (state: RootStateType) =>
  state.expenseReducer.expenses;
