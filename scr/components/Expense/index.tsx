import React from 'react';
import {Text, View} from 'react-native';
import {expenseStyles} from './style';
import {DataTypes} from '../../types/dataTypes';

export const Expense = ({date, title, value}: DataTypes) => {
  return (
    <View style={expenseStyles.container}>
      <Text>{date}</Text>
      <Text>{title}</Text>
      <Text>{value}</Text>
    </View>
  );
};
