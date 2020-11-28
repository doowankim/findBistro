import React from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`;

function App() {
	return (
		<div>
			<GlobalStyles />
			<div>App</div>
		</div>
	);
}

export default App;
