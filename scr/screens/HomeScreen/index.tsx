import React from 'react';
import {ScrollView, View} from 'react-native';
import {SvgPlus} from '../../assets/svg/SvgPlus';
import {homeStyles} from './style';
import {Expense} from '../../components/Expense';
import {useSelector} from 'react-redux';
import {selectExpenseData} from '../../store/selectors';
import {useNavigation} from '@react-navigation/native';
import {Screen} from '../../enums/Screen';
import type {HomeNavigationProp} from './type';
import {HeaderContainer} from '../../components/HeaderContainer';

export const Home = () => {
  const navigation = useNavigation<HomeNavigationProp>();

  const expenseData = useSelector(selectExpenseData);

  const onAddItemPress = () => {
    navigation.navigate(Screen.ExpenseHandling, {
      modal: 'add',
      title: '',
      value: '',
      date: '',
      id: '',
    });
  };

  return (
    <HeaderContainer>
      <ScrollView>
        {expenseData.map(expenseItem => {
          const {title, value, date, id} = expenseItem;

          return (
            <Expense key={id} id={id} date={date} title={title} value={value} />
          );
        })}

        <View style={homeStyles.svgContainer}>
          <SvgPlus onPress={onAddItemPress} />
        </View>
      </ScrollView>
    </HeaderContainer>
  );
};
