import styled, { css } from 'styled-components';
import * as color from '../../colors/index';
import { lighten } from 'polished';

interface backgroundProps {
  bg?: boolean;
}

export const SwitchContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 12px 0;
  height: 40px;
  width: 100%;
`;

export const SwitchBackground = styled.div<backgroundProps>`
  background: ${color.Colors.white};
  width: 60px;
  height: 36px;
  border: 3px solid ${lighten(0.1, `${color.Colors.blue}`)};
  border-radius: 50px;
  box-shadow: inset 0 3px 10px rgba(0, 0, 0, 0.08);
  transition: 0.25s;
  cursor: pointer;

  ${props => {
    if (props.bg)
      return css`
        background: #424040;
        transition: 0.25s;
      `;
  }}
`;

export const SwitchItem = styled.div<backgroundProps>`
  position: relative;
  left: 3px;
  top: 3px;
  width: 30px;
  height: 30px;
  border-radius: 32px;
  background: ${color.Colors.primary};
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.16);
  transition: 0.25s;

  ${props => {
    if (props.bg)
      return css`
        background: ${color.Colors.line};
        left: 27px;
      `;
  }}
`;

export const Icon = styled.i<backgroundProps>`
  font-size: 22px;
  line-height: 30px;
  margin-left: 2px;
  color: ${color.Colors.yellow};
`;
