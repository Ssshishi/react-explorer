import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import Repository from '../pages/Repository';
import Hunt from '../pages/Hunt';

function Routes(): JSX.Element {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/repository/:repository+" component={Repository} />
      <Route path="/hunt" component={Hunt} />
    </Switch>
  );
}

export default Routes;
