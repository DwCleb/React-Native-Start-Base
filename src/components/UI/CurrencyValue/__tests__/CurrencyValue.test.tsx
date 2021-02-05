import React from 'react';

import { create, ReactTestRenderer } from 'react-test-renderer';

import { Platform } from 'react-native';

import CurrencyValue, { Props as CurrencyValueProps } from '../';
import { Container, Value, PercentageContainer, LineTroughContainer } from '../styles';

import { ThemeProvider } from 'styled-components/native';
import darkTheme from '~/theme/ThemeContext/dark';
import lightTheme from '~/theme/ThemeContext/light';
import * as themeManager from '../../../../theme/ThemeContext';
import Badge from '../../Badge';

let wrapper: ReactTestRenderer;
let root: ReactTestRenderer['root'];

let theme = darkTheme.theme;

const themeContext = jest.spyOn(themeManager, 'useTheme');

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

const props: CurrencyValueProps = {
  value: 1,
  textTypes: { currency: 'L2', value: 'H3' },
  row: true,
};

const componentToTest = (componentProps: CurrencyValueProps): JSX.Element => (
  <ThemeProvider theme={theme}>
    <CurrencyValue {...componentProps} />
  </ThemeProvider>
);

describe('<CurrencyValue />', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  beforeEach(() => {
    wrapper = create(componentToTest(props));
    root = wrapper.root;
  });

  it('Should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('Should render with the correct structure', () => {
    expect(root.findAllByType(Container)).toHaveLength(1);
    expect(root.findAllByType(Container)[0].props.row).toEqual(props.row);

    const ValueElements = root.findAllByType(Value);
    expect(ValueElements).toHaveLength(3);

    //First ValueElement is a container for the both strings
    expect(typeof ValueElements[0].props.children).toEqual('object');

    expect(ValueElements[1].props.children).toEqual('1');
    expect(ValueElements[2].props.children).toEqual(' SAR');
  });

  it('Should render with a different color', () => {
    theme = lightTheme.theme;
    const newProps = { ...props, color: theme.primary.orange };

    wrapper = create(componentToTest(newProps));
    root = wrapper.root;

    const ValueElements = root.findAllByType(Value);
    expect(ValueElements).toHaveLength(3);

    expect(ValueElements[1].props.color).toEqual(newProps.color);
    expect(ValueElements[2].props.color).toEqual(newProps.color);
  });

  it('Should render with a decimal value', () => {
    theme = lightTheme.theme;
    const newProps = { ...props, value: 30.34 };

    wrapper = create(componentToTest(newProps));
    root = wrapper.root;

    //Sould have 1 more ValueElement, for the decimal field

    const ValueElements = root.findAllByType(Value);
    expect(ValueElements).toHaveLength(4);

    expect(ValueElements[1].props.children).toEqual('30');
    //decimal part of value
    expect(ValueElements[2].props.children).toEqual(' 34');
    expect(ValueElements[3].props.children).toEqual(' SAR');
  });

  it('Should render value with custom font weight', () => {
    const newProps = { ...props, valueWeight: '800' };

    wrapper = create(componentToTest(newProps));
    root = wrapper.root;

    const ValueElements = root.findAllByType(Value);

    expect(ValueElements[1].props.valueWeight).toEqual(newProps.valueWeight);
  });

  it('Should render with padding - 1', () => {
    const newProps = { ...props, value: 30, distance: [10] };

    wrapper = create(componentToTest(newProps));
    root = wrapper.root;

    expect(root.findAllByType(Container)[0].props.distance).toEqual(newProps.distance);
  });

  it('Should render with padding - 2', () => {
    const newProps = { ...props, value: 30, distance: [10, 10] };

    wrapper = create(componentToTest(newProps));
    root = wrapper.root;

    expect(root.findAllByType(Container)[0].props.distance).toEqual(newProps.distance);
  });

  it('Should render with padding - 3', () => {
    const newProps = { ...props, value: 30, distance: [10, 10, 10] };

    wrapper = create(componentToTest(newProps));
    root = wrapper.root;

    expect(root.findAllByType(Container)[0].props.distance).toEqual(newProps.distance);
  });

  it('Should render with padding - 4', () => {
    const newProps = { ...props, value: 30, distance: [10, 10, 10, 10] };

    wrapper = create(componentToTest(newProps));
    root = wrapper.root;

    expect(root.findAllByType(Container)[0].props.distance).toEqual(newProps.distance);
  });

  it('Should render with lineDistance prop - ios', () => {
    const newProps = { ...props, lineDistance: [10, 0, 0, 0] };

    wrapper = create(componentToTest(newProps));
    root = wrapper.root;

    expect(root.findAllByType(Value)[0].props.distance).toEqual(newProps.lineDistance);
  });

  it('Should render with lineDistance prop - android', () => {
    Platform.OS = 'android';

    const newProps = { ...props };

    wrapper = create(componentToTest(newProps));
    root = wrapper.root;

    expect(root.findAllByType(Value)[0].props.distance).toEqual([10, 0, 0, 0]);
  });

  it('Should render with row prop as true and currencySimbolDirection start', () => {
    const newProps = { ...props, value: 30, row: true, color: 'primary', currencySymbolDirection: 'start' };

    wrapper = create(componentToTest(newProps));
    root = wrapper.root;

    const containerElement = root.findAllByType(Container)[0];
    const textElements = root.findAllByType(Value);

    expect(textElements[1].props.children).toEqual('SAR ');
    expect(textElements[2].props.children).toEqual('30');

    expect(containerElement.props.row).toBeTruthy();
  });

  it('Should render with row prop as false and currencySimbolDirection start', () => {
    const newProps = { ...props, value: 30, row: false, color: 'primary', currencySymbolDirection: 'start' };

    wrapper = create(componentToTest(newProps));
    root = wrapper.root;

    const containerElement = root.findAllByType(Container)[0];
    const textElements = root.findAllByType(Value);

    expect(textElements[0].props.children).toEqual('SAR');
    expect(textElements[1].props.children).toEqual('30');

    expect(containerElement.props.row).toBeFalsy();
  });

  it('Should render with row prop as false and currencySimbolDirection end', () => {
    const newProps = { ...props, value: 30, row: false, color: 'primary', currencySymbolDirection: 'end' };

    wrapper = create(componentToTest(newProps));
    root = wrapper.root;

    const containerElement = root.findAllByType(Container)[0];
    const textElements = root.findAllByType(Value);

    expect(textElements[0].props.children).toEqual('30');
    expect(textElements[1].props.children).toEqual('SAR');

    expect(containerElement.props.row).toBeFalsy();
  });

  it('Should render currency value with discount', () => {
    const newProps = { ...props, value: 30, row: true, discountPercentage: 50 };

    wrapper = create(componentToTest(newProps));
    root = wrapper.root;

    expect(root.findAllByType(PercentageContainer)).toHaveLength(1);
    expect(root.findAllByType(LineTroughContainer)).toHaveLength(1);

    const BadgeElement = root.findAllByType(Badge)[0];
    const textElements = root.findAllByType(Value);

    expect(textElements[0].props.children).toEqual('30');
    expect(textElements[1].props.children).toEqual(' SAR');

    expect(BadgeElement.props.info).toBe(`-${newProps.discountPercentage}%`);
  });
});
