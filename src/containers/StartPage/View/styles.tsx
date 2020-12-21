import styled, { css } from 'styled-components';
import * as color from '../../../colors/index';
import { darken } from 'polished';

interface backgroundProps {
  themeMode?: boolean;
}

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

export const ButtonBox = styled.div`
  display: flex;
  width: max-content;
  margin: 40px auto;
`;

export const BottomText = styled.div`
  width: max-content;
  color: ${color.Colors.primary};
  margin: 0px auto;
  padding: 5px 10px;
  border: 1px solid ${color.Colors.line};
  border-radius: 5px;
  transition: 0.35s;
  cursor: pointer;

  &:hover {
    background: ${darken(0.1, `${color.Colors.white}`)};
    transition: 0.35s;
  }
`;

export const ModalTitle = styled.div`
  text-align: center;
  margin-bottom: 20px;
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
