import React, {useEffect, useMemo, useState} from 'react';
import {View} from 'react-native';
import {VictoryPie} from 'victory-native';
import {useSelector} from 'react-redux';
import {selectExpenseData} from '../../store/selectors';
import {Expense} from '../../enums/Expense';
import {getCategoryValue} from '../../utils';

export type ChartExpenseType = {
  x: string;
  y: number;
};

const arrayExpenseEnums = (
  Object.keys(Expense) as Array<keyof typeof Expense>
).map(key => key);

export const Chart = () => {
  const expenses = useSelector(selectExpenseData);

  const [data, setData] = useState<ChartExpenseType[]>([
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

  const withPositiveValueData = useMemo(
    () =>
      arrayExpenseEnums
        .map((expense: string) => {
          const positiveValueCurrentCategory = getCategoryValue(
            expenses,
            expense,
          );

          if (positiveValueCurrentCategory > 0) {
            return {
              x: expense,
              y: getCategoryValue(expenses, expense),
            };
          }
          return {
            x: expense,
            y: 0,
          };
        })
        .filter(el => el.y > 0),
    [expenses],
  );

  useEffect(() => {
    if (withPositiveValueData) {
      setData(withPositiveValueData);
    }
  }, [withPositiveValueData]);

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
