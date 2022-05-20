import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from '../screens/HomeScreen';
import {ExpenseHandling} from '../screens/ExpenseHandlingScreen';
import {RootStackParamList} from './type';
import {Screen} from '../enums/Screen';
import {ExpenseRefactor} from '../screens/ExpenseRefactorScreen';

export const StackNavigator = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={Screen.Home} component={Home} />
      <Stack.Screen name={Screen.ExpenseHandling} component={ExpenseHandling} />
      <Stack.Screen name={Screen.ExpenseRefactor} component={ExpenseRefactor} />
    </Stack.Navigator>
  );
};
