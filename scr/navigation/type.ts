export type RootStackParamList = {
  Home: undefined;
  ExpenseHandling: {
    modal: 'add' | 'refactor';
    id: string;
    currentDate: string;
    category: string;
    value: string;
  };
};
