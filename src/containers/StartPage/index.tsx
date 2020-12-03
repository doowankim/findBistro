import React, { useState } from 'react';
import { Modal, Header, Roulette } from '../../components';
import * as Styled from './styles';

function StartPage() {
  const [modalState, setModalState] = useState<boolean>(true);

  return (
    <div>
      <Header />
      <Styled.InputItem>
        <Styled.InputText>
          <div>아직도 점심식사로 고민하세요?</div>
          <div>친구들, 직장동료들과 생각한 메뉴를 룰렛에 넣어보세요.</div>
          <div>밥생각이 딱 정해드릴게요.</div>
        </Styled.InputText>
        <Roulette />
      </Styled.InputItem>
      {modalState && (
        <Modal>
          <Styled.IconWrapper>
            <Styled.IconBox light>
              <Styled.Icon className="fas fa-sun" light />
            </Styled.IconBox>
            <Styled.IconBox>
              <Styled.Icon className="far fa-moon" />
            </Styled.IconBox>
          </Styled.IconWrapper>
          <Styled.IconText>
            <div>라이트 모드</div>
            <div>다크 모드</div>
          </Styled.IconText>
          <Styled.Button onClick={() => setModalState(false)}>닫기</Styled.Button>
        </Modal>
      )}
    </div>
  );
}

export default StartPage;
