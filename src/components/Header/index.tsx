import React from 'react';
import * as Styled from './styles';

function Header() {
  return (
    <Styled.Container>
      <Styled.Wrapper>
        <Styled.LogoBox>
          <Styled.Logo>밥생각</Styled.Logo>
          <Styled.LogoDescription>오늘 점심은 뭘 먹지? 🤪</Styled.LogoDescription>
        </Styled.LogoBox>
        <div>
          <Styled.Menu>
            <Styled.MenuMode>DARK / LIGHT</Styled.MenuMode>
          </Styled.Menu>
        </div>
      </Styled.Wrapper>
    </Styled.Container>
  );
}

export default Header;
