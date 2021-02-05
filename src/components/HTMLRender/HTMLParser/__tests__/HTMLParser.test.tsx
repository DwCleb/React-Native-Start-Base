import React from 'react';

import { ThemeProvider } from 'styled-components/native';

import lightTheme from '~/theme/ThemeContext/light';
import { ReactTestRenderer, create } from 'react-test-renderer';

import HTMLParser, { HTMLParserProps, renderTypographyByType } from '../';

import HTML from 'react-native-render-html';
import { ListPrefix } from '../styles';
import { TypographyType } from '~/components/UI/Typography';

let wrapper: ReactTestRenderer;
let root: ReactTestRenderer['root'];

const theme = lightTheme.theme;

const props: HTMLParserProps = {
  html: '<p>1GB, 1000MIN &<p>5,000SMS of <b>Roaming</b>, 5,000SMS of Roaming 5</p>',
};

const componentToTest = (componentProps: HTMLParserProps): JSX.Element => (
  <ThemeProvider theme={theme}>
    <HTMLParser {...componentProps} />
  </ThemeProvider>
);

describe('test render for mandatory props - HTMLParser', () => {
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

  it('Should render the correct structure', () => {
    expect(root.findAllByType(HTML)).toHaveLength(1);
    const HTMLComponentElement = root.findAllByType(HTML)[0];

    expect(HTMLComponentElement.props.html).toEqual(props.html);

    //list prefixes
    expect(HTMLComponentElement.props.listsPrefixesRenderers.ol()).toEqual(<ListPrefix />);

    //tag renderers
    expect(HTMLComponentElement.props.renderers.li(undefined, 'title', undefined, { key: 'test 1' })).toEqual(
      renderTypographyByType(TypographyType.P2, 'title', 'test 1')
    );

    expect(HTMLComponentElement.props.renderers.p(undefined, 'title', undefined, { key: 'test 2' })).toEqual(
      renderTypographyByType(TypographyType.P2, 'title', 'test 2')
    );

    expect(HTMLComponentElement.props.renderers.em(undefined, 'title', undefined, { key: 'test 3' })).toEqual(
      renderTypographyByType(TypographyType.H1, 'title', 'test 3')
    );

    expect(HTMLComponentElement.props.renderers.h4(undefined, 'title', undefined, { key: 'test 4' })).toEqual(
      renderTypographyByType(TypographyType.H4, 'title', 'test 4')
    );
  });

  it('Should render with optional props', () => {
    const newProps: HTMLParserProps = {
      ...props,
      ignoredTags: ['b'],
      ignoredStyles: ['color'],
      customRenderers: {
        p: (_htmlAttribs, children, _convertedCSSStyles, passProps): JSX.Element =>
          renderTypographyByType(TypographyType.L2, children, passProps.key),
      },
    };

    wrapper = create(componentToTest(newProps));
    root = wrapper.root;

    const HTMLComponentElement = root.findAllByType(HTML)[0];

    expect(HTMLComponentElement.props.ignoredTags).toEqual(newProps.ignoredTags);

    expect(HTMLComponentElement.props.ignoredStyles).toEqual(newProps.ignoredStyles);

    expect(HTMLComponentElement.props.renderers.p(undefined, 'title', undefined, { key: 'test' })).toEqual(
      //By default it would render as P2, but we override P render function with L2 typography
      renderTypographyByType(TypographyType.L2, 'title', 'test')
    );
  });

  it('Shouldnt render HTML component when html props is empty', () => {
    const newProps: HTMLParserProps = {
      ...props,
      html: '',
    };

    wrapper = create(componentToTest(newProps));
    root = wrapper.root;

    const HTMLComponentElement = root.findAllByType(HTML)[0];

    expect(HTMLComponentElement).toBeFalsy();
  });
});
