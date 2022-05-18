import React from 'react';
import {ScrollView, View} from 'react-native';
import {Header} from '../../components/Header';
import {SvgPlus} from '../../assets/svg/SvgPlus';
import {homeStyles} from './style';
import {Expense} from '../../components/Expense';
import {useSelector} from 'react-redux';
import {RootStateType} from '../../store';

export const Home = () => {
  const data = useSelector((state: RootStateType) => state.expense);
  return (
    <ScrollView>
      <Header />
      {data.map(d => {
        return (
          <Expense
            key={d.id}
            id={d.id}
            date={d.date}
            title={d.title}
            value={d.value}
          />
        );
      })}
      <View style={homeStyles.svgContainer}>
        <SvgPlus />
      </View>
    </ScrollView>
  );
};
