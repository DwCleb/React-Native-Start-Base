import React from 'react';

import { create, ReactTestRenderer, act } from 'react-test-renderer';

import { ThemeProvider } from 'styled-components/native';

import HeaderButton, { HeaderButtonProps, HeaderButtonEnum } from '../index';

import { ButtonContainer } from '../styles';

import darkTheme from '~/theme/ThemeContext/dark';

const theme = darkTheme.theme;

const action = jest.fn();

const buttonProps = {
  action,
  type: HeaderButtonEnum.Back,
};

const componentToTest = (props: HeaderButtonProps): JSX.Element => (
  <ThemeProvider theme={theme}>
    <HeaderButton {...props} />
  </ThemeProvider>
);

describe('<HeaderButton /> component', () => {
  const wrapper: ReactTestRenderer = create(componentToTest(buttonProps));
  const root: ReactTestRenderer['root'] = wrapper.root;

  beforeAll(() => {
    jest.useFakeTimers();
  });

  it('Should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('Should call function passed through props when pressed', () => {
    const button = root.findAllByType(ButtonContainer)[0];
    act(() => {
      button.props.onPress();
    });
    expect(action).toHaveBeenCalled();
  });

  it('It should render the right icon when type=close', () => {
    jest.mock('react-native/Libraries/ReactNative/I18nManager', () => ({
      isRTL: true,
    }));

    act(() => {
      wrapper.update(componentToTest({ ...buttonProps, type: HeaderButtonEnum.Close }));
    });

    expect(wrapper.root.findAllByType(ButtonContainer)[0].props.type).toEqual(HeaderButtonEnum.Close);
  });
});
