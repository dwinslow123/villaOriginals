import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/";
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
// import ContactPage from './pages/ContactPage';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <BrowserRouter>
    <>
      <Layout>
        <Routes>
          <Route exact path="/" element={ <Home /> } />
          <Route path="/services" element={ <ServicesPage /> } />
          {/* <Route exact path="/Contact_Us.html" element={ <ContactPage /> } /> */}
          {/* <Route exact path="/contact" element={ <ContactPage /> } /> */}
        </Routes>
      </Layout>
      </>
    </BrowserRouter>
  );
};

export default App;
