import {createAction} from '@reduxjs/toolkit';
import {SagaPattern} from '../../enums/SagaPattern';

export const getDatabaseAC = createAction(SagaPattern.getDatabase);
