import React, {useEffect} from 'react';
import {ScrollView, View} from 'react-native';
import {SvgPlus} from '../../assets/svg/SvgPlus';
import {homeStyles} from './style';
import {Expense} from '../../components/Expense';
import {useDispatch, useSelector} from 'react-redux';
import {selectExpenseData} from '../../store/selectors';
import {useNavigation} from '@react-navigation/native';
import {Screen} from '../../enums/Screen';
import type {HomeNavigationProp} from './type';
import {HeaderContainer} from '../../components/HeaderContainer';
import {getDatabaseAC} from '../../store/reducers/expenseSlice';

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

        <View style={homeStyles.svgContainer}>
          <SvgPlus onPress={onAddItemPress} />
        </View>
      </ScrollView>
    </HeaderContainer>
  );
};
