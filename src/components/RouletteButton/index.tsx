import React from 'react';
import * as Styled from './styles';

interface buttonProps {
  rouletteState?: boolean;
  onClick: any;
  body: string;
}

function RouletteButton(props: buttonProps) {
  return (
    <>
      <Styled.Button onClick={props.onClick} spin={props.rouletteState ? true : false}>
        {props.body}
      </Styled.Button>
    </>
  );
}

export default RouletteButton;
