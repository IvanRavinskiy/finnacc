import {call, put} from 'redux-saga/effects';
import {deleteItemToDb, firebaseRef} from '../../services/firebase/firebaseRef';
import {deleteItem} from '../reducers/expenseSlice/expenseSlice';

export function* deleteExpense(action: any): Generator<unknown, void, any> {
  const id = action.payload;
  try {
    const reference = yield call(firebaseRef);
    yield call(deleteItemToDb, reference, id);
    yield put(deleteItem(action.payload));
  } catch (e) {
    yield call(console.log, `addExpenseSagaWorker error: ${e}`);
  }
}
