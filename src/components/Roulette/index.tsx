import React from 'react';
import * as Styled from './styles';

interface rouletteProps {
  spin?: boolean;
  menu?: any;
}

function Roulette(props: rouletteProps) {
  let menu1 = props.menu?.menu1;
  let menu2 = props.menu?.menu2;
  let menu3 = props.menu?.menu3;
  let menu4 = props.menu?.menu4;
  let menu5 = props.menu?.menu5;
  let menu6 = props.menu?.menu6;
  let menu7 = props.menu?.menu7;
  let menu8 = props.menu?.menu8;

  console.log(props.menu?.menu1 === null ? true : false);
  return (
    <Styled.RouletteBox>
      <Styled.Arrow />
      <Styled.Circle spinner={props.spin ? true : false}>
        <Styled.Fill fill_1>
          <Styled.Content>{menu1 ? (menu1 === null ? '꽝' : menu1) : ''}</Styled.Content>
        </Styled.Fill>
        <Styled.Fill fill_2>
          <Styled.Content>{menu2 ? (menu2 === null ? '꽝' : menu2) : ''}</Styled.Content>
        </Styled.Fill>
        <Styled.Fill fill_3>
          <Styled.Content>{menu3 ? (menu3 === null ? '꽝' : menu3) : ''}</Styled.Content>
        </Styled.Fill>
        <Styled.Fill fill_4>
          <Styled.Content>{menu4 ? (menu4 === null ? '꽝' : menu4) : ''}</Styled.Content>
        </Styled.Fill>
        <Styled.Fill fill_5>
          <Styled.Content>{menu5 ? (menu5 === null ? '꽝' : menu5) : ''}</Styled.Content>
        </Styled.Fill>
        <Styled.Fill fill_6>
          <Styled.Content>{menu6 ? (menu6 === null ? '꽝' : menu6) : ''}</Styled.Content>
        </Styled.Fill>
        <Styled.Fill fill_7>
          <Styled.Content>{menu7 ? (menu7 === null ? '꽝' : menu7) : ''}</Styled.Content>
        </Styled.Fill>
        <Styled.Fill fill_8>
          <Styled.Content>{menu8 ? (menu8 === null ? '꽝' : menu8) : ''}</Styled.Content>
        </Styled.Fill>
      </Styled.Circle>
    </Styled.RouletteBox>
  );
}

export default Roulette;
