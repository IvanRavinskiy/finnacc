import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {Header} from '../../components/Header';
import {expenseHandlingStyles} from '../ExpenseHandlingScreen/style';
import {useDispatch} from 'react-redux';
import {refactorItem} from '../../store/reducers/expenseSlice';
import {useNavigation} from '@react-navigation/native';
import {HomeNavigationProp, Props} from './type';

export const ExpenseRefactor = ({route}: Props) => {
  const navigation = useNavigation<HomeNavigationProp>();
  const {params} = route;
  const dispatch = useDispatch();
  const [date, setDate] = useState(params.date);
  const [title, setTitle] = useState(params.title);
  const [value, setValue] = useState(params.value);

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
    if (date.length !== 0 && title.length !== 0 && value.length !== 0) {
      const id = params.id;
      dispatch(refactorItem({id, date, title, value}));
      setDate('');
      setTitle('');
      setValue('');
      navigation.goBack();
    }
  };

  return (
    <View>
      <Header />
      <TextInput
        style={expenseHandlingStyles.input}
        placeholder="Require date"
        onChangeText={onChangeDate}
        defaultValue={date}
      />
      <TextInput
        style={expenseHandlingStyles.input}
        placeholder="Require title"
        onChangeText={onChangeTitle}
        defaultValue={title}
      />
      <TextInput
        style={expenseHandlingStyles.input}
        keyboardType="numeric"
        placeholder="Require value"
        onChangeText={onChangeValue}
        defaultValue={value}
      />
      <TouchableOpacity onPress={onSetItemPress}>
        <Text>OK</Text>
      </TouchableOpacity>
    </View>
  );
};
