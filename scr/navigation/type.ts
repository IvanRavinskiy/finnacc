export type RootStackParamList = {
  Home: undefined;
  ExpenseHandling: {
    modal: 'add' | 'refactor';
    id: string;
    date: string;
    title: string;
    value: string;
  };
};
