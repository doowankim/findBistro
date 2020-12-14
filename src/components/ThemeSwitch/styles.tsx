import styled, { css } from 'styled-components';

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
  background: #ced4da;
  width: 60px;
  height: 36px;
  border-radius: 50px;
  box-shadow: inset 0 3px 10px rgba(0, 0, 0, 0.08);
  transition: 0.35s;
  cursor: pointer;

  ${props => {
    if (props.bg)
      return css`
        background: #12b886;
        transition: 0.35s;
      `;
  }}
`;

export const SwitchItem = styled.div<backgroundProps>`
  position: relative;
  left: 6px;
  top: 6px;
  width: 24px;
  height: 24px;
  border-radius: 32px;
  background: white;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.16);
  transition: 0.35s;

  ${props => {
    if (props.bg)
      return css`
        left: 30px;
      `;
  }}
`;
