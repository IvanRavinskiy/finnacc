import React from 'react';
import {Button, Text, View} from 'react-native';
import {loginStyles} from './style';

export const Login = () => {
  const onGoogleLoginPress = () => {
    console.log('onGoogleLoginPress click');
  };

  return (
    <View style={loginStyles.mainContainer}>
      <Text>login</Text>
      <View style={loginStyles.btn}>
        <Button title="Google Sign-In" onPress={onGoogleLoginPress} />
      </View>
    </View>
  );
};
