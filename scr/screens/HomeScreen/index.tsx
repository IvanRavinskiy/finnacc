import React, {useEffect} from 'react';
import {FlatList} from 'react-native';
import {Expense} from '../../components/Expense';
import {useDispatch, useSelector} from 'react-redux';
import {selectExpenseData, selectLoader} from '../../store/selectors';
import {HeaderContainer} from '../../components/HeaderContainer';
import {getDatabaseAC} from '../../store/actions/expensesSagaActions';
import {Loader} from '../../components/Loader';

export const Home = () => {
  const dispatch = useDispatch();

  const expenses = useSelector(selectExpenseData);

  useEffect(() => {
    dispatch(getDatabaseAC());
  }, [dispatch]);

  const isLoading = useSelector(selectLoader);

  if (isLoading) {
    return <Loader />;
  }

  const renderExpense = ({item}: any) => (
    <Expense
      id={item.id}
      date={item.currentDate}
      title={item.category}
      value={item.value}
    />
  );

  return (
    <HeaderContainer>
      <FlatList
        data={expenses}
        renderItem={renderExpense}
        keyExtractor={item => item.id}
      />
      {/*<ScrollView>*/}
      {/*{expenses.map(expense => {*/}
      {/*  const {category, value, currentDate, id} = expense;*/}
      {/*  return (*/}
      {/*    <Expense*/}
      {/*      key={id}*/}
      {/*      id={id}*/}
      {/*      date={currentDate}*/}
      {/*      title={category}*/}
      {/*      value={value}*/}
      {/*    />*/}
      {/*  );*/}
      {/*})}*/}
      {/*</ScrollView>*/}
    </HeaderContainer>
  );
};
