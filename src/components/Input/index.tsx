import React from 'react';
import * as Styled from './styles';

interface inputProps {
  name?: string;
  type: string;
  placeholder?: string;
  onChange: any;
  value: any;
  maxLength?: number;
}

function Input(props: inputProps) {
  return (
    <>
      <Styled.Input
        name={props.name}
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.onChange}
        value={props.value}
        maxLength={props.maxLength}
      />
    </>
  );
}

export default Input;
