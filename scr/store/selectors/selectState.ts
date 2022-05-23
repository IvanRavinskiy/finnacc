import {RootStateType} from '../index';

export const selectExpenseData = (state: RootStateType) =>
  state.expense.expense;
