import React from 'react';

import { create, ReactTestRenderer, act } from 'react-test-renderer';

import Switch, { SwitchProps, SwitchVariantsEnum } from '~/components/UI/Controls/Switch';

import { ThemeProvider } from 'styled-components/native';

import lightTheme from '~/theme/ThemeContext/light';

import * as themeManager from '~/theme/ThemeContext';
import { TouchableHighlight } from 'react-native';
import { SwitchTrack, SwitchThumb, SwitchLabel } from '../styles';

const themeContext = jest.spyOn(themeManager, 'useTheme');

const theme = lightTheme.theme;

// FIXME: make it transversal to all tests
themeContext.mockImplementation(
  (): themeManager.ThemeContextType => {
    return {
      mode: 'light',
      setMode: jest.fn(),
      theme,
    };
  }
);

const onChangeEvent = jest.fn();

let wrapper: ReactTestRenderer;
let root: ReactTestRenderer['root'];

const props: SwitchProps = {
  value: false,
  onChange: onChangeEvent,
};

const componentToTest = (componentProps: SwitchProps): JSX.Element => (
  <ThemeProvider theme={theme}>
    <Switch {...componentProps} />
  </ThemeProvider>
);

describe('Render of Switch with mandatory props', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });
  beforeEach(() => {
    wrapper = create(componentToTest(props));
    root = wrapper.root;
  });

  it('Should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('Should render the correct structure with default props', () => {
    /*renders pressable component */
    expect(root.findAllByType(TouchableHighlight)).toHaveLength(1);
    /*renders switch track */
    expect(root.findAllByType(SwitchTrack)).toHaveLength(1);
    expect(root.findAllByType(SwitchTrack)[0].props.isEnabled).toBe(false);
    /* renders switch thumb */
    expect(root.findAllByType(SwitchThumb)).toHaveLength(1);
    expect(root.findAllByType(SwitchThumb)[0].props.isEnabled).toBe(false);
  });

  it('Should change isEnabled prop after press on TouchableHighlight', () => {
    const ButtonElement = root.findAllByType(TouchableHighlight)[0];

    act(() => {
      ButtonElement.props.onPress();
    });

    expect(onChangeEvent).toHaveBeenCalled();
  });

  it('Should render components with isEnabled prop as true, if value prop is true', () => {
    const valueProps: SwitchProps = {
      ...props,
      value: true,
    };

    wrapper = create(componentToTest(valueProps));
    root = wrapper.root;

    const SwitchThumbElement = root.findAllByType(SwitchThumb)[0];
    const SwitchTrackElement = root.findAllByType(SwitchTrack)[0];
    //isEnabled prop is now true
    expect(SwitchThumbElement.props.isEnabled).toBe(true);
    expect(SwitchTrackElement.props.isEnabled).toBe(true);
  });

  it('Should render a SwitchLabel with acessibility label prop', () => {
    const labelProps: SwitchProps = {
      ...props,
      acessibilityLabel: 'label',
    };

    wrapper = create(componentToTest(labelProps));
    root = wrapper.root;

    /* renders label */
    const SwitchLabelElements = root.findAllByType(SwitchLabel);
    expect(SwitchLabelElements).toHaveLength(1);
    expect(SwitchLabelElements[0].props.children).toEqual(labelProps.acessibilityLabel);
  });

  it('Should render a Switch with secondary variant prop', () => {
    const variantProps: SwitchProps = {
      ...props,
      variant: SwitchVariantsEnum.SECONDARY,
    };

    wrapper = create(componentToTest(variantProps));
    root = wrapper.root;

    /* renders with the right variant */
    const SwitchTrackElement = root.findAllByType(SwitchTrack)[0];
    expect(SwitchTrackElement.props.variant).toEqual(variantProps.variant);
  });
});
