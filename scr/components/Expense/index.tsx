import React, {FC, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {deleteItem} from '../../store/reducers/expenseSlice';
import {expenseStyles} from './style';
import {Screen} from '../../enums/Screen';
import {useNavigation} from '@react-navigation/native';
import {HomeNavigationProp} from '../../screens/HomeScreen/type';
import {ExpensePropsType} from './type';

export const Expense: FC<ExpensePropsType> = props => {
  const {id, date, title, value} = props;

  const [view, setView] = useState(false);

  const navigation = useNavigation<HomeNavigationProp>();

  const dispatch = useDispatch();

  const onShowControlPress = () => {
    setView(!view);
  };

  const onDeleteItemPress = () => {
    dispatch(deleteItem(id));
  };

  const onRefactorItemPress = () => {
    navigation.navigate(Screen.ExpenseHandling, {
      modal: 'refactor',
      id,
      currentDate: date,
      category: title,
      value,
    });
    setView(false);
  };

  return (
    <View>
      <TouchableOpacity onPress={onShowControlPress}>
        <View style={expenseStyles.item}>
          <Text>{date}</Text>
          <Text>{title}</Text>
          <Text>{value}</Text>
        </View>
      </TouchableOpacity>

      {view && (
        <TouchableOpacity onPress={onRefactorItemPress}>
          <Text>{'Refactor'}</Text>
        </TouchableOpacity>
      )}
      {view && (
        <TouchableOpacity onPress={onDeleteItemPress}>
          <Text>{'Delete'}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};
