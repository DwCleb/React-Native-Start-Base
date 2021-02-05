import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder';
import { useTheme } from '~/theme';
import { ViewStyle } from 'react-native';

export const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient);

const defaultShimmerProps = {
  LinearGradient: LinearGradient,
  reverse: false,
  autoRun: true,
  isInteraction: false,
  location: [0.3, 0.5, 0.7],
  duration: 1000,
};

export interface ShimmerProps {
  /* Loading state. */
  isLoading?: boolean;
  /* Wrapped JSX.Elements that will be visible if isLoading = false */
  children?: JSX.Element | JSX.Element[];
  /* Shimmer style */
  style?: ViewStyle;
  /**  A Shimmer is plain when it doesnt wrap a JSX.Element and it's part of
   * a complete page shimmer */
  plain?: boolean;
}

export default function Shimmer({ isLoading, children, style, plain }: ShimmerProps): JSX.Element {
  const { theme } = useTheme();
  return isLoading || plain ? (
    <ShimmerPlaceHolder
      {...defaultShimmerProps}
      visible={plain ? false : !isLoading}
      style={{ ...style, backgroundColor: theme.shimmer.backgroundColor }}
      shimmerColors={[theme.shimmer.primaryColor, theme.shimmer.secondaryColor, theme.shimmer.tertiaryColor]}
    />
  ) : (
    <React.Fragment>{children}</React.Fragment>
  );
}
