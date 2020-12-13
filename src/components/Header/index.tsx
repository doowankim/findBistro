import React from 'react';
import * as Styled from './styles';
import { Button } from '../../components';

interface headerProps {
  backgroundMode?: () => void;
}

function Header(props: headerProps) {
  return (
    <Styled.Container>
      <Styled.Wrapper>
        <Styled.LogoBox>
          <Styled.Logo>밥생각</Styled.Logo>
          <Styled.LogoDescription>오늘 점심은 뭘 먹지? 🤪</Styled.LogoDescription>
        </Styled.LogoBox>
        <div>
          <Styled.Menu>
            <Button
              noWidth
              body="DARK / LIGHT"
              onClick={() => {
                if (props.backgroundMode) {
                  props.backgroundMode();
                }
              }}
            />
          </Styled.Menu>
        </div>
      </Styled.Wrapper>
    </Styled.Container>
  );
}

export default Header;
