import styled, { keyframes } from 'styled-components';
import { darken } from 'polished';

const menuAni = keyframes`
    0% {
        opacity: 0;
        right: -100px;
    }
    100% {
        opacity: 1;
        right: 0;
    }
`;

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

export const LogoBox = styled.div`
	// position: absolute;
`;

export const Logo = styled.div`
	font-size: 26px;
	font-weight: bold;
`;

export const LogoDescription = styled.div``;

export const Menu = styled.div`
	display: flex;
`;

export const MenuItem = styled.div`
	margin-left: 10px;
	cursor: pointer;
	transition: 0.35s;

	&:hover {
		transition: 0.35s;
		color: ${darken(0.1, '#fff')};
	}
`;

export const MenuIcon = styled.i`
	font-size: 24px;
	animation: ${menuAni} 0.5s;
`;

export const MenuList = styled.div`
	position: relative;
	width: 80px;
	height: 100px;
	background: #495057;
	animation: ${menuAni} 0.5s;
`;
