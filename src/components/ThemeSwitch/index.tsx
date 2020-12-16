import React from 'react';
import * as Styled from './styles';

interface switchProps {
  status: boolean | any;
  onClick?: any;
}

const ThemeSwitch = (props: switchProps) => {
  return (
    <Styled.SwitchContainer>
      <Styled.SwitchBackground bg={props.status ? true : false} onClick={props.onClick}>
        <Styled.SwitchItem bg={props.status ? true : false}>
          {props.status ? (
            <Styled.MoonIcon className="fas fa-moon" />
          ) : (
            <Styled.SunIcon className="fas fa-sun" />
          )}
        </Styled.SwitchItem>
      </Styled.SwitchBackground>
    </Styled.SwitchContainer>
  );
};

export default ThemeSwitch;
