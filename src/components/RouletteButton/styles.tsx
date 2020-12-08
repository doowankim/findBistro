import styled, { css } from 'styled-components';
import { darken } from 'polished';

interface buttonProps {
  spin?: boolean;
}

export const Button = styled.button<buttonProps>`
  width: 160px;
  text-align: center;
  font-size: 30px;
  border-radius: 15px;
  padding: 10px 20px;
  border: 3px solid black;
  transition: 0.35s;
  cursor: pointer;

  &:hover {
    background: ${darken(0.1, '#f2f2f2')};
    transition: 0.35s;
  }

  &:focus {
    outline: none;
  }

  ${props => {
    if (props.spin)
      return css`
        margin-left: 20px;
      `;
  }}
`;
