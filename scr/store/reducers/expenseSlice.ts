import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export type FbAuthType = {
  id: string;
  date: string;
  title: string;
  value: number;
};

const initialState: FbAuthType[] = [
  {id: '1', date: '11/02/2022', title: 'car', value: 23},
  {id: '2', date: '21/03/2022', title: 'food', value: 987},
  {id: '3', date: '22/03/2022', title: 'food', value: 232},
  {id: '4', date: '23/04/2022', title: 'car', value: 433},
  {id: '5', date: '03/05/2022', title: 'car', value: 34},
  {id: '6', date: '06/03/2022', title: 'pharmacy', value: 54},
  {id: '7', date: '06/04/2022', title: 'pharmacy', value: 23},
  {id: '8', date: '05/02/2022', title: 'car', value: 4545},
  {id: '9', date: '03/03/2022', title: 'services', value: 342},
  {id: '10', date: '11/02/4022', title: 'services', value: 12},
  {id: '11', date: '11/05/2022', title: 'clothes', value: 34},
  {id: '12', date: '22/02/2022', title: 'clothes', value: 54},
];

export const expenseSlice = createSlice({
  name: 'expense',
  initialState,
  reducers: {
    addItem: (state: FbAuthType[], action: PayloadAction<FbAuthType>) => {
      return [
        {
          id: action.payload.id,
          date: action.payload.date,
          value: action.payload.value,
          title: action.payload.title,
        },
        ...state,
      ];
    },
    deleteItem: (state: FbAuthType[], action: PayloadAction<string>) => {
      state = state.filter(i => i.id !== action.payload);
      return state;
    },
  },
});

export const {deleteItem, addItem} = expenseSlice.actions;
