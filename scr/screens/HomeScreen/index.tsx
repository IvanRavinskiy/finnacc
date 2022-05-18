import React from 'react';
import {ScrollView, View} from 'react-native';
import {Header} from '../../components/Header';
import {Expense} from '../../components/Expense';
import {data} from '../../data/data';
import {SvgPlus} from '../../assets/svg/SvgPlus';
import {homeStyles} from './style';
import {ExpenseContainer} from '../../components/ExpenseContainer';

export const Home = () => {
  return (
    <ScrollView>
      <Header />
      {data.map(d => {
        return (
          <ExpenseContainer key={d.id}>
            <Expense date={d.date} title={d.title} value={d.value} />
          </ExpenseContainer>
        );
      })}
      <View style={homeStyles.svgContainer}>
        <SvgPlus />
      </View>
    </ScrollView>
  );
};
