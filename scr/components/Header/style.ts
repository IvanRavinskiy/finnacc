import {StyleSheet} from 'react-native';

export const headerStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: '#888688',
  },
  image: {
    margin: 10,
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  profile: {
    fontWeight: '500',
    color: '#efe6ef',
    height: 50,
    width: 250,
  },
  svgContainer: {
    height: 30,
    width: 30,
    marginRight: 20,
  },
});
