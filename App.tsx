import React from 'react';
import {SafeAreaView} from 'react-native';
import {Home} from './scr/screens/HomeScreen';
import {Provider} from 'react-redux';
import {store} from './scr/store';

export const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView>
        <Home />
      </SafeAreaView>
    </Provider>
  );
};
