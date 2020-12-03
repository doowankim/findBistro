import React from 'react';
import * as Styled from './styles';

function Roulette() {
  return (
    <Styled.RouletteBox>
      <Styled.Arrow />
      <Styled.Circle>
        <Styled.Fill
          fill_1={true}
          fill_2={true}
          fill_3={true}
          fill_4={true}
          fill_5={true}
          fill_6={true}
          fill_7={true}
          fill_8={true}
        >
          <Styled.Content></Styled.Content>
        </Styled.Fill>
      </Styled.Circle>
    </Styled.RouletteBox>
  );
}

export default Roulette;
