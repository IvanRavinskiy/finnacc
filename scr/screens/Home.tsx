import React from 'react';
import {Text, View} from 'react-native';
import {Header} from '../components/Header';
import {Expense} from '../components/Expense';
import {data} from '../data/data';

export const Home = () => {
  return (
    <View>
      <Header />
      <Text>HOME SCREEN</Text>
      {data.map(d => {
        return (
          <Expense key={d.id} date={d.date} title={d.title} value={d.value} />
        );
      })}
    </View>
  );
};
