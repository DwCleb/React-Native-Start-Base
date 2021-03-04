import { Colors } from '../colors';
import { ThemeType } from '../theme';

const { palette } = Colors;
const { primary, secondary, alerts, monochromatic, transparent } = palette;

// overrides primary colors
const light: { theme: ThemeType } = {
  theme: {
    mode: 'light',
    alerts,
    primary,
    secondary,
    transparent,
    monochromatic,
    barStyle: 'dark-content',
    background: monochromatic.blackest,
    backgroundInit: '#0F0F0F',
    backgroundFinish: '#323232',
    backgroundLayer: '#1D1D1D',
    inactiveTintColor: monochromatic.white,
    error: {
      card: { background: 'rgba(58, 61, 67,0.2)' },
    },
    shimmer: {
      primaryColor: '#3D4046',
      secondaryColor: monochromatic.lightestBlack,
      tertiaryColor: '#3D4046',
      backgroundColor: monochromatic.lightestBlack,
    },
    currency: {
      title: {
        primary: primary.yellow,
        secondary: monochromatic.white,
        tertiary: monochromatic.white,
        discount: alerts.darkGreen,
        oldPrice: `${monochromatic.veryLightGrey}99`,
      },
    },
    icons: { primary: monochromatic.white },
    switch: {
      track: {
        primary: { active: monochromatic.lightGrey, inactive: monochromatic.lightGrey },
        secondary: { active: alerts.green, inactive: monochromatic.black },
      },
      thumb: {
        primary: { active: primary.blue, inactive: monochromatic.midGrey },
        secondary: { active: '#F7F7F7', inactive: monochromatic.altGrey },
      },
    },
    headerTitle: {
      text: monochromatic.white,
    },
  },
};
export default light;
