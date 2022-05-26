import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';

export const signInWithCredential = (
  credential: FirebaseAuthTypes.AuthCredential,
) => {
  return auth().signInWithCredential(credential);
};
