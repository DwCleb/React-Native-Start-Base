// FIXME: this type must be refined. Not sure if all this information should be put here.

interface SwitchThemeType {
  active: string;
  inactive: string;
}

export interface ThemeType {
  mode: string;
  background: string;
  backgroundInit: string;
  backgroundFinish: string;
  backgroundLayer: string;
  inactiveTintColor: string;

  error: {
    card: { background: string };
  };

  shimmer: {
    primaryColor: string;
    secondaryColor: string;
    tertiaryColor: string;
    backgroundColor: string;
  };
  currency: {
    title: {
      [key: string]: string;
    };
  };
  monochromatic: {
    [key: string]: string;
  };

  primary: {
    [key: string]: string;
  };
  secondary: {
    [key: string]: string;
  };
  alerts: {
    [key: string]: string;
  };

  icons: {
    primary: string;
  };
  barStyle: 'light-content' | 'default' | 'dark-content';
  transparent: string;

  switch: {
    track: { primary: SwitchThemeType; secondary: SwitchThemeType };
    thumb: { primary: SwitchThemeType; secondary: SwitchThemeType };
  };

  headerTitle: {
    text: string;
  };
}
