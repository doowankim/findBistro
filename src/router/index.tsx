import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { StartPage } from '../containers';

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <StartPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
