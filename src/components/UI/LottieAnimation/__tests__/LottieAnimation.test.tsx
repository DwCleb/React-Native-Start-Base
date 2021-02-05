import React from 'react';
import { create, ReactTestRenderer } from 'react-test-renderer';
import { ThemeProvider } from 'styled-components/native';
import LottieView from 'lottie-react-native';
import { getSource } from '../utils';

import LottieAnimation, { LottieProps, AnimationsEnum } from '../index';

import darkTheme from '~/theme/ThemeContext/dark';

const props: LottieProps = {
  name: AnimationsEnum.LoadingSpinner,
};

const theme = darkTheme.theme;

let wrapper: ReactTestRenderer;
let root: ReactTestRenderer['root'];

const componentToTest = (componentProps: LottieProps): JSX.Element => (
  <ThemeProvider theme={theme}>
    <LottieAnimation {...componentProps} />
  </ThemeProvider>
);

describe('test render for mandatory props - Icon', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  beforeEach(() => {
    wrapper = create(componentToTest(props));
    root = wrapper.root;
  });

  it('Should be render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('Should expect to get the correct source according prop name', () => {
    expect(root.findAllByType(LottieView)[0].props.source).toEqual(getSource(props.name));
  });

  it('Function getSource from utils should return an animation`s source', () => {
    const defaultResult = getSource(AnimationsEnum.None);
    const registerLogo = getSource(AnimationsEnum.RegisterLogo);
    const backgroundRegister = getSource(AnimationsEnum.RegisterBackground);
    expect(defaultResult).toBeTruthy();
    expect(registerLogo).toBeTruthy();
    expect(backgroundRegister).toBeTruthy();
  });
});
