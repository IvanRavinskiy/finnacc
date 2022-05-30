export const isFormNotEmpty = (date: any, title: string, value: string) => {
  const expenses = [date, title, value];

  return expenses.every(expense => expense.length !== 0);
};
