import React from 'react';
import {Image, Text, View} from 'react-native';
import {headerStyles} from './style';
import {useSelector} from 'react-redux';
import {selectProfile} from '../../store/selectors';
import {SvgLogout} from '../../assets/svg/SvgLogout';

export const Header = () => {
  const profile = useSelector(selectProfile);
  const onLogoutPress = () => {
    console.log('onLogoutPress click');
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
