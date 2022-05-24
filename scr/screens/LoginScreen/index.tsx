import React from 'react';
import {Button, View} from 'react-native';
import {loginStyles} from './style';
import {useDispatch} from 'react-redux';
import {isGoogleLogin} from '../../store/reducers/loginSlice';

export const Login = () => {
  const dispatcch = useDispatch();
  const onGoogleLoginPress = () => {
    dispatcch(isGoogleLogin());
  };

  return (
    <View style={loginStyles.mainContainer}>
      <View style={loginStyles.btn}>
        <Button title="Google Sign-In" onPress={onGoogleLoginPress} />
      </View>
    </View>
  );
};
