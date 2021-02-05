import styled from 'styled-components/native';

import { Button } from 'react-native-paper';

import { Metrics, Colors } from '~/theme';
import { ThemeType } from '~/theme/theme';

export enum ButtonMode {
  TEXT = 'text',
  OUTLINED = 'outlined',
  CONTAINED = 'contained',
}

export interface ButtonProps {
  title: string;
  onPress(): void;
  accessibilityLabel?: string;
  icon?: string;
  color?: string;
  mode?: ButtonMode;
  loading?: boolean;
  disabled?: boolean;
  uppercase?: boolean;
  small?: boolean;
  distance?: number[];
  ratio?: number;
}

export type Props = ButtonProps & { theme: ThemeType };

function getMargin({ distance }: Props): string {
  if (!distance) {
    return `${10}px ${5}px ${10}px ${5}px`;
  } else {
    switch (distance.length || 0) {
      case 1:
        return `${distance[0]}px`;
      case 2:
        return `${distance[0]}px ${distance[1]}px`;
      case 3:
        return `${distance[0]}px ${distance[1]}px ${distance[2]}px`;
      case 4:
        return `${distance[0]}px ${distance[1]}px ${distance[2]}px ${distance[3]}px`;
      default:
        return '0px';
    }
  }
}

export const MyButton = styled(Button).attrs(
  ({
    icon,
    color = Colors.palette.primary.blue,
    mode = ButtonMode.CONTAINED,
    uppercase = false,
    loading,
    ratio = 0.85,
  }: ButtonProps) => ({
    icon,
    color,
    mode,
    uppercase,
    contentStyle: { height: 40, width: Metrics.screen.width * ratio },
    loading,
  })
)`
  margin: ${(props: Props): string => getMargin(props)};
  justify-content: center;
  align-items: center;
`;
