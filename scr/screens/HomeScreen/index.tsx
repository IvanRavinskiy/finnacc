import React from 'react';
import {View} from 'react-native';
import {Header} from '../../components/Header';
import {Expense} from '../../components/Expense';
import {data} from '../../data/data';
import {SvgPlus} from '../../assets/svg/SvgPlus';
import {homeStyles} from './style';

export const Home = () => {
  return (
    <View>
      <Header />
      {data.map(d => {
        return (
          <Expense key={d.id} date={d.date} title={d.title} value={d.value} />
        );
      })}
      <View style={homeStyles.svgContainer}>
        <SvgPlus />
      </View>
    </View>
  );
};
