import React from 'react';
import * as Styled from './styles';

function Header() {
	console.log(window.screen.width);
	return (
		<Styled.Container>
			<Styled.Wrapper>
				<div>
					<Styled.Logo>직점</Styled.Logo>
					<Styled.LogoDescription>오늘 점심은 뭘 먹지?</Styled.LogoDescription>
				</div>
				<div>
					<Styled.MenuIcon className="fas fa-bars" />
				</div>
			</Styled.Wrapper>
		</Styled.Container>
	);
}

export default Header;
