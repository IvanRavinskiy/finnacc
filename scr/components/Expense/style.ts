import {StyleSheet} from 'react-native';

export const expenseStyles = StyleSheet.create({
  container: {
    borderColor: '#fff3cc',
    borderWidth: 2,
    flex: 1,
    flexDirection: 'column',
  },
  item: {
    backgroundColor: '#ffe366',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  svgContainer: {
    flex: 1,
    height: 50,
    width: '100%',
    backgroundColor: '#ffd200',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
});
