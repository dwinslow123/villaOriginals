import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "./components/Layout/";
import Home from './components/Home/Home';
import ServicesPage from './components/ServicesPage/ServicesPage';
import ContactPage from './components/ContactPage/ContactPage';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/services" component={ ServicesPage } />
          <Route path="/contact" component={ ContactPage } />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
