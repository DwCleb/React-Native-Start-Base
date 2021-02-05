import LottieView from 'lottie-react-native';

import React from 'react';

import { getSource, AnimationsEnum } from './utils';
import { ViewStyle } from 'react-native';

export interface LottieProps {
  /* Will indicate which json animation to show */
  name: AnimationsEnum;
  /* A boolean flag indicating whether or not the animation should loop */
  loop?: boolean;
  /* Number between 0 and 1. If you update this prop, the animation will correspondingly update to the frame at that progress value.*/
  progress?: number;
  /* Number between 0 and 1. The speed the animation will progress. Sending a negative value will reverse the animation	*/
  speed?: number;
  /* Duration in ms. Takes precedence over speed when set. This only works when source is an actual JS object of an animation. */
  duration?: number;
  /* Should start automatically when mounted.*/
  autoPlay?: boolean;
  /* Animation should size itself automatically according to the width in the animation's JSON*/
  autoSize?: boolean;
  /* Style attributes, aside from border styling */
  style?: ViewStyle[] | ViewStyle;
  /* Resize mode */
  resizeMode?: 'cover' | 'contain' | 'center';
  /* A callback function which will be called when animation is finished. Loop needs to be false. */
  onAnimationFinish?: () => void;
}

// There are a number of methods that can be included in this props on a need basis - play, reset, pause, resume.

export default function LottieAnimation({
  name,
  loop = true,
  progress = 0,
  speed = 1,
  duration = undefined,
  autoPlay = false,
  autoSize = false,
  style = {},
  resizeMode = undefined,
}: LottieProps): JSX.Element {
  return (
    <LottieView
      source={getSource()}
      loop={loop}
      progress={progress}
      speed={speed}
      duration={duration}
      autoPlay={autoPlay}
      autoSize={autoSize}
      style={style}
      resizeMode={resizeMode}
    />
  );
}

export { AnimationsEnum };
