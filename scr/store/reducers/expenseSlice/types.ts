export type ExpenseItemType = {
  id: string;
  currentDate: string;
  category: string;
  value: string;
};

export type InitStateType = {
  expenses: ExpenseItemType[];
};
