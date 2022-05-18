import React, {FC, ReactElement, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

type ExpenseContainerPropsType = {
  children: ReactElement;
};

export const ExpenseContainer: FC<ExpenseContainerPropsType> = ({children}) => {
  const [view, setView] = useState(false);
  const onShowControlPress = () => {
    setView(!view);
  };

  return (
    <View>
      <TouchableOpacity onPress={onShowControlPress}>
        {children}
      </TouchableOpacity>
      {view && (
        <TouchableOpacity>
          <Text>Refactor</Text>
        </TouchableOpacity>
      )}
      {view && (
        <TouchableOpacity>
          <Text>Delete</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};
