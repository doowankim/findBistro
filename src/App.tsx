import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Router from './router';

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
			<Router />
		</div>
	);
}

export default App;
