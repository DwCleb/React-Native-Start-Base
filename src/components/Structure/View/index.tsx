import styled from 'styled-components/native';
import AnimatedView, { Props as AnimatedProps } from './AnimatedView';

export enum ViewEnum {
  CENTER = 'center',
  START = 'flex-start',
  END = 'flex-end',
  SPACE_BETWEEN = 'space-between',
  SPACE_AROUND = 'space-around',
}

interface ViewProps {
  flex?: number;
  justifyContent?: string;
  alignItems?: string;
  alignSelf?: string;
  alignContent?: string;
  color?: string;
  width?: string;
  radius?: number;
  paddingTop?: number;
  paddingBottom?: number;
  paddingLeft?: number;
  paddingRight?: number;
}

export const View = styled.View`
  ${({ flex }: ViewProps): string => (flex ? `flex: ${flex}` : '')};
  ${({ justifyContent }: ViewProps): string => (justifyContent ? `justify-content: ${justifyContent}` : '')};
  ${({ alignItems }: ViewProps): string => (alignItems ? `align-items: ${alignItems}` : '')};
  ${({ alignSelf }: ViewProps): string => (alignSelf ? `align-self: ${alignSelf}` : '')};
  ${({ alignContent }: ViewProps): string => (alignContent ? `align-content: ${alignContent}` : '')};
  ${({ color }: ViewProps): string => (color ? `background-color: ${color}` : '')};
  ${({ radius }: ViewProps): string => (radius ? `border-radius: ${radius}px` : '0px')};
`;

export const VerticalAnimatedView = styled(AnimatedView).attrs(({ duration }: AnimatedProps) => ({
  duration,
}))`
  ${({ width }: ViewProps): string => (width ? `width: ${width}` : '')};
  ${({ flex }: ViewProps): string => (flex ? `flex: ${flex}` : '')};
  ${({ justifyContent }: ViewProps): string => (justifyContent ? `justify-content: ${justifyContent}` : '')};
  ${({ alignItems }: ViewProps): string => (alignItems ? `align-items: ${alignItems}` : '')};
  ${({ alignSelf }: ViewProps): string => (alignSelf ? `align-self: ${alignSelf}` : '')};
  ${({ alignContent }: ViewProps): string => (alignContent ? `align-content: ${alignContent}` : '')};
  ${({ color }: ViewProps): string => (color ? `background-color: ${color}` : '')};
`;

export const ScrollView = styled.ScrollView.attrs((props: ViewProps) => ({
  contentContainerStyle: {
    flexGrow: 1,
    width: '100%',
    justifyContent: props.justifyContent || 'center',
    alignItems: props.alignItems || 'center',
  },
  bounces: false,
  showsVerticalScrollIndicator: false,
  keyboardShouldPersistTaps: 'handled',
}))`
  ${({ flex }: ViewProps): string => (flex ? `flex: ${flex}` : '')};
  ${({ color }: ViewProps): string => (color ? `background-color: ${color}` : '')};
  ${({ paddingTop }: ViewProps): string => (paddingTop ? `padding-top: ${paddingTop}px` : '20px')};
  ${({ paddingBottom }: ViewProps): string => (paddingBottom ? `padding-bottom: ${paddingBottom}px` : '20px')};
  ${({ paddingLeft }: ViewProps): string => (paddingLeft ? `padding-left: ${paddingLeft}px` : '20px')};
  ${({ paddingRight }: ViewProps): string => (paddingRight ? `padding-right: ${paddingRight}px` : '20px')};
`;
