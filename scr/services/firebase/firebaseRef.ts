import {firebase} from '@react-native-firebase/database';

export const firebaseRef = () => {
  return firebase
    .app()
    .database(
      'https://new-finnacc-default-rtdb.europe-west1.firebasedatabase.app',
    );
};
