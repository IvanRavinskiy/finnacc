import {createNavigationContainerRef} from '@react-navigation/native';
import {RootStackParamList} from '../navigation/type';

export const navigationRef = createNavigationContainerRef<RootStackParamList>();

export function navigate(nameScreen: any) {
  if (navigationRef.isReady()) {
    navigationRef.current?.navigate(nameScreen);
  }
}
