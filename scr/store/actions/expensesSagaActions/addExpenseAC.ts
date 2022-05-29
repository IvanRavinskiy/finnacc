import {createAction} from '@reduxjs/toolkit';
import {SagaPattern} from '../../enums/SagaPattern';

export const addExpenseAC = createAction(
  SagaPattern.addExpenseToDatabase,
  (payload: any) => ({
    payload,
  }),
);
