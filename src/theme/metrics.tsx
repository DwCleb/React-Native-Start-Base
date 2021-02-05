import { Dimensions, PixelRatio } from 'react-native';

const { width, height } = Dimensions.get('window');

const pixelRatio = PixelRatio.getFontScale();

export const scale = (size: number): number => size * pixelRatio;

export const Metrics = {
  screen: {
    width: width < height ? width : height,
    height: width < height ? height : width,
  },
  base: {
    MARGIN: scale(20),
    PADDING: scale(20),
    RADIUS: scale(8),
  },
  heading: {
    H1: scale(48),
    H2: scale(36),
    H3: scale(28),
    H4: scale(24),
    H5: scale(22),
  },
  paragraph: {
    P1: scale(20),
    P2: scale(18),
    P3: scale(16),
    P4: scale(14),
  },
  label: {
    L1: scale(12),
    L2: scale(10),
    L3: scale(8),
  },
  lineHeight: {
    BODY: scale(20),
  },
};
