import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {headerStyles} from './style';
import {useDispatch, useSelector} from 'react-redux';
import {selectProfile} from '../../store/selectors';
import {GoogleLogoutAC} from '../../store/actions/loginSagaActions';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faRightFromBracket} from '@fortawesome/free-solid-svg-icons/faRightFromBracket';

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
      <TouchableOpacity onPress={onLogoutPress}>
        <FontAwesomeIcon size={25} icon={faRightFromBracket} />
      </TouchableOpacity>
    </View>
  );
};
