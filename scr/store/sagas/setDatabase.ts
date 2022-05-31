import {call, put} from 'redux-saga/effects';
import {firebaseRef} from '../../services/firebase/firebaseRef';
import {setExpenses} from '../reducers/expenseSlice/expenseSlice';
import {setDb} from '../../services/firebase/setDb';
import {isLoading} from '../reducers/loaderSlice/loaderSlice';

export function* setDatabase(): any {
  try {
    yield put(isLoading(true));
    const reference = yield call(firebaseRef);
    const dataObj = yield call(setDb, reference);
    const dataArr = yield call(Object.values, dataObj);
    yield put(isLoading(false));
    yield put(setExpenses(dataArr));
  } catch (e) {
    yield call(console.log, `setDatabaseSagaWorker error: ${e}`);
  }
}
