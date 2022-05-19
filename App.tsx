import React from 'react';
import {Provider} from 'react-redux';
import {store} from './scr/store';
import {StackNavigator} from './scr/navigation/StackNavigator';
import {NavigationContainer} from '@react-navigation/native';

export const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </Provider>
  );
};
