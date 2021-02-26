import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Layout from "./components/Layout/";
import Home from './components/Home';
import ServicesPage from './components/ServicesPage';
import ContactPage from './components/ContactPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactForm from "./components/ContactForm/ContactForm";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/services" component={ ServicesPage } />
          <Route exact path="/contact" component={ ContactPage } />
          <Route path="/contactForm" component={ ContactForm } />
          <Route exact path="/Contact_Us.html">
            <Redirect to="/contact" component={ ContactPage } />
          </Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
