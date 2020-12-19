import React, { useState } from 'react';
import { Modal, Button, Roulette, RouletteButton, Input } from '../../../components';
import * as Styled from './styles';

interface startProps {
  themeMode?: boolean;
}

function StartPage(props: startProps) {
  const [rouletteState, setRouletteState] = useState<boolean>(false);
  const [menu, setMenu] = useState<boolean>(false);
  const [menuUpdate, setMenuUpdate] = useState<boolean>(false);
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

  const onSubmit = () => {
    setMenu(false);
    setMenuUpdate(true);
  };

  return (
    <div>
      <Styled.BodyContainer themeMode={props.themeMode ? true : false}>
        <Styled.InputItem>
          <Styled.InputText themeMode={props.themeMode ? true : false}>
            <div>아직도 점심식사로 고민하세요?</div>
            <div>친구들, 직장동료들과 생각한 메뉴를 룰렛에 넣어보세요.</div>
            <div>밥생각이 딱 정해드릴게요.</div>
          </Styled.InputText>
          <Roulette
            spin={rouletteState}
            menu={menuUpdate ? list : undefined}
            update={props.themeMode}
          />
          <Styled.ButtonBox>
            <RouletteButton onClick={() => setMenu(true)} body="메뉴 넣기" />
            <RouletteButton onClick={() => setRouletteState(true)} body="돌리기" rouletteState />
          </Styled.ButtonBox>
        </Styled.InputItem>
        {menu && (
          <Modal>
            <Styled.ModalTitle>메뉴를 넣어주세요</Styled.ModalTitle>
            <Styled.InputBox>
              <div>
                <Input
                  name="menu1"
                  type="text"
                  placeholder="첫 번째 메뉴"
                  onChange={handleChange}
                  value={list.menu1}
                  maxLength={5}
                />
                <Input
                  name="menu2"
                  type="text"
                  placeholder="두 번째 메뉴"
                  onChange={handleChange}
                  value={list.menu2}
                  maxLength={5}
                />
              </div>
              <div>
                <Input
                  name="menu3"
                  type="text"
                  placeholder="세 번째 메뉴"
                  onChange={handleChange}
                  value={list.menu3}
                  maxLength={5}
                />
                <Input
                  name="menu4"
                  type="text"
                  placeholder="네 번째 메뉴"
                  onChange={handleChange}
                  value={list.menu4}
                  maxLength={5}
                />
              </div>
              <div>
                <Input
                  name="menu5"
                  type="text"
                  placeholder="다섯 번째 메뉴"
                  onChange={handleChange}
                  value={list.menu5}
                  maxLength={5}
                />
                <Input
                  name="menu6"
                  type="text"
                  placeholder="여섯 번째 메뉴"
                  onChange={handleChange}
                  value={list.menu6}
                  maxLength={5}
                />
              </div>
              <div>
                <Input
                  name="menu7"
                  type="text"
                  placeholder="일곱 번째 메뉴"
                  onChange={handleChange}
                  value={list.menu7}
                  maxLength={5}
                />
                <Input
                  name="menu8"
                  type="text"
                  placeholder="여덟 번째 메뉴"
                  onChange={handleChange}
                  value={list.menu8}
                  maxLength={5}
                />
              </div>
            </Styled.InputBox>
            <Styled.BottomDescription>
              * 입력하지 않으면 룰렛에 꽝으로 들어갑니다.
            </Styled.BottomDescription>
            <Styled.BottomBox>
              <Button body="완료" blue onClick={onSubmit} />
              <Button body="닫기" onClick={() => setMenu(false)} />
            </Styled.BottomBox>
          </Modal>
        )}
      </Styled.BodyContainer>
    </div>
  );
}

export default StartPage;
