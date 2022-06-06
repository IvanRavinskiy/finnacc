import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {VictoryPie} from 'victory-native';
import {useSelector} from 'react-redux';
import {selectExpenseData} from '../../store/selectors';
import {Expense} from '../../enums/Expense';

export const Chart = () => {
  const expenses = useSelector(selectExpenseData);

  const getCategoryValue = (category: string) => {
    return expenses.reduce((acc, expense) => {
      if (expense.category === category) {
        return acc + Number(expense.value);
      }

      return acc;
    }, 0);
  };

  const [data, setData] = useState([
    {x: Expense.Food, y: 0},
    {x: Expense.Car, y: 0},
    {x: Expense.Pharmacy, y: 0},
    {x: Expense.Baby, y: 0},
    {x: Expense.Service, y: 0},
    {x: Expense.HouseholdChemicals, y: 0},
    {x: Expense.Appliances, y: 0},
    {x: Expense.Cafe, y: 0},
    {x: Expense.Entertainment, y: 0},
    {x: Expense.Traffic, y: 0},
    {x: Expense.Communal, y: 0},
    {x: Expense.Clothes, y: 0},
    {x: Expense.MedicalServices, y: 0},
    {x: Expense.Gift, y: 0},
    {x: Expense.Other, y: 0},
  ]);

  useEffect(() => {
    setData([
      {x: Expense.Food, y: getCategoryValue(Expense.Food)},
      {x: Expense.Car, y: getCategoryValue(Expense.Car)},
      {x: Expense.Pharmacy, y: getCategoryValue(Expense.Pharmacy)},
      {x: Expense.Service, y: getCategoryValue(Expense.Service)},
      {x: Expense.Baby, y: getCategoryValue(Expense.Baby)},
      {
        x: Expense.HouseholdChemicals,
        y: getCategoryValue(Expense.HouseholdChemicals),
      },
      {x: Expense.Appliances, y: getCategoryValue(Expense.Appliances)},
      {x: Expense.Cafe, y: getCategoryValue(Expense.Cafe)},
      {x: Expense.Entertainment, y: getCategoryValue(Expense.Entertainment)},
      {x: Expense.Traffic, y: getCategoryValue(Expense.Traffic)},
      {x: Expense.Communal, y: getCategoryValue(Expense.Communal)},
      {x: Expense.Clothes, y: getCategoryValue(Expense.Clothes)},
      {
        x: Expense.MedicalServices,
        y: getCategoryValue(Expense.MedicalServices),
      },
      {x: Expense.Gift, y: getCategoryValue(Expense.Gift)},
      {x: Expense.Other, y: getCategoryValue(Expense.Other)},
    ]);
  }, [expenses]);

  return (
    <View>
      <VictoryPie
        colorScale={[
          '#ca6465',
          '#5cb959',
          '#9844a7',
          '#9fb333',
          '#686bd0',
          '#dc9a3d',
          '#cf74dc',
          '#537a37',
          '#d24080',
          '#51b9a1',
          '#d34f34',
          '#6c91cf',
          '#ada55a',
          '#c173a6',
          '#a66d37',
        ]}
        data={data}
      />
    </View>
  );
};
