import React from 'react';
import {Button, View} from 'react-native';
import {loginStyles} from './style';
import {useDispatch} from 'react-redux';
import {GoogleLoginAC} from '../../store/reducers/loginSlice';

export const Login = () => {
  const dispatch = useDispatch();
  const onGoogleLoginPress = () => {
    dispatch(GoogleLoginAC());
  };

  return (
    <View style={loginStyles.mainContainer}>
      <View style={loginStyles.btn}>
        <Button title="Google Sign-In" onPress={onGoogleLoginPress} />
      </View>
    </View>
  );
};
