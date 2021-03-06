import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home} from '../../screens/HomeScreen';
import {Chart} from '../../screens/ChartScreen';
import {ExpenseHandling} from '../../screens/ExpenseHandlingScreen';
import {faCirclePlus} from '@fortawesome/free-solid-svg-icons/faCirclePlus';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons/faBars';
import {faChartPie} from '@fortawesome/free-solid-svg-icons/faChartPie';

const Tab = createBottomTabNavigator();
export const TabStack = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name="List"
        component={Home}
        options={{
          tabBarLabel: 'List',
          tabBarIcon: () => (
            <FontAwesomeIcon size={25} color={'black'} icon={faBars} />
          ),
        }}
      />
      <Tab.Screen
        name="Chart"
        component={Chart}
        options={{
          tabBarLabel: 'Chart',
          tabBarIcon: () => (
            <FontAwesomeIcon size={25} color={'red'} icon={faChartPie} />
          ),
        }}
      />
      <Tab.Screen
        name="AddExpense"
        component={ExpenseHandling}
        initialParams={{
          modal: 'add',
          category: '',
          value: '',
          currentDate: '',
          id: '',
        }}
        options={{
          tabBarLabel: 'Add',
          tabBarIcon: () => (
            <FontAwesomeIcon size={25} color={'green'} icon={faCirclePlus} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
