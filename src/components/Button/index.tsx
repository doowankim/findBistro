import React from 'react';
import * as Styled from './styles';

interface buttonProps {
  body: string;
  onClick?: any;

  blue?: boolean;
  noWidth?: boolean;
}

function Button(props: buttonProps) {
  return (
    <div>
      <Styled.Button
        style={{ width: props.noWidth ? '' : '120px' }}
        blue={props.blue ? true : false}
        onClick={props.onClick}
      >
        {props.body}
      </Styled.Button>
    </div>
  );
}

export default Button;
