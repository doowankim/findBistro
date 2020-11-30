import React, { useState } from 'react';
import { Modal } from '../../components';

function StartPage() {
	const [modalState, setModalState] = useState<boolean>(true);

	return (
		<div>
			{modalState && (
				<Modal>
					<button onClick={() => setModalState(false)}>닫기</button>
				</Modal>
			)}
		</div>
	);
}

export default StartPage;
