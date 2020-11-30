import React from 'react';
import * as Styled from './styles';

interface ModalProps {
  body?: JSX.Element | undefined;
  children?: any;
}

const Modal = (props: ModalProps) => {
  return (
    <div>
      <Styled.BackgroundView />
      <Styled.Container>
        <Styled.Wrapper>
          {props.body}
          {props.children}
        </Styled.Wrapper>
      </Styled.Container>
    </div>
  );
};

export default Modal;
