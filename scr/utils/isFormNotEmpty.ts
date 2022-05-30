export const isFormNotEmpty = (date: Date, title: string, value: string) => {
  const expenses = [date.toString(), title, value];

  return expenses.every(expense => expense.length !== 0);
};
