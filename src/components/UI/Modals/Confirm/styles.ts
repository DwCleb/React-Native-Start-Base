import styled from 'styled-components/native';
import Modal from 'react-native-modal';
import { Metrics, ThemeContextType } from '~/theme';

export const Container = styled(Modal)`
  flex: 1;
  justify-content: flex-end;
  width: ${Metrics.screen.width}px;
  margin-left: 0px;
  background-color: transparent;
`;

export const TopView = styled.View`
  flex: 1;
  width: 100%;
`;

export const ActionView = styled.View`
  flex: 1;
  flex-direction: row;
`;
export const ActionSubView = styled.View`
  flex: 1;
`;

export const Content = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    flexGrow: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  keyboardShouldPersistTaps: 'handled',
}))`
  flex: 1;
  padding-vertical: 50px;
`;

export const SubContainer = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    flexGrow: 1,
    paddingHorizontal: 20,
    width: Metrics.screen.width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  keyboardShouldPersistTaps: 'handled',
}))`
  flex: 1;
  position: absolute;
  bottom: 0;
  padding-bottom: 60px;
  margin-bottom: -30px;
  background-color: white;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
`;

export const ModalRod = styled.View`
  align-self: center;
  height: 5px;
  width: 15%;
  background-color: ${({ theme }: ThemeContextType): string => theme.primary.blue};
  margin-top: 8px;
  margin-bottom: 10px;
  border-radius: 12px;
`;
