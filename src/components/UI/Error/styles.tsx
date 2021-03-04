import styled from 'styled-components/native';
import { scale, ThemeContextType } from '~/theme';
import Typography, { TypographyType } from '~/components/UI/Typography';
import Modal from 'react-native-modal';

//Modal
export const ErrorModal = styled(Modal)`
  margin: 0px;
`;

//Parent Component
export const MainContainer = styled.SafeAreaView`
  flex: 1;
  width: 100%;
  background-color: ${({ theme }: ThemeContextType): string => theme.background};
`;

//Content's ScrollView
export const Scroll = styled.ScrollView.attrs(() => ({
  keyboardShouldPersistTaps: 'handled',
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { flex: 1, paddingTop: scale(35) },
}))`
  height: auto;
`;

//Content Container
export const ContentContainer = styled.View`
  flex: 1;
  margin: ${scale(30)}px;
`;

//Page Title
export const Title = styled(Typography).attrs(() => ({
  type: TypographyType.H2,
  weight: 'regular',
  align: 'left',
}))`
  color: ${({ theme }: ThemeContextType): string => theme.text.black};
  margin-bottom: ${scale(10)}px;
  letter-spacing: ${scale(1)}px;
`;

export const SubTitle = styled(Typography).attrs(() => ({
  type: TypographyType.H5,
  weight: 'regular',
  align: 'left',
}))`
  color: ${({ theme }: ThemeContextType): string => theme.text.black};
  letter-spacing: ${scale(1)}px;
`;

//Error message
export const ErrorMessageContainer = styled.View`
  border-radius: ${scale(8)}px;
  height: ${scale(100)}px;
  padding: ${scale(20)}px ${scale(40)}px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }: ThemeContextType): string => theme.error.card.background};
`;

export const ErrorMessage = styled(Typography).attrs(() => ({
  type: TypographyType.P2,
  weight: 'regular',
  align: 'center',
  numberOfLines: 2,
}))`
  color: ${({ theme }: ThemeContextType): string => theme.monochromatic.black};
  letter-spacing: ${scale(1)}px;
`;

//Buttons container
export const ButtonsContainer = styled.View`
  margin-bottom: ${scale(30)}px;
`;
