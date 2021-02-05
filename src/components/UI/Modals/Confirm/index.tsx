import React from 'react';

import { Container, SubContainer, ModalRod, TopView, ActionView, Content, ActionSubView } from './styles';
import { Typography, TypographyType, Button } from '~/components';

import { useTheme } from '~/theme';

interface ModalProps {
  onCancel: () => void;
  onConfirm: () => void;
  isVisible: boolean;
  title: string;
  message: string;
}

export default function ConfirmModal({ onCancel, onConfirm, isVisible, title, message }: ModalProps): JSX.Element {
  const { theme } = useTheme();

  return (
    <Container
      isVisible={isVisible}
      avoidKeyboard={true}
      swipeDirection="down"
      swipeThreshold={60}
      onBackdropPress={onCancel}
      onSwipeComplete={onCancel}
    >
      <SubContainer>
        <TopView>
          <ModalRod />
        </TopView>
        <Content>
          <Typography type={TypographyType.H3} distance={[0, 0, 10]} align>
            {title}
          </Typography>
          <Typography type={TypographyType.P1} align>
            {message}
          </Typography>
        </Content>
        <ActionView>
          <ActionSubView>
            <Button title="Cancelar" ratio={0.42} color={theme.monochromatic.altGrey} onPress={onCancel} />
          </ActionSubView>
          <ActionSubView>
            <Button title="Ok" ratio={0.42} color={theme.alerts.red} onPress={onConfirm} />
          </ActionSubView>
        </ActionView>
      </SubContainer>
    </Container>
  );
}
