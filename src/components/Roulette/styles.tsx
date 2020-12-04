import styled, { keyframes, css } from 'styled-components';

interface fillProps {
  fill_1?: boolean;
  fill_2?: boolean;
  fill_3?: boolean;
  fill_4?: boolean;
  fill_5?: boolean;
  fill_6?: boolean;
  fill_7?: boolean;
  fill_8?: boolean;
  out?: boolean;
}

interface buttonProps {
  stop?: boolean;
}

interface loopProps {
  spinner?: boolean;
}

const rotation = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(7045deg);
    }
`;

export const RouletteBox = styled.div``;

export const Arrow = styled.div`
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-top: 20px solid #000;
  margin: 30px auto 0 auto;
`;

export const Circle = styled.div<loopProps>`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: white;
  border: 3px solid black;
  position: relative;
  margin: 10px auto;

  ${props => {
    if (props.spinner)
      return css`
        animation: ${rotation} 7s ease-in-out forwards;
      `;
  }}
`;

export const Fill = styled.div<fillProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  -webkit-clip-path: polygon(0% 0%, 50% 50%, 0% 50%, 0% 0%);
  clip-path: polygon(0% 0%, 50% 50%, 0% 50%, 0% 0%);

  ${props => {
    if (props.fill_1)
      return css`
        background: lightcoral;
      `;
    if (props.fill_2)
      return css`
        transform: rotate(45deg);
        background: green;
      `;
    if (props.fill_3)
      return css`
        transform: rotate(90deg);
        background: lightgreen;
      `;
    if (props.fill_4)
      return css`
        transform: rotate(135deg);
        background: lightseagreen;
      `;
    if (props.fill_5)
      return css`
        transform: rotate(180deg);
        background: #2885cc;
      `;
    if (props.fill_6)
      return css`
        transform: rotate(225deg);
        background: lightsalmon;
      `;
    if (props.fill_7)
      return css`
        transform: rotate(270deg);
        background: lightpink;
      `;
    if (props.fill_8)
      return css`
        transform: rotate(315deg);
        background: #cb7cd6;
      `;
    if (props.out)
      return css`
        background: #dddddd;
      `;
  }}
`;

export const Content = styled.div`
  font-size: 20px;
  font-weight: bold;
  width: 260px;
  height: 260px;
  position: absolute;
  top: 20px;
  left: 20px;
  text-align: center;
  transform: rotate(-67deg);
`;

export const Trigger = styled.div`
  display: flex;
  width: max-content;
  margin: 40px auto;
`;

export const Button = styled.div<buttonProps>`
  width: 120px;
  text-align: center;
  font-size: 30px;
  border-radius: 15px;
  padding: 10px 20px;
  border: 3px solid black;
  cursor: pointer;

  ${props => {
    if (props.stop)
      return css`
        margin-left: 20px;
      `;
  }}
`;
