import React, {FC} from 'react';
import {SafeAreaView} from 'react-native';
import {Header} from '../Header';
import {HeaderContainerProps} from './type';

export const HeaderContainer: FC<HeaderContainerProps> = ({children}) => {
  return (
    <SafeAreaView>
      <Header />
      {children}
    </SafeAreaView>
  );
};
