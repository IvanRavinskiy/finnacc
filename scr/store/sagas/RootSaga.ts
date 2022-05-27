import {takeLatest} from 'redux-saga/effects';
import {SagaPattern} from '../enums/SagaPattern';
import {GoogleLogin} from './GoogleLogin';
import {GoogleLogout} from './GoogleLogout';
import {setDatabase} from './setDatabase';
import {addExpense} from './addExpense';

export function* RootSaga() {
  yield takeLatest(SagaPattern.isGoogleLogin, GoogleLogin);
  yield takeLatest(SagaPattern.isGoogleLogout, GoogleLogout);
  yield takeLatest(SagaPattern.getDatabase, setDatabase);
  yield takeLatest(SagaPattern.addExpenseToDatabase, addExpense);
}
