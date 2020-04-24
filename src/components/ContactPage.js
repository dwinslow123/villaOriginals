import React, { Component } from 'react';
import { Button } from 'reactstrap';
import Header from './Header';
import { Footer } from './Footer';

import '../css/styles.css';

class ContactPage extends Component {
  
  mapSelector = () => {
    if ((navigator.platform.indexOf("iPhone") !== -1) ||
    (navigator.platform.indexOf("iPad") !== -1) ||
    (navigator.platform.indexOf("iPod") !== -1)) {
      window.open("maps://www.google.com/maps/place/26+S+Villa+Ave,+Villa+Park,+IL+60181/@41.8891481,-87.9720645,17z/data=!3m1!4b1!4m5!3m4!1s0x880e4cd90ba946fd:0xaca2ef0eb8bb9c27!8m2!3d41.8891441!4d-87.9698705");
    }
  }

  render() {
    return (
      <div className="contactPage">
      <Header />
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
    )
  }
}

export default ContactPage;