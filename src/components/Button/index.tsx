import React from 'react';
import * as Styled from './styles';

interface buttonProps {
  body: string;
  onClick?: any;
  type?: any;

  blue?: boolean;
  noWidth?: boolean;
  style?: object;
}

function Button(props: buttonProps) {
  return (
    <div>
      <Styled.Button
        type={props.type}
        style={{ width: props.noWidth ? `${props.style}` : '120px' }}
        blue={props.blue ? true : false}
        onClick={props.onClick}
      >
        {props.body}
      </Styled.Button>
    </div>
  );
}

export default Button;
