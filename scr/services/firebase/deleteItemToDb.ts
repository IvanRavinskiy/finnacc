export const deleteItemToDb = (data: any, id: string) => {
  return data.ref(`/finnacc/expenses/${id}`).set(null);
};
