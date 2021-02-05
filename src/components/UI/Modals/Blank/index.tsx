import React from 'react';

import { Container, SubContainer, ModalRod, TopView, ActionView, Content } from './styles';

interface ModalProps {
  onClose: () => void;
  isVisible: boolean;
  content: JSX.Element | JSX.Element[];
  actions: JSX.Element | JSX.Element[];
}

export default function BlankModal({ onClose, isVisible, content, actions }: ModalProps): JSX.Element {
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
          {/* some content props here */}
          {content}
        </Content>
        <ActionView>
          {actions}
          {/* some button props here */}
        </ActionView>
      </SubContainer>
    </Container>
  );
}
