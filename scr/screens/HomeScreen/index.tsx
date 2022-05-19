import React from 'react';
import {ScrollView, View} from 'react-native';
import {SvgPlus} from '../../assets/svg/SvgPlus';
import {homeStyles} from './style';
import {Expense} from '../../components/Expense';
import {useSelector} from 'react-redux';
import {selectExpenseData} from '../../store/selectors';
import {Header} from '../../components/Header';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../navigation/type';
import {Screen} from '../../enums/Screen';

type HomeProp = StackNavigationProp<RootStackParamList>;

export const Home = () => {
  const expenseData = useSelector(selectExpenseData);
  const navigation = useNavigation<HomeProp>();
  const onAddItemPress = () => {
    navigation.navigate(Screen.ExpenseHandling);
  };

  return (
    <View>
      <Header />
      <ScrollView>
        {expenseData.map(d => {
          return (
            <Expense
              key={d.id}
              id={d.id}
              date={d.date}
              title={d.title}
              value={d.value}
            />
          );
        })}
        <View style={homeStyles.svgContainer}>
          <SvgPlus onPress={onAddItemPress} />
        </View>
      </ScrollView>
    </View>
  );
};
