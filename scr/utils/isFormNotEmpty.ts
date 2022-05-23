export const isFormNotEmpty = (data: string, title: string, value: string) => {
  const expenses = [data, title, value];

  return expenses.every(expense => expense.length !== 0);
};
