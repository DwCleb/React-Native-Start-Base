import React from 'react';

import { Container, SubContainer, ModalRod, TopView, ActionView, Content } from './styles';
import { Typography, TypographyType, Button } from '~/components';

interface ModalProps {
  onClose: () => void;
  isVisible: boolean;
  title: string;
  message: string;
}

export default function InfoModal({ onClose, isVisible, title, message }: ModalProps): JSX.Element {
  return (
    <Container
      isVisible={isVisible}
      avoidKeyboard={true}
      swipeDirection="down"
      swipeThreshold={60}
      onBackdropPress={onClose}
      onSwipeComplete={onClose}
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
          <Button title="Ok" onPress={onClose} />
        </ActionView>
      </SubContainer>
    </Container>
  );
}
