import styled, { keyframes } from 'styled-components';

const modalBoxBg = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const modalBox = keyframes`
  0% {
    opacity: 0;
    bottom: -60px;
  }
  100% {
    opacity: 1;
    bottom: 0;
  }
`;

export const BackgroundView = styled.div`
	position: fixed;
	background: rgba(0, 0, 0, 0.2);
	width: 100vw;
	height: 100vh;
	top: 0;
	left: 0;
	animation: ${modalBoxBg} 0.75s;
`;

export const Container = styled.div`
	position: fixed;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 20;
`;

export const Wrapper = styled.div`
	transition: 0.35s;
	position: relative;
	padding: 32px;
	border-radius: 5px;
	background: #ffffff;
	box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
	animation: ${modalBox} 0.35s;

	.floating_flex {
		display: flex;

		.flex_box {
			position: relative;
			padding: 0 16px;
			width: 320px;
			border-right: 1px solid lighten(#ddd, 8%);
			animation: ${modalBoxBg} 0.35s;
		}

		.flex_box:first-child {
			padding-left: 0;
		}

		.flex_box:last-child {
			padding-right: 0;
			border-right: none;
		}
	}

	.floating_bottom {
		display: flex;
		justify-content: center;
	}
`;
