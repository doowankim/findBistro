import React from 'react';
import * as Styled from './styles';
import { Modal, Input, Button } from '../../../components';

interface menuProps {
  onChange: any;
  value: string;

  onClickExit?: () => void;
}

function MenuInput(props: menuProps) {
  return (
    <Modal>
      <Styled.ModalTitle>메뉴를 넣어주세요</Styled.ModalTitle>
      <form>
        <Styled.InputBox>
          <div>
            <Input
              name="menu1"
              type="text"
              placeholder="첫 번째 메뉴"
              onChange={props.onChange}
              value={props.value}
              maxLength={5}
            />
            <Input
              name="menu2"
              type="text"
              placeholder="두 번째 메뉴"
              onChange={props.onChange}
              value={props.value}
              maxLength={5}
            />
          </div>
          <div>
            <Input
              name="menu3"
              type="text"
              placeholder="세 번째 메뉴"
              onChange={props.onChange}
              value={props.value}
              maxLength={5}
            />
            <Input
              name="menu4"
              type="text"
              placeholder="네 번째 메뉴"
              onChange={props.onChange}
              value={props.value}
              maxLength={5}
            />
          </div>
          <div>
            <Input
              name="menu5"
              type="text"
              placeholder="다섯 번째 메뉴"
              onChange={props.onChange}
              value={props.value}
              maxLength={5}
            />
            <Input
              name="menu6"
              type="text"
              placeholder="여섯 번째 메뉴"
              onChange={props.onChange}
              value={props.value}
              maxLength={5}
            />
          </div>
          <div>
            <Input
              name="menu7"
              type="text"
              placeholder="일곱 번째 메뉴"
              onChange={props.onChange}
              value={props.value}
              maxLength={5}
            />
            <Input
              name="menu8"
              type="text"
              placeholder="여덟 번째 메뉴"
              onChange={props.onChange}
              value={props.value}
              maxLength={5}
            />
          </div>
        </Styled.InputBox>
        <Styled.BottomBox>
          <Button body="완료" blue />
          <Button
            body="닫기"
            onClick={() => {
              if (props.onClickExit) {
                props.onClickExit();
              }
            }}
          />
        </Styled.BottomBox>
      </form>
    </Modal>
  );
}

export default MenuInput;
