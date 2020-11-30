import React, { useState } from 'react';
import { Modal, Header, Roulette } from '../../components';
import * as Styled from './styles';

function StartPage() {
	const [modalState, setModalState] = useState<boolean>(true);

	return (
		<div>
			<Header />
			<Styled.InputItem>
				<div>오늘은 뭐 먹을까? 고민하지 마세요</div>
				<div>점심 고르는건 직점이 해드릴테니까요 😜</div>
				<div>아래의 룰렛을 돌려보세요</div>
				<Roulette />
			</Styled.InputItem>
			{modalState && (
				<Modal>
					<button onClick={() => setModalState(false)}>닫기</button>
				</Modal>
			)}
		</div>
	);
}

export default StartPage;
