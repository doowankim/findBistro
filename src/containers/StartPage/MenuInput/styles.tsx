import styled from 'styled-components';

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
      margin-bottom: 20px;
    }
  }
`;

export const BottomBox = styled.div`
  display: flex;
  width: 250px;
  justify-content: space-between;
  margin: 0 auto;
`;
