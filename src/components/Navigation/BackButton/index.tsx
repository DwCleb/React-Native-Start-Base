import React from 'react';

import { useNavigation } from '@react-navigation/native';
import { BackIcon, Button } from './styles';

// interface props of backButton
export interface BackButtonProps {
  action?: () => void;
  color?: string;
  size?: number;
}

export default function BackButton({ color, size, action }: BackButtonProps): JSX.Element {
  const { goBack } = useNavigation();
  return (
    <Button
      onPress={action !== undefined ? action : (): void => goBack()}
      hitSlop={{ top: 20, bottom: 0, left: 20, right: 20 }}
    >
      <BackIcon size={size} color={color} />
    </Button>
  );
}

BackButton.defaultProps = {
  color: '',
  size: 30,
};
