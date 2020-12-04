import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {MAIN, EPISODE} from './routesConfig';
import { Main } from './pages/Main';
import { Episode } from './pages/Episode';

const Routes = () => (
  <Switch>
    <Route exact path="/">
      <Main to={MAIN} />
    </Route>
    <Route path={EPISODE}>
      <Episode />
    </Route>
  </Switch>
);

export default Routes;
