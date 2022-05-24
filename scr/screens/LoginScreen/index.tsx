import React from 'react';
import {Button, Text, View} from 'react-native';
import {loginStyles} from './style';
import {useDispatch} from 'react-redux';
import {isGoogleLogin} from '../../store/reducers/loginSlice';
import {GoogleSigninButton} from '@react-native-google-signin/google-signin';

export const Login = () => {
  const dispatcch = useDispatch();
  const onGoogleLoginPress = () => {
    console.log('onGoogleLoginPress click');
    dispatcch(isGoogleLogin());
  };

  return (
    <View style={loginStyles.mainContainer}>
      <Text>login</Text>
      <View style={loginStyles.btn}>
        <Button title="Google Sign-In" onPress={onGoogleLoginPress} />
      </View>
      <GoogleSigninButton
        style={loginStyles.btn}
        size={GoogleSigninButton.Size.Standard}
        color={GoogleSigninButton.Color.Dark}
        onPress={onGoogleLoginPress}
      />
    </View>
  );
};
