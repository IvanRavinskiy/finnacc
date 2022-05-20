import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {expenseHandlingStyles} from './style';
import {useDispatch} from 'react-redux';
import {addItem, refactorItem} from '../../store/reducers/expenseSlice';
import {useNavigation} from '@react-navigation/native';
import {HomeNavigationProp, Props} from './type';
import {HeaderContainer} from '../../components/HeaderContainer';
import {isFormNotEmpty} from '../../utils/isFormNotEmpty';

export const ExpenseHandling = ({route}: Props) => {
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
    if (params.modal === 'refactor') {
      if (isFormNotEmpty(date, title, value)) {
        const id = params.id;

        dispatch(refactorItem({id, date, title, value}));

        setDate('');
        setTitle('');
        setValue('');

        navigation.goBack();
      }
    }
    if (params.modal === 'add') {
      if (isFormNotEmpty(date, title, value)) {
        const id = `${date}${title}${value}`;

        dispatch(addItem({id, date, title, value}));

        setDate('');
        setTitle('');
        setValue('');
      }
    }
  };

  return (
    <HeaderContainer>
      <View>
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
          <Text>{'OK'}</Text>
        </TouchableOpacity>
      </View>
    </HeaderContainer>
  );
};
