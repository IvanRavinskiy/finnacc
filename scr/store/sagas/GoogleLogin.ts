import {call, put} from 'redux-saga/effects';
import {GoogleSignin, User} from '@react-native-google-signin/google-signin';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import Config from 'react-native-config';
import {setProfile} from '../reducers/loginSlice';

type AuthCredential = FirebaseAuthTypes.AuthCredential;

export function* GoogleLogin(): any {
  const signInWithCredential = (credential: AuthCredential) => {
    return auth().signInWithCredential(credential);
  };
  try {
    yield call(GoogleSignin.configure, {
      webClientId: Config.WEB_CLIENT_ID,
    });
    yield call(GoogleSignin.hasPlayServices);
    const userInfo: User = yield call(GoogleSignin.signIn);
    const googleCredential: AuthCredential = yield call(
      auth.GoogleAuthProvider.credential,
      userInfo.idToken,
    );
    yield call(signInWithCredential, googleCredential);
    yield put(setProfile(userInfo.user));
  } catch (e) {
    yield call(console.log, `GoogleLoginSagaWorker error: ${e}`);
  }
}
