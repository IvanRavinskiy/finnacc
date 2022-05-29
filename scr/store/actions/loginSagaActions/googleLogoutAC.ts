import {createAction} from '@reduxjs/toolkit';
import {SagaPattern} from '../../enums/SagaPattern';

export const GoogleLogoutAC = createAction(SagaPattern.isGoogleLogout);
