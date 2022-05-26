import {call, put} from 'redux-saga/effects';
import {db, firebaseRef} from '../../services/firebase/firebaseRef';
import {setExpenses} from '../reducers/expenseSlice';

export function* setDatabase(): any {
  try {
    const reference = yield call(firebaseRef);
    const data = yield call(db, reference);
    yield put(setExpenses(data));
  } catch (e) {
    yield call(console.log, `setDatabaseSagaWorker error: ${e}`);
  }
}
