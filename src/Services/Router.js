import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Welcome from '../components/welcome/Welcome.js';
import App from '../App.js';
import NotFound from '../components/welcome/NotFound.js';

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