import {call} from 'redux-saga/effects';
import {db, firebaseRef} from '../../services/firebase/firebaseRef';

export function* setDatabase(): any {
  try {
    const reference = yield call(firebaseRef);
    const data = yield call(db, reference);
    yield call(console.log, data);
  } catch (e) {
    yield call(console.log, `setDatabaseSagaWorker error: ${e}`);
  }
}
