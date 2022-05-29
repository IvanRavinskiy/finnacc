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
