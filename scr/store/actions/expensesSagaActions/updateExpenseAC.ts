import {createAction} from '@reduxjs/toolkit';
import {SagaPattern} from '../../enums/SagaPattern';

export const updateExpenseAC = createAction(
  SagaPattern.updateExpenseToDatabase,
  (payload: any) => ({
    payload,
  }),
);
