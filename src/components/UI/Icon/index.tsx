import styled from 'styled-components/native';
import { Colors } from '~/theme';

import IonIcon from 'react-native-vector-icons/Ionicons';

import { Platform } from 'react-native';

interface IconProps {
  name: string;
  logo: boolean;
  ios: boolean;
  md: boolean;
  color: string;
  size: number;
  direction: string;
}

const platform = Platform.OS === 'ios' ? 'ios' : 'md';

export const Icon = styled(IonIcon).attrs(({ name, logo, ios, md, size }: IconProps) => {
  const platformOS = ios ? 'ios' : md ? 'md' : logo ? 'logo' : platform;

  const iconName = `${platformOS}-${name}`;

  return {
    name: iconName,
    logo,
    size: size || 20,
  };
})`
  color: ${(props: IconProps): string => props.color || Colors.theme.monochromatic.almostWhite};
  align-self: center;
  margin-left: 2px;
`;

export default Icon;
