import styled from 'styled-components/native';
import AnimatedView from './AnimatedView';

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

export const VerticalAnimatedView = styled(AnimatedView).attrs(({ duration }) => ({
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
