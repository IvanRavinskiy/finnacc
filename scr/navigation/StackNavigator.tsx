import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from '../screens/HomeScreen';
import {ExpenseHandling} from '../screens/ExpenseHandlingScreen';

export const StackNavigator = () => {
  const Stack = createNativeStackNavigator<any>();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={'Home'} component={Home} />
      <Stack.Screen name={'ExpenseHandling'} component={ExpenseHandling} />
    </Stack.Navigator>
  );
};
