import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from '../../screens/HomeScreen';
import {RootStackParamList} from './type';
import {Screen} from '../../enums/Screen';
import {ExpenseHandling} from '../../screens/ExpenseHandlingScreen';
import {Login} from '../../screens/LoginScreen';
import {TabStack} from '../Tab/TabNavigator';
import {Chart} from '../../screens/ChartScreen';

export const StackNavigator = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={Screen.Login} component={Login} />
      <Stack.Screen name={Screen.Tab} component={TabStack} />
      <Stack.Screen name={Screen.Home} component={Home} />
      <Stack.Screen name={Screen.Chart} component={Chart} />
      <Stack.Screen name={Screen.ExpenseHandling} component={ExpenseHandling} />
    </Stack.Navigator>
  );
};
