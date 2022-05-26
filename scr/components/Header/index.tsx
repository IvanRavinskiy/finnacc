import React from 'react';
import {Image, Text, View} from 'react-native';
import {headerStyles} from './style';
import {useDispatch, useSelector} from 'react-redux';
import {selectProfile} from '../../store/selectors';
import {SvgLogout} from '../../assets/svg/SvgLogout';
import {GoogleLogoutAC} from '../../store/reducers/loginSlice';

export const Header = () => {
  const dispatch = useDispatch();
  const profile = useSelector(selectProfile);
  const onLogoutPress = () => {
    dispatch(GoogleLogoutAC());
  };

  return (
    <View style={headerStyles.container}>
      <Image
        style={headerStyles.image}
        source={{
          uri: `${profile.photo}`,
        }}
      />
      <Text style={headerStyles.profile}>{profile.name}</Text>
      <View style={headerStyles.svgContainer}>
        <SvgLogout onPress={onLogoutPress} />
      </View>
    </View>
  );
};
