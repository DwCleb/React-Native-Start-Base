import React, { Component } from 'react';
import { Animated, StyleSheet, Easing, ViewStyle } from 'react-native';
import { scale } from '~/theme';

type Props = {
  delay: number,
  duration: number,
  style: ViewStyle,
  onAnimationInFinished: Function,
  onAnimationOutFinished: Function,
  disableAnimationIn: boolean,
};

class VerticalSlideAnimation extends Component<Props> {
  state = {
    opacity: new Animated.Value(0),
    positionY: new Animated.Value(scale(32)),
  };

  componentDidMount() {
    this.animateIn();
  }

  resetAnimation = () => {
    this.state.opacity.setValue(0);
    this.state.positionY.setValue(scale(32));
  };

  animateIn = (forceReset: boolean = false) => {
    if (this.props.disableAnimationIn) {
      this.state.opacity.setValue(1);
      this.state.positionY.setValue(0);
      return;
    }

    if (forceReset) {
      this.state.opacity.setValue(0);
      this.state.positionY.setValue(scale(32));
    }

    Animated.parallel([
      Animated.timing(this.state.opacity, {
        toValue: 1,
        duration: this.props.duration,
        delay: this.props.delay,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }),
      Animated.timing(this.state.positionY, {
        toValue: 0,
        duration: this.props.duration,
        delay: this.props.delay,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }),
    ]).start(() => {
      if (typeof this.props.onAnimationInFinished === 'function') {
        this.props.onAnimationInFinished();
      }
    });
  };

  animateOut = () => {
    Animated.parallel([
      Animated.timing(this.state.opacity, {
        toValue: 0,
        duration: this.props.duration,
        delay: 0,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }),
      Animated.timing(this.state.positionY, {
        toValue: -scale(32),
        duration: this.props.duration,
        delay: 0,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }),
    ]).start(() => {
      if (typeof this.props.onAnimationOutFinished === 'function') {
        this.props.onAnimationOutFinished();
      }
    });
  };

  render() {
    const { opacity, positionY } = this.state;

    return (
      <Animated.View
        style={[
          this.props.style,
          Style.container,
          {
            opacity: opacity,
            transform: [{ translateY: positionY }],
          },
        ]}
      >
        {this.props.children}
      </Animated.View>
    );
  }
}

VerticalSlideAnimation.defaultProps = {
  delay: 0,
  duration: 400,
};

const Style = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
  },
});

export default VerticalSlideAnimation;
