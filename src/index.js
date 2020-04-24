import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

import App from './App';
import Portfolio from './components/Portfolio';
import ServicesPage from './components/ServicesPage';
import ContactPage from './components/ContactPage';

import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <Router>
      <Switch>
      <Route exact path="/" component={ App } />
      <Route path="/portfolio" component={ Portfolio } />
      <Route path="/services" component={ ServicesPage } />
      <Route path="/contact" component={ ContactPage } />
      </Switch>
    </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
