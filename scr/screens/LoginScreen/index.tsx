import React from 'react';
import {Button, View} from 'react-native';
import {loginStyles} from './style';
import {useDispatch, useSelector} from 'react-redux';
import {GoogleLoginAC} from '../../store/actions/loginSagaActions';
import {selectLoader} from '../../store/selectors';
import {Loader} from '../../components/Loader';

export const Login = () => {
  const dispatch = useDispatch();

  const onGoogleLoginPress = () => {
    dispatch(GoogleLoginAC());
  };

  const isLoading = useSelector(selectLoader);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <View style={loginStyles.mainContainer}>
      <View style={loginStyles.btn}>
        <Button title="Google Sign-In" onPress={onGoogleLoginPress} />
      </View>
    </View>
  );
};
