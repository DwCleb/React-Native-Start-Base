import React from 'react';
import { TouchableHighlight } from 'react-native';

import { SwitchTrack, SwitchThumb, SwitchLabel, SwitchContainer } from './styles';

export enum SwitchVariantsEnum {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

export interface SwitchProps {
  /**  value that controls the switch */
  value: boolean;
  /**  function to change the value of the switch */
  onChange: (isEnabled: boolean) => void;
  /** label that can be displayed alongside the switch */
  acessibilityLabel?: string;
  /** color variants for the switch  */
  variant?: SwitchVariantsEnum;
  /** switch on press can be disabled */
  disabled?: boolean;
}

const Switch = ({
  value,
  onChange,
  acessibilityLabel,
  variant = SwitchVariantsEnum.PRIMARY,
  disabled,
}: SwitchProps): JSX.Element => {
  const handleChange = (newValue: boolean): void => {
    onChange(newValue);
  };

  return (
    <SwitchContainer>
      <TouchableHighlight onPress={(): void => handleChange(!value)} disabled={disabled}>
        <SwitchTrack isEnabled={value} variant={variant}>
          <SwitchThumb isEnabled={value} variant={variant} />
        </SwitchTrack>
      </TouchableHighlight>
      {acessibilityLabel && <SwitchLabel>{acessibilityLabel}</SwitchLabel>}
    </SwitchContainer>
  );
};

export default Switch;
