import styled from 'styled-components/native';

import LottieView from 'lottie-react-native';

export const OverlayContainer = styled.View`
  position: absolute;
  z-index: ${({ fullscreen }: { fullscreen: boolean }): number => (fullscreen ? 99 : 0)};
  opacity: 0.5;
  background-color: black;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  align-items: center;
  justify-content: center;
`;

export const LottieStyledComponent = styled(LottieView)`
  width: ${100}px;
`;
