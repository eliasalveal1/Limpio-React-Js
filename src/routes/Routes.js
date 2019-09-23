import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../components/Home';
import NotFound from '../components/NotFound';

const AppRouter = (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact="true"/>
      <Route component={NotFound}/>
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
