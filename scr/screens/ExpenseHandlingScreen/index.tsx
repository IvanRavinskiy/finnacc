import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {expenseHandlingStyles} from './style';

export const ExpenseHandling = () => {
  const [date, setDate] = useState('');
  const [title, setTitle] = useState('');
  const [value, setValue] = useState('');

  const onChangeDate = (newText: string) => {
    setDate(newText);
  };
  const onChangeTitle = (newText: string) => {
    setTitle(newText);
  };
  const onChangeValue = (newText: string) => {
    setValue(newText);
  };

  const onSetItemPress = () => {
    console.log(date, ' ', title, ' ', value);
    setDate('');
    setTitle('');
    setValue('');
  };

  return (
    <View>
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
        placeholder="Add value"
        onChangeText={onChangeValue}
        defaultValue={value}
      />
      <TouchableOpacity onPress={onSetItemPress}>
        <Text>OK</Text>
      </TouchableOpacity>
    </View>
  );
};
