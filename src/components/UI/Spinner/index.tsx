import React from 'react';
import { OverlayContainer, LottieStyledComponent } from './styles';

export default function Spinner({ fullscreen = true }): JSX.Element {
  return (
    <OverlayContainer fullscreen={fullscreen}>
      <LottieStyledComponent
        source={require('./loading_animation.json')}
        autoSize={true}
        autoPlay={true}
        loop={true}
        speed={1.8}
      />
    </OverlayContainer>
  );
}
