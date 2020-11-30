import styled, { keyframes } from 'styled-components';

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

export const Circle = styled.div`
	width: 300px;
	height: 300px;
	border-radius: 50%;
	background: white;
	border: 3px solid black;
	position: relative;
	margin: 10px auto;
`;

export const Loop = styled.div`
	animation: ${rotation} 7s ease-in-out forwards;
`;

export const Fill = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 300px;
	height: 300px;
	border-radius: 50%;
	clip: rect(0px, 300px, 300px, 150px);

	&::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 300px;
		height: 300px;
		border-radius: 50%;
		clip: rect(0px, 150px, 200px, 0px);
		transform: rotate(45deg);
	}
`;
