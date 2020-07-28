import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Welcome from '../components/Welcome/Welcome';
import App from '../App';
import NotFound from '../components/Welcome/NotFound';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Welcome} />
      <Route path="/pokedex" component={App} />
      <Route component={NotFound}/>
    </Switch>
  </BrowserRouter>
)

export default Router;