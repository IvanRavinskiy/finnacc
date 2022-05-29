import {call, put} from 'redux-saga/effects';
import {GoogleSignin, User} from '@react-native-google-signin/google-signin';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import Config from 'react-native-config';
import {setProfile} from '../reducers/loginSlice/loginSlice';
import {navigate} from '../../utils/navigate';
import {Screen} from '../../enums/Screen';
import {signInWithCredential} from '../../services/google/signInWithCredential';

export function* GoogleLogin(): any {
  try {
    yield call(GoogleSignin.configure, {
      webClientId: Config.WEB_CLIENT_ID,
    });
    yield call(GoogleSignin.hasPlayServices);
    const userInfo: User = yield call(GoogleSignin.signIn);
    const googleCredential: FirebaseAuthTypes.AuthCredential = yield call(
      auth.GoogleAuthProvider.credential,
      userInfo.idToken,
    );
    yield call(signInWithCredential, googleCredential);
    yield put(setProfile(userInfo.user));
    yield navigate(Screen.Home);
  } catch (e) {
    yield call(console.log, `GoogleLoginSagaWorker error: ${e}`);
  }
}
