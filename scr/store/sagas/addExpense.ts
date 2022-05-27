import {call, put} from 'redux-saga/effects';
import {addItemToDb, firebaseRef} from '../../services/firebase/firebaseRef';
import {addItem} from '../reducers/expenseSlice';

export function* addExpense(action: any): Generator<unknown, void, any> {
  const {id, currentDate, value, category} = action.payload;
  try {
    const reference = yield call(firebaseRef);
    yield call(addItemToDb, reference, id, currentDate, value, category);
    yield put(addItem(action.payload));
  } catch (e) {
    yield call(console.log, `addExpenseSagaWorker error: ${e}`);
  }
}
