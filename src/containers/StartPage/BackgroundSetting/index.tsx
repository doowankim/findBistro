import React from 'react';
import * as Styled from './styles';
import { Modal } from '../../../components';

interface backgroundProps {
  onClickExit?: () => void;
}

function BackgroundSetting(props: backgroundProps) {
  const handleChange = () => {
    if (props.onClickExit) {
      props.onClickExit();
    }
  };
  return (
    <Modal>
      <Styled.ModalTitle>배경 설정</Styled.ModalTitle>
      <Styled.IconWrapper>
        <Styled.IconBox light onClick={handleChange}>
          <Styled.Icon className="fas fa-sun" light />
        </Styled.IconBox>
        <Styled.IconBox onClick={handleChange}>
          <Styled.Icon className="far fa-moon" />
        </Styled.IconBox>
      </Styled.IconWrapper>
      <Styled.IconText>
        <div>라이트 모드</div>
        <div>다크 모드</div>
      </Styled.IconText>
      <Styled.Button onClick={handleChange}>기본 설정으로 시작하기</Styled.Button>
    </Modal>
  );
}

export default BackgroundSetting;
