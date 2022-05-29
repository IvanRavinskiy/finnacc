import {call, put} from 'redux-saga/effects';
import {setDb, firebaseRef} from '../../services/firebase/firebaseRef';
import {setExpenses} from '../reducers/expenseSlice/expenseSlice';

export function* setDatabase(): any {
  try {
    const reference = yield call(firebaseRef);
    const dataObj = yield call(setDb, reference);
    const dataArr = yield call(Object.values, dataObj);
    yield put(setExpenses(dataArr));
  } catch (e) {
    yield call(console.log, `setDatabaseSagaWorker error: ${e}`);
  }
}
