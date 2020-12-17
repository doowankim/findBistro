import styled, { css } from 'styled-components';
import * as color from '../../../colors/index';
import { darken, lighten } from 'polished';

interface iconProps {
  light?: boolean;
}

interface backgroundProps {
  themeMode?: boolean;
}

export const ButtonBox = styled.div`
  display: flex;
  width: max-content;
  margin: 40px auto;
`;

export const BodyContainer = styled.div<backgroundProps>`
  height: 100vh;
  background: ${color.Colors.white};
  transition: 0.35s;

  ${props => {
    if (props.themeMode)
      return css`
        background: ${color.Colors.dark};
        transition: 0.35s;
      `;
  }}
`;

export const InputItem = styled.div`
  display: block;
`;

export const InputText = styled.div<backgroundProps>`
  position: relative;
  width: max-content;
  align-items: center;
  padding-top: 50px;
  margin: 0px auto;

  div {
    color: ${color.Colors.primary};
    line-height: 30px;
    transition: 0.35s;

    ${props => {
      if (props.themeMode)
        return css`
          color: ${color.Colors.white};
          transition: 0.35s;
        `;
    }}
  }
`;

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
        background: ${color.Colors.white};
        border: 1px solid ${color.Colors.line};
        transition: 0.35s;

        &:hover {
          background: ${darken(0.05, `${color.Colors.white}`)};
          transition: 0.35s;
        }
      `;
  }}
`;

export const Icon = styled.i<iconProps>`
  color: ${color.Colors.white};
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
  border: 1px solid ${color.Colors.line};
  border-radius: 5px;
  padding: 10px 0;
  cursor: pointer;
  background: ${color.Colors.background};
  transition: 0.35s;

  &:focus {
    outline: none;
  }

  &:hover {
    background: ${darken(0.05, `${color.Colors.background}`)};
    transition: 0.35s;
  }
`;

export const InputBox = styled.div`
  width: 280px;

  div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;

    &:last-child {
      margin-bottom: 10px;
    }
  }
`;

export const BottomBox = styled.div`
  display: flex;
  width: 250px;
  justify-content: space-between;
  margin: 0 auto;
`;

export const BottomDescription = styled.div`
  font-size: 12px;
  font-weight: bold;
  color: #ed2828;
  margin-bottom: 10px;
`;
