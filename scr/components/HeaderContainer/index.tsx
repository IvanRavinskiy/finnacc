import React, {FC} from 'react';
import {View} from 'react-native';
import {Header} from '../Header';
import {HeaderContainerProps} from './type';

export const HeaderContainer: FC<HeaderContainerProps> = ({children}) => {
  return (
    <View>
      <Header />
      {children}
    </View>
  );
};
