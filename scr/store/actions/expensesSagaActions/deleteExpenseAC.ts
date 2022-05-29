import {createAction} from '@reduxjs/toolkit';
import {SagaPattern} from '../../enums/SagaPattern';

export const deleteExpenseAC = createAction(
  SagaPattern.deleteExpenseToDatabase,
  (payload: any) => ({
    payload,
  }),
);
