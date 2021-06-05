import { requireNativeComponent, ViewStyle } from 'react-native';

type CoordinatesOcrProps = {
  color: string;
  style: ViewStyle;
};

export const CoordinatesOcrViewManager =
  requireNativeComponent<CoordinatesOcrProps>('CoordinatesOcrView');

export default CoordinatesOcrViewManager;
