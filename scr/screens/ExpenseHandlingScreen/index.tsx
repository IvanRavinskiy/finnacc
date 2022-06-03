import React, {useEffect, useState} from 'react';
import {Keyboard, TextInput, TouchableOpacity, View} from 'react-native';
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
import {ExpenseCategoryList} from '../../components/ExpenseCategoryList';

export const ExpenseHandling = ({route}: Props) => {
  const navigation = useNavigation<HomeNavigationProp>();
  const {params} = route;

  useEffect(() => {
    //@ts-ignore
    navigation.setOptions({tabBarStyle: {display: 'none'}});
  }, [navigation]);

  const dispatch = useDispatch();

  const [date, setDate] = useState<Date>(new Date());

  const [category, setCategory] = useState<null | string>(null);

  const [selectedCategory, setSelectedCategory] = useState(null);

  const {
    inputValue: currentInputValue,
    setInputValue: setValue,
    onChangeInputValue: onChangeValue,
  } = useInputValue(params.value, isValueFormHasNumber);

  const zeroField = () => {
    setSelectedCategory(null);
    setValue('');
  };

  const onSetItemPress = () => {
    if (params.modal === 'refactor') {
      if (isFormNotEmpty(date, category, currentInputValue)) {
        const id = params.id;

        dispatch(
          updateExpenseAC({
            id,
            currentDate: date.toLocaleDateString(),
            category,
            value: currentInputValue,
          }),
        );

        navigation.goBack();
      } else {
        console.log('onSetItemPress refactor error');
      }
    }
    if (params.modal === 'add') {
      if (isFormNotEmpty(date, category, currentInputValue)) {
        const id = `${date}${category}${currentInputValue}`;
        dispatch(
          addExpenseAC({
            id,
            currentDate: date.toLocaleDateString(),
            category,
            value: currentInputValue,
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

        <ExpenseCategoryList
          value={selectedCategory}
          setValue={setSelectedCategory}
          setCategory={setCategory}
        />

        <TextInput
          style={expenseHandlingStyles.input}
          keyboardType="numeric"
          placeholder="Require value"
          onChangeText={onChangeValue}
          defaultValue={currentInputValue}
          onBlur={() => Keyboard.dismiss}
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
