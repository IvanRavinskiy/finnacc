export const setDb = (data: any) => {
  return data
    .ref('/finnacc/expenses')
    .once('value')
    .then((snapshot: any) => {
      return snapshot.val();
    });
};
