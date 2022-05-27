import {firebase} from '@react-native-firebase/database';

export const firebaseRef = () => {
  return firebase
    .app()
    .database(
      'https://new-finnacc-default-rtdb.europe-west1.firebasedatabase.app',
    )
    .ref('/finnacc/expenses');
};

export const db = (data: any) => {
  return data.once('value').then((snapshot: any) => {
    return snapshot.val();
  });
};

export const addItemToDb = (
  data: any,
  id: string,
  currentDate: string,
  value: string,
  category: string,
) => {
  return data.push().set({
    id,
    currentDate,
    value,
    category,
  });
  // .then(() => console.log('Data add.'));
};
