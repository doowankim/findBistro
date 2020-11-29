import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { StartPage } from '../containers';

const Router = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/">
					<StartPage />
				</Route>
			</Switch>
		</BrowserRouter>
	);
};

export default Router;
