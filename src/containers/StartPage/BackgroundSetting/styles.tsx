import styled, { css } from 'styled-components';
import { darken, lighten } from 'polished';

interface iconProps {
  light?: boolean;
}

export const ModalTitle = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

export const IconWrapper = styled.div`
  display: flex;
`;

export const IconBox = styled.div<iconProps>`
  width: 50px;
  height: 50px;
  border-radius: 5px;
  background: black;
  text-align: center;
  margin: 0 20px;
  box-shadow: initial;
  transition: 0.35s;
  cursor: pointer;

  &:hover {
    background: ${lighten(0.05, 'black')};
    transition: 0.35s;
  }

  ${props => {
    if (props.light)
      return css`
        background: #fff;
        border: 1px solid #ddd;
        transition: 0.35s;

        &:hover {
          background: ${darken(0.05, '#fff')};
          transition: 0.35s;
        }
      `;
  }}
`;

export const Icon = styled.i<iconProps>`
  color: #fff;
  line-height: 50px;

  ${props => {
    if (props.light)
      return css`
        color: black;
      `;
  }}
`;

export const IconText = styled.div`
  display: flex;
  width: 148px;
  font-size: 14px;
  font-weight: bold;
  justify-content: space-between;
  margin: 10px 15px 30px 15px;
`;

export const Button = styled.button`
  width: 180px;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px 0;
  cursor: pointer;
  background: #f2f2f2;
  transition: 0.35s;

  &:focus {
    outline: none;
  }

  &:hover {
    background: ${darken(0.05, '#f2f2f2')};
    transition: 0.35s;
  }
`;
