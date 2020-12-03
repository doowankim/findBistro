import React from 'react';
import * as Styled from './styles';

function Roulette() {
  return (
    <Styled.RouletteBox>
      <Styled.Arrow />
      <Styled.Circle>
        <Styled.Fill fill_1>
          <Styled.Content>보쌈</Styled.Content>
        </Styled.Fill>
        <Styled.Fill fill_2>
          <Styled.Content>순대국</Styled.Content>
        </Styled.Fill>
        <Styled.Fill fill_3>
          <Styled.Content>치킨</Styled.Content>
        </Styled.Fill>
        <Styled.Fill fill_4>
          <Styled.Content>햄버거</Styled.Content>
        </Styled.Fill>
        <Styled.Fill fill_5>
          <Styled.Content>피자</Styled.Content>
        </Styled.Fill>
        <Styled.Fill fill_6>
          <Styled.Content>서브웨이</Styled.Content>
        </Styled.Fill>
        <Styled.Fill fill_7>
          <Styled.Content>뼈해장국</Styled.Content>
        </Styled.Fill>
        <Styled.Fill fill_8>
          <Styled.Content>고기</Styled.Content>
        </Styled.Fill>
      </Styled.Circle>
      <Styled.Trigger>
        <Styled.Button>돌리기</Styled.Button>
        <Styled.Button stop>멈추기</Styled.Button>
      </Styled.Trigger>
    </Styled.RouletteBox>
  );
}

export default Roulette;
