import {createNavigationContainerRef} from '@react-navigation/native';
import {RootStackParamList} from '../navigation/Stack/type';

export const navigationRef = createNavigationContainerRef<RootStackParamList>();

export function navigate(nameScreen: any) {
  if (navigationRef.isReady()) {
    return navigationRef.current?.navigate(nameScreen);
  }
}
