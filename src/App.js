import React, { Component } from 'react';
import { Button } from 'reactstrap';
import './css/styles.css';


import Header from './components/Header';
import { Footer } from './components/Footer';

import CovidMessage from './components/CovidMessage';

  class App extends Component {

  mapSelector = () => {
    if ((navigator.platform.indexOf("iPhone") !== -1) ||
    (navigator.platform.indexOf("iPad") !== -1) ||
    (navigator.platform.indexOf("iPod") !== -1)) {
      window.open("maps://www.google.com/maps/place/26+S+Villa+Ave,+Villa+Park,+IL+60181/@41.8891481,-87.9720645,17z/data=!3m1!4b1!4m5!3m4!1s0x880e4cd90ba946fd:0xaca2ef0eb8bb9c27!8m2!3d41.8891441!4d-87.9698705");
    }
  }

  render() {
  return (
    <div className="App">
      <CovidMessage buttonLabel="Click here for more information" className="covidButton" />
      <Header />
      <div className="welcomeMessage">
        <h4 className="display-3">Villa Originals</h4>
        <p className="lead">Villa Originals is an independently owned and operated hair salon that has been making the people of the western suburbs beautiful sinces the early 1960's.
            We are a fun loving group of experienced hairstylists that really love what we do and can create the look that you want.</p>
            <hr className="my-2" />
            <p className="lead">Our customers are like family to us, and we enjoy listening to them and giving them quality service and style.
            It's the type of salon and friendly atmosphere <span className="cheers">"Where everybody knows your name"</span> and we look forward to meeting you!</p>
      </div>
      <div className="contactBox">
        <div className="contactCard">
          <div className="cardTitle"><h4>Stop By</h4></div>
          <p className="lead text-center">
          We are located at:<address><a href="https://goo.gl/maps/9iYz4N7VCus" onClick={ this.mapSelector }>26 S. Villa Ave<br/>Villa Park, IL 60181</a></address>
          </p>
        </div>
        <div className="contactCard">
        <div className="cardTitle"><h4>Give us a call</h4></div>
          <p className="lead text-center">You can call us here:<br /> <a href="tel:630-833-6777" onClick={ this.phoneClick }>(630) 833-6777</a></p>
        </div>
        <div className="contactCard">
        <div className="cardTitle"><h4>Or send us an email</h4></div>
          <form method="post" action="mailto:dwinslow123@me.com">
                  <Button
                    type="submit"
                    value="Send Email"
                    color="info"
                  >
                    Email Us!
                  </Button>
                </form>
        </div>
      </div>
      <Footer />
    </div>
  );
  }
}
export default App;
