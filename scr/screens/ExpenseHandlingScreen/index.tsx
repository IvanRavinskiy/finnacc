import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {expenseHandlingStyles} from './style';
import {useDispatch} from 'react-redux';
import {addItem} from '../../store/reducers/expenseSlice';
import {Header} from '../../components/Header';

export const ExpenseHandling = () => {
  const dispatch = useDispatch();
  const [date, setDate] = useState('');
  const [title, setTitle] = useState('');
  const [valueStr, setValue] = useState('');

  const onChangeDate = (newText: string) => {
    setDate(newText);
  };
  const onChangeTitle = (newText: string) => {
    setTitle(newText);
  };
  const onChangeValue = (newText: string) => {
    const numericRegex = /^([0-9]{1,100})+$/;
    if (numericRegex.test(newText)) {
      setValue(newText);
    }
  };

  const onSetItemPress = () => {
    const id = `${date}${title}${valueStr}`;
    const value = Number(valueStr);
    dispatch(addItem({id, date, title, value}));
    setDate('');
    setTitle('');
    setValue('');
  };

  return (
    <View>
      <Header />
      <TextInput
        style={expenseHandlingStyles.input}
        placeholder="Add date"
        onChangeText={onChangeDate}
        defaultValue={date}
      />
      <TextInput
        style={expenseHandlingStyles.input}
        placeholder="Add title"
        onChangeText={onChangeTitle}
        defaultValue={title}
      />
      <TextInput
        style={expenseHandlingStyles.input}
        keyboardType="numeric"
        placeholder="Add value"
        onChangeText={onChangeValue}
        defaultValue={valueStr}
      />
      <TouchableOpacity onPress={onSetItemPress}>
        <Text>OK</Text>
      </TouchableOpacity>
    </View>
  );
};
