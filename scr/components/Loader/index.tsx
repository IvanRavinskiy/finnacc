import React, {FC} from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import {loaderStyles} from './style';

export const Loader: FC = () => {
  return (
    <View style={loaderStyles.container}>
      <ActivityIndicator size={'large'} />
      <Text style={loaderStyles.text}>Loading...</Text>
    </View>
  );
};
