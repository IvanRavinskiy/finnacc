import {ExpenseItemType} from '../store/reducers/expenseSlice/types';

export const getCategoryValue = (
  expenses: ExpenseItemType[],
  category: string,
) => {
  return expenses.reduce((acc: number, expense: ExpenseItemType) => {
    if (expense.category === category) {
      return acc + Number(expense.value);
    }

    return acc;
  }, 0);
};
