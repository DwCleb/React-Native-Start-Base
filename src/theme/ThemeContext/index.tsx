import React, { createContext, useContext, useState } from 'react';
import { StatusBar, ColorSchemeName } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import lightTheme from './light';
import darkTheme from './dark';
import { ThemeType } from '../theme';

interface Props {
  children: React.ReactNode;
}

export interface ThemeContextType {
  mode: ColorSchemeName;
  setMode: (mode: ColorSchemeName) => void;
  theme: ThemeType;
}

const INITIAL_THEME_CONTEXT: ThemeContextType = {
  mode: 'dark',
  setMode(nextMode: ColorSchemeName): void {
    this.mode = nextMode;
  },
  theme: darkTheme.theme,
};

const ThemeContext = createContext<ThemeContextType>(INITIAL_THEME_CONTEXT);

export const useTheme = (): ThemeContextType => useContext<ThemeContextType>(ThemeContext);

const ManageThemeProvider = ({ children }: Props): JSX.Element => {
  const [themeState, setThemeState] = useState<ColorSchemeName>('dark');

  const setMode = (mode: ColorSchemeName): void => {
    setThemeState(mode);
  };

  const theme: ThemeType = themeState === 'dark' ? darkTheme.theme : lightTheme.theme;

  return (
    <ThemeContext.Provider value={{ mode: themeState, setMode, theme }}>
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <StatusBar barStyle={theme.barStyle} backgroundColor={theme.background} />
          {children}
        </React.Fragment>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

const ThemeManager = ({ children }: Props): JSX.Element => <ManageThemeProvider>{children}</ManageThemeProvider>;

export default ThemeManager;
