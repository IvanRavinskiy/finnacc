export const isFormNotEmpty = (data: string, title: string, value: string) => {
  const expenseItem = [data, title, value];

  return expenseItem.every(it => it.length !== 0);
};
