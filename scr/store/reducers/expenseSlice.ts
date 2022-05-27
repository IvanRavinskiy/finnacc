import {createAction, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {SagaPattern} from '../enums/SagaPattern';

export type ExpenseItemType = {
  id: string;
  currentDate: string;
  category: string;
  value: string;
};

export type InitStateType = {
  expenses: ExpenseItemType[];
};

const initialState: InitStateType = {
  expenses: [],
};

export const expenseSlice = createSlice({
  name: 'expense',
  initialState,
  reducers: {
    setExpenses: (
      state: InitStateType,
      action: PayloadAction<ExpenseItemType[]>,
    ) => {
      state.expenses = [...action.payload];
    },
    refactorItem: (
      state: InitStateType,
      action: PayloadAction<ExpenseItemType>,
    ) => {
      const {category, value, id, currentDate} = action.payload;

      state.expenses = state.expenses.map(expense =>
        expense.id === id
          ? {...expense, currentDate, value, category}
          : expense,
      );
    },
    addItem: (state: InitStateType, action: PayloadAction<ExpenseItemType>) => {
      const {id, currentDate, value, category} = action.payload;

      state.expenses.unshift({id, currentDate, value, category});
    },
    deleteItem: (state: InitStateType, action: PayloadAction<string>) => {
      state.expenses = state.expenses.filter(
        expense => expense.id !== action.payload,
      );
    },
  },
});

export const {deleteItem, addItem, refactorItem, setExpenses} =
  expenseSlice.actions;

export const getDatabaseAC = createAction(SagaPattern.getDatabase);

export const addExpenseAC = createAction(
  SagaPattern.addExpenseToDatabase,
  (payload: any) => ({
    payload,
  }),
);
export const updateExpenseAC = createAction(
  SagaPattern.updateExpenseToDatabase,
  (payload: any) => ({
    payload,
  }),
);
