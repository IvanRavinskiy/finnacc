import {call} from 'redux-saga/effects';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {navigate} from '../../utils/navigate';
import {Screen} from '../../enums/Screen';

export function* GoogleLogout(): any {
  try {
    yield call(GoogleSignin.signOut);
    yield navigate(Screen.Login);
  } catch (e) {
    yield call(console.log, `GoogleLogoutSagaWorker error: ${e}`);
  }
}
