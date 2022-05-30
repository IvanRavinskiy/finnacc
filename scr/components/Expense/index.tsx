import React, {FC, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {expenseStyles} from './style';
import {Screen} from '../../enums/Screen';
import {useNavigation} from '@react-navigation/native';
import {HomeNavigationProp} from '../../screens/HomeScreen/type';
import {ExpensePropsType} from './type';
import {deleteExpenseAC} from '../../store/actions/expensesSagaActions';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSquarePen} from '@fortawesome/free-solid-svg-icons/faSquarePen';
import {faTrash} from '@fortawesome/free-solid-svg-icons/faTrash';

export const Expense: FC<ExpensePropsType> = props => {
  const {id, date, title, value} = props;

  const [view, setView] = useState(false);

  const navigation = useNavigation<HomeNavigationProp>();

  const dispatch = useDispatch();

  const onShowControlPress = () => {
    setView(!view);
  };

  const onDeleteItemPress = () => {
    dispatch(deleteExpenseAC(id));
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
    <View style={expenseStyles.container}>
      <TouchableOpacity onPress={onShowControlPress}>
        <View style={expenseStyles.item}>
          <Text>{date}</Text>
          <Text>{title}</Text>
          <Text>{value}</Text>
        </View>
      </TouchableOpacity>

      {view && (
        <View style={expenseStyles.svgContainer}>
          <TouchableOpacity onPress={onRefactorItemPress}>
            <FontAwesomeIcon size={30} icon={faSquarePen} />
          </TouchableOpacity>
          <TouchableOpacity onPress={onDeleteItemPress}>
            <FontAwesomeIcon size={30} icon={faTrash} />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};
