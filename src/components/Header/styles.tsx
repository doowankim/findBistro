import styled from 'styled-components';
import * as color from '../../colors/index';
import { darken } from 'polished';

export const Container = styled.div`
  width: 100%;
  height: 100px;
  background: ${color.Colors.blue};
  color: ${color.Colors.white};
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 25px 20px;
`;

export const LogoBox = styled.div``;

export const Logo = styled.div`
  font-size: 26px;
  font-weight: bold;
`;

export const LogoDescription = styled.div``;

export const Menu = styled.div`
  display: flex;
`;

export const MenuMode = styled.button`
  padding: 10px 20px;
  border: 1px solid ${color.Colors.line};
  border-radius: 5px;
  background: ${color.Colors.background};
  color: ${color.Colors.primary};
  transition: 0.35s;
  cursor: pointer;

  &:hover {
    transition: 0.35s;
    background: ${darken(0.1, `${color.Colors.background}`)};
  }

  &:focus {
    outline: none;
  }
`;
