import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export type ExpenseItemType = {
  id: string;
  currentDate: string;
  category: string;
  value: string;
};

export type InitStateType = {
  expense: ExpenseItemType[];
};

const initialState: InitStateType = {
  expense: [
    {id: '1', currentDate: '11/02/2022', category: 'car', value: '23'},
    {id: '2', currentDate: '21/03/2022', category: 'food', value: '987'},
    {id: '3', currentDate: '22/03/2022', category: 'food', value: '232'},
    {id: '4', currentDate: '23/04/2022', category: 'car', value: '433'},
    {id: '5', currentDate: '03/05/2022', category: 'car', value: '34'},
    {id: '6', currentDate: '06/03/2022', category: 'pharmacy', value: '54'},
    {id: '7', currentDate: '06/04/2022', category: 'pharmacy', value: '23'},
    {id: '8', currentDate: '05/02/2022', category: 'car', value: '4545'},
    {id: '9', currentDate: '03/03/2022', category: 'services', value: '342'},
    {id: '10', currentDate: '11/02/4022', category: 'services', value: '12'},
    {id: '11', currentDate: '11/05/2022', category: 'clothes', value: '34'},
    {id: '12', currentDate: '22/02/2022', category: 'clothes', value: '54'},
  ],
};

export const expenseSlice = createSlice({
  name: 'expense',
  initialState,
  reducers: {
    refactorItem: (
      state: InitStateType,
      action: PayloadAction<ExpenseItemType>,
    ) => {
      const {category, value, id, currentDate} = action.payload;

      state.expense = state.expense.map(i =>
        i.id === id ? {...i, currentDate, value, category} : i,
      );

      return state;
    },
    addItem: (state: InitStateType, action: PayloadAction<ExpenseItemType>) => {
      const {category, value, id, currentDate} = action.payload;

      state.expense.unshift({id, currentDate, value, category});

      return state;
    },
    deleteItem: (state: InitStateType, action: PayloadAction<string>) => {
      state.expense = state.expense.filter(i => i.id !== action.payload);

      return state;
    },
  },
});

export const {deleteItem, addItem, refactorItem} = expenseSlice.actions;
