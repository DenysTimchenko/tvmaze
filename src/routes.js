import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import { HOME, SHOW, EPISODES } from './routesConfig';
import { Show } from './pages/Show';
import { Episodes } from './pages/Episodes';

const Routes = () => (
  <Switch>
    <Route exact path="/">
      <Redirect to={HOME} />
    </Route>
    <Route path={SHOW}>
      <Show />
    </Route>
    <Route path={EPISODES}>
      <Episodes />
    </Route>
  </Switch>
);

export default Routes;
