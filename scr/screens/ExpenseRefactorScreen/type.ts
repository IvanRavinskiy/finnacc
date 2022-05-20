import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation/type';
import {StackNavigationProp} from '@react-navigation/stack';

export type Props = NativeStackScreenProps<
  RootStackParamList,
  'ExpenseRefactor'
>;
export type HomeNavigationProp = StackNavigationProp<RootStackParamList>;
