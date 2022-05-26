import React, {useEffect} from 'react';
import {ScrollView, View} from 'react-native';
import {SvgPlus} from '../../assets/svg/SvgPlus';
import {homeStyles} from './style';
import {Expense} from '../../components/Expense';
import {useSelector} from 'react-redux';
import {selectExpenseData} from '../../store/selectors';
import {useNavigation} from '@react-navigation/native';
import {Screen} from '../../enums/Screen';
import type {HomeNavigationProp} from './type';
import {HeaderContainer} from '../../components/HeaderContainer';
import {firebase} from '@react-native-firebase/database';

export const Home = () => {
  const navigation = useNavigation<HomeNavigationProp>();

  const expenseData = useSelector(selectExpenseData);

  const onAddItemPress = () => {
    navigation.navigate(Screen.ExpenseHandling, {
      modal: 'add',
      category: '',
      value: '',
      currentDate: '',
      id: '',
    });
  };

  useEffect(() => {
    firebase
      .app()
      .database(
        'https://new-finnacc-default-rtdb.europe-west1.firebasedatabase.app',
      )
      .ref('/expenses')
      .once('value')
      .then(snapshot => {
        console.log(snapshot.val());
      });
  });

  return (
    <HeaderContainer>
      <ScrollView>
        {expenseData.map(expenseItem => {
          const {category, value, currentDate, id} = expenseItem;

          return (
            <Expense
              key={id}
              id={id}
              date={currentDate}
              title={category}
              value={value}
            />
          );
        })}

        <View style={homeStyles.svgContainer}>
          <SvgPlus onPress={onAddItemPress} />
        </View>
      </ScrollView>
    </HeaderContainer>
  );
};
