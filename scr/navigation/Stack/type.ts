export type RootStackParamList = {
  Login: undefined;
  Tab: undefined;
  Chart: undefined;
  Home: undefined;
  ExpenseHandling: {
    modal: 'add' | 'refactor';
    id: string;
    currentDate: string;
    category: string;
    value: string;
  };
};
