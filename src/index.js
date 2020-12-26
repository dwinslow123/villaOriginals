/* eslint-disable no-unused-expressions */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ReactGA from 'react-ga';

import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';

const trackingId = "UA-145110574-1";
ReactGA.initialize(trackingId);

const wrapper = document.getElementById("root");

wrapper ? ReactDOM.render(<App />, wrapper) : null;
