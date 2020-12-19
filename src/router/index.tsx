import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Header } from '../components';
import { StartPage } from '../containers';

function Router() {
  const [update, isUpdate] = useState<boolean>(false);

  const themeMode = () => {
    isUpdate(!update);
    window.sessionStorage.setItem('themeMode', update);
  };

  useEffect(() => {
    if (window.sessionStorage.getItem('themeMode'))
      isUpdate(window.sessionStorage.getItem('themeMode'));
  }, []);
  return (
    <BrowserRouter>
      <Header backgroundMode={themeMode} switchStatus={update} />
      <Switch>
        <Route exact path="/">
          <StartPage themeMode={update} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
