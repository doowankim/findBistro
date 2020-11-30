import React, { useState } from 'react';
import * as Styled from './styles';

function Header() {
  const [click, setClick] = useState<boolean>(false);
  return (
    <Styled.Container>
      <Styled.Wrapper>
        <Styled.LogoBox>
          <Styled.Logo>밥생각</Styled.Logo>
          <Styled.LogoDescription>오늘 점심은 뭘 먹지? 🤪</Styled.LogoDescription>
        </Styled.LogoBox>
        <div>
          {window.screen.width > 400 ? (
            <Styled.Menu>
              <Styled.MenuItem>메뉴</Styled.MenuItem>
              <Styled.MenuItem>메뉴</Styled.MenuItem>
              <Styled.MenuItem>메뉴</Styled.MenuItem>
              <Styled.MenuItem>메뉴</Styled.MenuItem>
            </Styled.Menu>
          ) : (
            <>
              {click ? (
                <Styled.MenuList>
                  <div onClick={() => setClick(false)}>숨기기</div>
                </Styled.MenuList>
              ) : (
                <Styled.MenuIcon className="fas fa-bars" onClick={() => setClick(true)} />
              )}
            </>
          )}
        </div>
      </Styled.Wrapper>
    </Styled.Container>
  );
}

export default Header;
