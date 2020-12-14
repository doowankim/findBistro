import React from 'react';
import * as Styled from './styles';

interface switchProps {
  status: boolean | number;
  onClick?: any;
}

const ThemeSwitch = (props: switchProps) => {
  return (
    <Styled.SwitchContainer>
      <Styled.SwitchBackground bg={props.status ? true : false} onClick={props.onClick}>
        <Styled.SwitchItem bg={props.status ? true : false} />
      </Styled.SwitchBackground>
    </Styled.SwitchContainer>
  );
};

export default ThemeSwitch;
