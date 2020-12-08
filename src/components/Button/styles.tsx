import styled, { css } from 'styled-components';
import { darken } from 'polished';

interface buttonProps {
  blue?: boolean;
}

export const Button = styled.button<buttonProps>`
  padding: 10px 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background: #f2f2f2;
  color: #495057;
  transition: 0.35s;
  cursor: pointer;

  &:hover {
    transition: 0.35s;
    background: ${darken(0.1, '#f2f2f2')};
  }

  &:focus {
    outline: none;
  }

  ${props => {
    if (props.blue)
      return css`
        background: #5b5bf7;
        color: #fff;

        &:hover {
          transition: 0.35s;
          background: ${darken(0.09, '#5b5bf7')};
        }
      `;
  }}
`;
