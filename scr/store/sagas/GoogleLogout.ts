import {call, put} from 'redux-saga/effects';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {navigate} from '../../utils/navigate';
import {Screen} from '../../enums/Screen';
import {isLoading} from '../reducers/loaderSlice/loaderSlice';

export function* GoogleLogout(): any {
  try {
    yield put(isLoading(true));
    yield call(GoogleSignin.signOut);
    yield put(isLoading(false));
    yield navigate(Screen.Login);
  } catch (e) {
    yield call(console.log, `GoogleLogoutSagaWorker error: ${e}`);
  }
}
