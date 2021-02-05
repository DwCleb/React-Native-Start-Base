import * as React from 'react';

import { ButtonProps, MyButton } from './styles';
export { ButtonMode } from './styles';

export default function Button({
  icon,
  mode,
  onPress,
  title,
  loading = false,
  distance,
  ratio,
  disabled,
  color,
}: ButtonProps): JSX.Element {
  return (
    <MyButton
      disabled={disabled}
      icon={icon}
      mode={mode}
      distance={distance}
      onPress={onPress}
      loading={loading}
      ratio={ratio}
      color={color}
    >
      {title}
    </MyButton>
  );
}
