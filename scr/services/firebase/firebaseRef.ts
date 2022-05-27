import {firebase} from '@react-native-firebase/database';

export const firebaseRef = () => {
  return firebase
    .app()
    .database(
      'https://new-finnacc-default-rtdb.europe-west1.firebasedatabase.app',
    );
};

export const db = (data: any) => {
  return data
    .ref('/finnacc/expenses')
    .once('value')
    .then((snapshot: any) => {
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
  const newRef = data.ref('/finnacc/expenses').push();

  const ID = newRef.key;

  return newRef.set({
    id: ID,
    currentDate,
    value,
    category,
  });
};

export const updateItemToDb = (
  data: any,
  id: string,
  currentDate: string,
  value: string,
  category: string,
) => {
  return data.ref(`/finnacc/expenses/${id}`).update({
    id,
    currentDate,
    value,
    category,
  });
};
