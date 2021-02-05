import styled from 'styled-components/native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { BackButtonProps } from '.';
import { Metrics, ThemeContextType } from '~/theme';

export const BackIcon = styled(IonIcon).attrs(({ size, color, theme }: BackButtonProps & ThemeContextType) => ({
  size: size || 30,
  color: color || theme.monochromatic.black,
  name: 'ios-arrow-back-outline',
}))``;

export const Button = styled.TouchableOpacity.attrs(() => ({
  hitSlop: {
    top: 20,
    bottom: 0,
    left: 20,
    right: 20,
  },
}))`
  padding: 3px;
  padding-left: 0px;
  justify-content: center;
  align-items: center;
  margin-left: ${Metrics.base.MARGIN};
`;
