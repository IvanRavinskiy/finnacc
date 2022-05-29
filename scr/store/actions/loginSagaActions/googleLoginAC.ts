import {createAction} from '@reduxjs/toolkit';
import {SagaPattern} from '../../enums/SagaPattern';

export const GoogleLoginAC = createAction(SagaPattern.isGoogleLogin);
