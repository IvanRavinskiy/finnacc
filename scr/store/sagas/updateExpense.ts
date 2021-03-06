import {call, put} from 'redux-saga/effects';
import {firebaseRef} from '../../services/firebase/firebaseRef';
import {refactorItem} from '../reducers/expenseSlice/expenseSlice';
import {updateItemToDb} from '../../services/firebase/updateItemToDb';

export function* updateExpense(action: any): Generator<unknown, void, any> {
  const {id, currentDate, value, category} = action.payload;
  try {
    const reference = yield call(firebaseRef);
    yield call(updateItemToDb, reference, id, currentDate, value, category);
    yield put(refactorItem(action.payload));
  } catch (e) {
    yield call(console.log, `addExpenseSagaWorker error: ${e}`);
  }
}
