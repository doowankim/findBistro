import React from 'react';
import * as Styled from './styles';
import { ThemeSwitch } from '../../components';

interface headerProps {
  backgroundMode?: () => void;
  switchStatus?: boolean;
}

function Header(props: headerProps) {
  return (
    <Styled.Container>
      <Styled.Wrapper>
        <Styled.LogoBox>
          <Styled.Logo>밥생각</Styled.Logo>
          <Styled.LogoDescription>오늘 점심은 뭘 먹지? 🤪</Styled.LogoDescription>
        </Styled.LogoBox>
        <Styled.Menu>
          <ThemeSwitch
            status={props.switchStatus}
            onClick={() => {
              if (props.backgroundMode) props.backgroundMode();
            }}
          />
        </Styled.Menu>
      </Styled.Wrapper>
    </Styled.Container>
  );
}

export default Header;
