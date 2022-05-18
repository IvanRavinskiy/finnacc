import React from 'react';
import {SafeAreaView} from 'react-native';
import {Home} from './scr/screens/HomeScreen';
import {Provider} from 'react-redux';
import {store} from './scr/store';
import {Header} from './scr/components/Header';
import {ExpenseHandling} from './scr/screens/ExpenseHandlingScreen';

export const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView>
        <Header />
        {/*<Home />*/}
        <ExpenseHandling />
      </SafeAreaView>
    </Provider>
  );
};
