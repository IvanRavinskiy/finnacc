import React from 'react';
import {Image, Text, View} from 'react-native';
import {headerStyles} from './style';

export const Header = () => {
  return (
    <View style={headerStyles.container}>
      <Image
        style={headerStyles.image}
        source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTesnspzmYPwsR6SMr-G6x-RYmtjwc_21C_6Q&usqp=CAU',
        }}
      />
      <Text style={headerStyles.profile}>PROFILE NAME</Text>
    </View>
  );
};
