import React from 'react';
import { Animated, Easing, ViewStyle } from 'react-native';
import { scale } from '~/theme';

export interface Props {
  delay: number;
  duration: number;
  style: ViewStyle;
  onAnimationInFinished: Function;
  onAnimationOutFinished: Function;
  disableAnimationIn: boolean;
  children: JSX.Element | JSX.Element[];
}

export default function VerticalAnimation({
  delay,
  duration,
  style,
  onAnimationInFinished,
  onAnimationOutFinished,
  disableAnimationIn,
  children,
}: Props): JSX.Element {
  const [opacity] = React.useState(new Animated.Value(0));
  const [positionY] = React.useState(new Animated.Value(scale(32)));

  // function resetAnimation(): void {
  //   opacity.setValue(0);
  //   positionY.setValue(scale(32));
  // }

  const animateIn = React.useCallback(
    async (forceReset = false): Promise<void> => {
      if (disableAnimationIn) {
        opacity.setValue(1);
        positionY.setValue(0);
        return;
      }

      if (forceReset) {
        opacity.setValue(0);
        positionY.setValue(scale(32));
      }

      Animated.parallel([
        Animated.timing(opacity, {
          toValue: 1,
          duration: duration,
          delay: delay,
          easing: Easing.out(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(positionY, {
          toValue: 0,
          duration: duration,
          delay: delay,
          easing: Easing.out(Easing.ease),
          useNativeDriver: true,
        }),
      ]).start(() => {
        if (typeof onAnimationInFinished === 'function') {
          onAnimationInFinished();
        }
      });
    },
    [delay, disableAnimationIn, duration, onAnimationInFinished, opacity, positionY]
  );

  const animateOut = React.useCallback(async (): Promise<void> => {
    Animated.parallel([
      Animated.timing(opacity, {
        toValue: 0,
        duration: duration,
        delay: 0,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }),
      Animated.timing(positionY, {
        toValue: -scale(32),
        duration: duration,
        delay: 0,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }),
    ]).start(() => {
      if (typeof onAnimationOutFinished === 'function') {
        onAnimationOutFinished();
      }
    });
  }, [duration, onAnimationOutFinished, opacity, positionY]);

  React.useEffect((): void => {
    // const unmount = animateOut();

    animateIn();

    // return () => unmount;
  }, [animateIn, animateOut]);

  return (
    <Animated.View
      style={[
        style,
        {
          opacity: opacity,
          transform: [{ translateY: positionY }],
        },
      ]}
    >
      {children}
    </Animated.View>
  );
}
