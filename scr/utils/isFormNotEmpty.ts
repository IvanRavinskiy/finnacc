export const isFormNotEmpty = (
  date: Date,
  title: string | null,
  value: string,
) => {
  const expenses = [date.toString(), title, value];

  return expenses.every(expense => expense?.length !== 0);
};
