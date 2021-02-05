import React from 'react';

import { ButtonContainer, BackIcon } from './styles';

export enum HeaderButtonEnum {
  Back = 'back',
  Close = 'close',
}

export interface HeaderButtonProps {
  action: () => void;
  type: HeaderButtonEnum;
}

export default function HeaderButton(props: HeaderButtonProps): JSX.Element {
  return (
    <ButtonContainer onPress={props.action} type={props.type}>
      <BackIcon type={props.type} />
    </ButtonContainer>
  );
}
