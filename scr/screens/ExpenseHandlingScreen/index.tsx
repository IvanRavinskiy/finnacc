import React from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {expenseHandlingStyles} from './style';
import {useDispatch} from 'react-redux';
import {addItem, refactorItem} from '../../store/reducers/expenseSlice';
import {useNavigation} from '@react-navigation/native';
import {HomeNavigationProp, Props} from './type';
import {HeaderContainer} from '../../components/HeaderContainer';
import {isFormNotEmpty, isValueFormHasNumber, useInputValue} from '../../utils';

export const ExpenseHandling = ({route}: Props) => {
  const navigation = useNavigation<HomeNavigationProp>();
  const {params} = route;

  const dispatch = useDispatch();

  const {
    inputValue: date,
    setInputValue: setDate,
    onChangeInputValue: onChangeDate,
  } = useInputValue(params.currentDate);

  const {
    inputValue: title,
    setInputValue: setTitle,
    onChangeInputValue: onChangeTitle,
  } = useInputValue(params.category);

  const {
    inputValue: value,
    setInputValue: setValue,
    onChangeInputValue: onChangeValue,
  } = useInputValue(params.value, isValueFormHasNumber);

  const onSetItemPress = () => {
    if (params.modal === 'refactor') {
      if (isFormNotEmpty(date, title, value)) {
        const id = params.id;

        dispatch(refactorItem({id, value, currentDate: date, category: title}));

        navigation.goBack();
      } else {
        console.log('onSetItemPress refactor error');
      }
    }
    if (params.modal === 'add') {
      if (isFormNotEmpty(date, title, value)) {
        const id = `${date}${title}${value}`;

        dispatch(addItem({id, currentDate: date, category: title, value}));

        setDate('');
        setTitle('');
        setValue('');
      } else {
        console.log('onSetItemPress add error');
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
