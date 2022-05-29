export const addItemToDb = (
  data: any,
  id: string,
  currentDate: string,
  value: string,
  category: string,
) => {
  const newRef = data.ref(`/finnacc/expenses/${id}`);

  return newRef.set({
    id,
    currentDate,
    value,
    category,
  });
};
