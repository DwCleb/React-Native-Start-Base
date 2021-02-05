import styled from 'styled-components/native';

/* Components */
import Typography, { TypographyType } from '../Typography';

/* Theme */
import { scale, ThemeContextType } from '~/theme';

export const Header = styled.View`
  padding-bottom: ${scale(35)}px;
`;

export const TitleTypography = styled(Typography).attrs({
  type: TypographyType.H3,
  align: 'left',
  distance: [0, 0, 0, 0],
})`
  align-self: flex-start;
  margin-left: ${scale(20)}px;
  margin-right: ${scale(20)}px;
  color: ${({ theme }: ThemeContextType): string => theme.headerTitle.text};
`;

export const SubtitleTypography = styled(Typography).attrs({
  type: TypographyType.P1,
  align: 'left',
  distance: [0, 0, 0, 0],
})`
  align-self: flex-start;
  margin-left: ${scale(20)}px;
  margin-right: ${scale(20)}px;
  color: ${({ theme }: ThemeContextType): string => theme.headerTitle.text};
`;
