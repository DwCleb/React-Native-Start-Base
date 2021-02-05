import React from 'react';
import { create, ReactTestRenderer } from 'react-test-renderer';
import Shimmer, { ShimmerProps, ShimmerPlaceHolder } from '../index';
import { ThemeProvider } from 'styled-components/native';
import darkTheme from '~/theme/ThemeContext/dark';
import { Text } from 'react-native';

const theme = darkTheme.theme;

let wrapper: ReactTestRenderer;
let root: ReactTestRenderer['root'];

const childrenElement: JSX.Element = <Text />;

const testProps: ShimmerProps = {
  isLoading: true,
  children: childrenElement,
  style: { width: 100 },
};

const componentToTest = (props: ShimmerProps): JSX.Element => (
  <ThemeProvider theme={theme}>
    <Shimmer {...props} />
  </ThemeProvider>
);

describe('Test for component <Shimmer />', () => {
  beforeAll(() => {
    //ReactNative Animated is not properly mocked so we need to use fakeTimers -> https://github.com/facebook/jest/issues/4359
    jest.useFakeTimers();
  });

  beforeEach(() => {
    wrapper = create(componentToTest(testProps));
    root = wrapper.root;
  });

  it('Should renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('Should render correctly its props', () => {
    const ShimmerComponent = root.findAllByType(ShimmerPlaceHolder)[0];
    expect(ShimmerComponent).toBeTruthy();
    expect(ShimmerComponent.props.visible).toEqual(!testProps.isLoading);
    expect(ShimmerComponent.props.style).toEqual({
      backgroundColor: theme.shimmer.backgroundColor,
      ...testProps.style,
    });
  });

  it('Should render its children JSX.Elements when loading=false', () => {
    wrapper = create(componentToTest({ ...testProps, isLoading: false }));
    root = wrapper.root;

    const ChildrenComponent = root.findAllByType(Text);
    const ShimmerComponent = root.findAllByType(ShimmerPlaceHolder);

    expect(ShimmerComponent).toHaveLength(0);
    expect(ChildrenComponent).toBeTruthy();
    expect(ChildrenComponent).toHaveLength(1);
  });

  it('Shimmer should be visible (visible=false) when plain flag is truthy', () => {
    wrapper = create(componentToTest({ plain: true, children: <Text /> }));
    root = wrapper.root;

    const ShimmerComponent = root.findAllByType(ShimmerPlaceHolder)[0];
    const ChildrenComponent = root.findAllByType(Text);

    expect(ShimmerComponent.props.visible).toBeFalsy();
    expect(ChildrenComponent).toHaveLength(0);
  });
});
