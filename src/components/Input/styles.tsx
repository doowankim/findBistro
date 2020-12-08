import styled from 'styled-components';

export const Input = styled.input`
  width: 110px;
  height: 30px;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding-left: 10px;
  transition: 0.35s;

  &:focus {
    border: 1px solid #5b5bf7;
    transition: 0.25s;
  }
`;
