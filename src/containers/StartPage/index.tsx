import React, { useState } from 'react';
import { Modal, Header, Roulette } from '../../components';
import * as Styled from './styles';

function StartPage() {
  const [modalState, setModalState] = useState<boolean>(true);
  const [rouletteState, setRouletteState] = useState<boolean>(false);
  const [menu, setMenu] = useState<boolean>(false);
  const [list, setList] = useState<any>({
    menu1: '',
    menu2: '',
    menu3: '',
    menu4: '',
    menu5: '',
    menu6: '',
    menu7: '',
    menu8: '',
  });

  const handleChange = (e: any) => {
    setList({ ...list, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <Header />
      <Styled.InputItem>
        <Styled.InputText>
          <div>아직도 점심식사로 고민하세요?</div>
          <div>친구들, 직장동료들과 생각한 메뉴를 룰렛에 넣어보세요.</div>
          <div>밥생각이 딱 정해드릴게요.</div>
        </Styled.InputText>
        <Roulette spin={rouletteState} />
        <Styled.ButtonBox>
          <Styled.RouletteButton onClick={() => setMenu(true)}>메뉴 넣기</Styled.RouletteButton>
          <Styled.RouletteButton spin onClick={() => setRouletteState(true)}>
            돌리기
          </Styled.RouletteButton>
        </Styled.ButtonBox>
      </Styled.InputItem>
      {modalState && (
        <Modal>
          <Styled.ModalTitle>배경 설정</Styled.ModalTitle>
          <Styled.IconWrapper>
            <Styled.IconBox light onClick={() => setModalState(false)}>
              <Styled.Icon className="fas fa-sun" light />
            </Styled.IconBox>
            <Styled.IconBox onClick={() => setModalState(false)}>
              <Styled.Icon className="far fa-moon" />
            </Styled.IconBox>
          </Styled.IconWrapper>
          <Styled.IconText>
            <div>라이트 모드</div>
            <div>다크 모드</div>
          </Styled.IconText>
          <Styled.Button onClick={() => setModalState(false)}>기본 설정으로 시작하기</Styled.Button>
        </Modal>
      )}
      {menu && (
        <Modal>
          <div>메뉴를 넣어주세요</div>
          <form>
            <Styled.InputBox>
              <input
                name="menu1"
                type="text"
                placeholder="첫 번째 메뉴"
                onChange={handleChange}
                value={list.menu1}
              />
              <input
                name="menu2"
                type="text"
                placeholder="두 번째 메뉴"
                onChange={handleChange}
                value={list.menu2}
              />
              <input
                name="menu3"
                type="text"
                placeholder="세 번째 메뉴"
                onChange={handleChange}
                value={list.menu3}
              />
              <input
                name="menu4"
                type="text"
                placeholder="네 번째 메뉴"
                onChange={handleChange}
                value={list.menu4}
              />
              <input
                name="menu5"
                type="text"
                placeholder="다섯 번째 메뉴"
                onChange={handleChange}
                value={list.menu5}
              />
              <input
                name="menu6"
                type="text"
                placeholder="여섯 번째 메뉴"
                onChange={handleChange}
                value={list.menu6}
              />
              <input
                name="menu7"
                type="text"
                placeholder="일곱 번째 메뉴"
                onChange={handleChange}
                value={list.menu7}
              />
              <input
                name="menu8"
                type="text"
                placeholder="여덟 번째 메뉴"
                onChange={handleChange}
                value={list.menu8}
              />
            </Styled.InputBox>
            <Styled.BottomBox>
              <div>
                <Styled.BottomButton>선택 완료</Styled.BottomButton>
                <Styled.BottomButton onClick={() => setMenu(false)}>닫기</Styled.BottomButton>
              </div>
            </Styled.BottomBox>
          </form>
        </Modal>
      )}
    </div>
  );
}

export default StartPage;
