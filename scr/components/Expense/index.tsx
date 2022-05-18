import React, {FC, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {deleteItem} from '../../store/reducers/expenseSlice';
import {expenseStyles} from './style';

export type ExpensePropsType = {
  id: string;
  date: string;
  title: string;
  value: number;
};

export const Expense: FC<ExpensePropsType> = ({id, date, title, value}) => {
  const [view, setView] = useState(false);
  const dispatch = useDispatch();
  const onShowControlPress = () => {
    setView(!view);
  };
  const onDeleteItemPress = () => {
    dispatch(deleteItem(id));
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
        <TouchableOpacity>
          <Text>Refactor</Text>
        </TouchableOpacity>
      )}
      {view && (
        <TouchableOpacity onPress={onDeleteItemPress}>
          <Text>Delete</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};
