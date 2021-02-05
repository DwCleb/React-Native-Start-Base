import React from 'react';

import HTML from 'react-native-render-html';
import Typography, { TypographyType } from '~/components/UI/Typography';
import { ViewStyle, TextStyle } from 'react-native';
import { ListPrefix } from './styles';

export interface HTMLParserProps {
  html: string;
  ignoredTags?: string[];
  ignoredStyles?: string[];
  tagsStyles?: { [key: string]: ViewStyle | TextStyle };
  customRenderers?: {
    [key: string]: (
      htmlAttribs: HTML.HtmlAttributesDictionary,
      children: React.ReactNode,
      convertedCSSStyles: ViewStyle,
      passProps: HTML.PassProps
    ) => JSX.Element;
  };
  containerStyle?: ViewStyle;
}

export const renderTypographyByType = (type: TypographyType, children: React.ReactNode, key: string): JSX.Element => {
  return (
    <Typography key={key} align="left" type={type}>
      {children}
    </Typography>
  );
};

const baseFont = { fontFamily: 'Roboto-Regular' };
const boldFont = { fontFamily: 'Roboto-Bold' };

const HTMLParser = ({
  html,
  ignoredTags,
  ignoredStyles,
  tagsStyles,
  containerStyle,
  customRenderers,
}: HTMLParserProps): JSX.Element => {
  if (html) {
    // If HTML is not existent, it will return undefined and a warning.
    return (
      <HTML
        html={html}
        baseFontStyle={baseFont}
        ignoredTags={ignoredTags}
        ignoredStyles={ignoredStyles}
        tagsStyles={{
          b: boldFont,
          ...tagsStyles,
        }}
        containerStyle={containerStyle}
        //UL, OL, LI  - can be handled
        listsPrefixesRenderers={{ ol: (): JSX.Element => <ListPrefix />, ul: (): JSX.Element => <ListPrefix /> }}
        renderers={{
          //TODO: Should do this for at least all the TypographyType text types
          li: (_htmlAttribs, children, _convertedCSSStyles, passProps): JSX.Element =>
            renderTypographyByType(TypographyType.P2, children, passProps.key),
          p: (_htmlAttribs, children, _convertedCSSStyles, passProps): JSX.Element =>
            renderTypographyByType(TypographyType.P2, children, passProps.key),
          em: (_htmlAttribs, children, _convertedCSSStyles, passProps): JSX.Element =>
            renderTypographyByType(TypographyType.H1, children, passProps.key),
          h4: (_htmlAttribs, children, _convertedCSSStyles, passProps): JSX.Element =>
            renderTypographyByType(TypographyType.H4, children, passProps.key),
          ...customRenderers,
        }}
      />
    );
  }
  return <React.Fragment />;
};

export default HTMLParser;
