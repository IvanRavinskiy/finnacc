import React, {useEffect} from 'react';
import {ScrollView, TouchableOpacity} from 'react-native';
import {Expense} from '../../components/Expense';
import {useDispatch, useSelector} from 'react-redux';
import {selectExpenseData, selectLoader} from '../../store/selectors';
import {useNavigation} from '@react-navigation/native';
import {Screen} from '../../enums/Screen';
import type {HomeNavigationProp} from './type';
import {HeaderContainer} from '../../components/HeaderContainer';
import {getDatabaseAC} from '../../store/actions/expensesSagaActions';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCirclePlus} from '@fortawesome/free-solid-svg-icons/faCirclePlus';
import {Loader} from '../../components/Loader';

export const Home = () => {
  const navigation = useNavigation<HomeNavigationProp>();

  const dispatch = useDispatch();

  const expenses = useSelector(selectExpenseData);

  const onAddItemPress = () => {
    navigation.navigate(Screen.ExpenseHandling, {
      modal: 'add',
      category: '',
      value: '',
      currentDate: '',
      id: '',
    });
  };

  useEffect(() => {
    dispatch(getDatabaseAC());
  }, [dispatch]);

  const isLoading = useSelector(selectLoader);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <HeaderContainer>
      <ScrollView>
        {expenses.map(expense => {
          const {category, value, currentDate, id} = expense;

          return (
            <Expense
              key={id}
              id={id}
              date={currentDate}
              title={category}
              value={value}
            />
          );
        })}
        <TouchableOpacity onPress={onAddItemPress}>
          <FontAwesomeIcon size={45} color={'blue'} icon={faCirclePlus} />
        </TouchableOpacity>
      </ScrollView>
    </HeaderContainer>
  );
};
