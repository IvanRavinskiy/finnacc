import {takeLatest} from 'redux-saga/effects';
import {SagaPattern} from '../enums/SagaPattern';
import {GoogleLogin} from './GoogleLogin';

export function* RootSaga() {
  yield takeLatest(SagaPattern.isGoogleLogin, GoogleLogin);
}
