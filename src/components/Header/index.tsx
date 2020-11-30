import React from 'react';
import * as Styled from './styles';

function Header() {
	return (
		<Styled.Container>
			<Styled.Wrapper>
				<div>
					<Styled.Logo>직점</Styled.Logo>
					<Styled.LogoDescription>오늘 점심은 뭘 먹지?</Styled.LogoDescription>
				</div>
				<div>
					{window.screen.width > 400 ? (
						<Styled.Menu>
							<Styled.MenuItem>메뉴</Styled.MenuItem>
							<Styled.MenuItem>메뉴</Styled.MenuItem>
							<Styled.MenuItem>메뉴</Styled.MenuItem>
							<Styled.MenuItem>메뉴</Styled.MenuItem>
						</Styled.Menu>
					) : (
						<Styled.MenuIcon className="fas fa-bars" />
					)}
				</div>
			</Styled.Wrapper>
		</Styled.Container>
	);
}

export default Header;
