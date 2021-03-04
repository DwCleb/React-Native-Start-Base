import styled from 'styled-components/native';
import { scale, ThemeContextType } from '~/theme';
import Typography, { TypographyType } from '~/components/UI/Typography';
import { View } from 'react-native';

interface Props {
  isEnabled: boolean;
  variant: 'primary' | 'secondary';
}

type ThemedProps = Props & ThemeContextType;

export const SwitchContainer = styled(View)`
  flex-direction: row;
  align-items: center;
`;

export const SwitchTrack = styled(View)`
  background-color: ${({ theme, variant, isEnabled }: ThemedProps): string =>
    isEnabled ? theme.switch.track[variant].active : theme.switch.track[variant].inactive};
  height: ${scale(18)}px;
  border-radius: ${scale(16)}px;
  align-items: ${({ isEnabled }: ThemedProps): string => (isEnabled ? 'flex-end' : 'flex-start')};
  justify-content: center;
  width: ${scale(26)}px;
`;

export const SwitchThumb = styled.View`
  height: ${scale(12)}px;
  width: ${scale(12)}px;
  border-radius: ${scale(12 / 2)}px;
  background-color: ${({ isEnabled, theme, variant }: ThemedProps): string =>
    isEnabled ? theme.switch.thumb[variant].active : theme.switch.thumb[variant].inactive};
  margin-left: ${scale(3)}px;
  margin-right: ${scale(3)}px;
`;

export const SwitchLabel = styled(Typography).attrs(() => ({
  type: TypographyType.L2,
  bold: true,
  uppercase: true,
}))`
  margin-left: ${scale(15)}px;
`;
