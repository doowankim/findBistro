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
`;
