import React from 'react';
/* Dependecies */
const ButtonStyleEnum = {
  Primary: 'Primary',
};

/* Components*/
import {
  MainContainer,
  ContentContainer,
  Title,
  SubTitle,
  ErrorMessageContainer,
  ErrorMessage,
  ButtonsContainer,
  ErrorModal,
  Scroll,
} from './styles';
import Button from '~/components/Buttons/Button';

export interface ErrorActionButtonUI {
  title: string;
  action: () => void | Promise<void>;
  variant?: string;
}

export interface ErrorProps {
  title: string;
  /* Subtitle - Explains error */
  subtitle: string;
  /* Actions Title - Explains which actions can a user do */
  actionTitle: string;
  /* Central Image */
  illustration: JSX.Element;
  /* Bottom buttons */
  actionButtons: ErrorActionButtonUI[];
}

function ErrorComponent({ title, subtitle, actionTitle, actionButtons, illustration }: ErrorProps): JSX.Element {
  return (
    <ErrorModal isVisible={true} coverScreen={false}>
      <MainContainer>
        <Scroll>
          <ContentContainer>
            <Title>{title}</Title>
            <SubTitle>{subtitle}</SubTitle>
            {illustration}
            <ErrorMessageContainer>
              <ErrorMessage>{actionTitle}</ErrorMessage>
            </ErrorMessageContainer>
          </ContentContainer>
          <ButtonsContainer>
            {actionButtons.length > 0 &&
              actionButtons.map((button, index) => {
                return (
                  <Button
                    key={index}
                    title={button.title}
                    onPress={button.action}
                    variant={button.variant || ButtonStyleEnum.Primary}
                  />
                );
              })}
          </ButtonsContainer>
        </Scroll>
      </MainContainer>
    </ErrorModal>
  );
}

export default ErrorComponent;
