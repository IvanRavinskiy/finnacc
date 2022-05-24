import React from 'react';
import {Provider} from 'react-redux';
import {store} from './scr/store';
import {StackNavigator} from './scr/navigation/StackNavigator';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from './scr/utils/navigate';

export const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef}>
        <StackNavigator />
      </NavigationContainer>
    </Provider>
  );
};
