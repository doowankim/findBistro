import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  width: 100%;
  height: 100px;
  background: #5b5bf7;
  color: #fff;
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
`;
