import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation/Stack/type';
import {StackNavigationProp} from '@react-navigation/stack';

export type Props = NativeStackScreenProps<
  RootStackParamList,
  'ExpenseHandling'
>;
export type HomeNavigationProp = StackNavigationProp<RootStackParamList>;
