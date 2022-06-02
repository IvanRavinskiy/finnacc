import React, {useEffect, useState} from 'react';
import {TextInput, TouchableOpacity, View} from 'react-native';
import {expenseHandlingStyles} from './style';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {HomeNavigationProp, Props} from './type';
import {HeaderContainer} from '../../components/HeaderContainer';
import {isFormNotEmpty, isValueFormHasNumber} from '../../utils';
import {useInputValue} from './hooks';
import {addExpenseAC} from '../../store/actions/expensesSagaActions';
import {updateExpenseAC} from '../../store/actions/expensesSagaActions';
import {faCheck} from '@fortawesome/free-solid-svg-icons/faCheck';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faRotateLeft} from '@fortawesome/free-solid-svg-icons/faRotateLeft';
import {Calendar} from '../../components/Calendar';

export const ExpenseHandling = ({route}: Props) => {
  const navigation = useNavigation<HomeNavigationProp>();
  const {params} = route;

  useEffect(() => {
    //@ts-ignore
    navigation.setOptions({tabBarStyle: {display: 'none'}});
  }, [navigation]);

  const dispatch = useDispatch();

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

  const zeroField = () => {
    setTitle('');
    setValue('');
  };

  const [date, setDate] = useState(new Date());

  const onSetItemPress = () => {
    if (params.modal === 'refactor') {
      if (isFormNotEmpty(date, title, value)) {
        const id = params.id;

        dispatch(
          updateExpenseAC({
            id,
            currentDate: date.toLocaleDateString(),
            category: title,
            value,
          }),
        );

        navigation.goBack();
      } else {
        console.log('onSetItemPress refactor error');
      }
    }
    if (params.modal === 'add') {
      if (isFormNotEmpty(date, title, value)) {
        const id = `${date}${title}${value}`;

        dispatch(
          addExpenseAC({
            id,
            currentDate: date.toLocaleDateString(),
            category: title,
            value,
          }),
        );

        zeroField();
      } else {
        console.log('onSetItemPress add error');
      }
    }
  };

  const onBackScreenPress = () => {
    navigation.goBack();
  };

  return (
    <HeaderContainer>
      <View>
        <Calendar date={date} setDate={setDate} />

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

        <View style={expenseHandlingStyles.btnContainer}>
          <TouchableOpacity onPress={onSetItemPress}>
            <FontAwesomeIcon color={'green'} size={40} icon={faCheck} />
          </TouchableOpacity>
          <TouchableOpacity onPress={onBackScreenPress}>
            <FontAwesomeIcon color={'red'} size={40} icon={faRotateLeft} />
          </TouchableOpacity>
        </View>
      </View>
    </HeaderContainer>
  );
};
