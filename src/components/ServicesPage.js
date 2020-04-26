import React, { Component } from 'react';
import Header from './Header';
import { Footer } from './Footer';

import ReactGA from 'react-ga';
ReactGA.pageview(window.location.pathname + window.location.search);

class ServicesPage extends Component {
  render() {
    return (
      <div className="servicesPage">
        <Header />
          <div className="servicesBox">
            <ul className="servicesList">
              <li><h5>Haircut with blowdry</h5>($22 - $25)</li>
              <li><h5>Haircut with blowdry and curl</h5>$44+</li>
              <li><h5>Ion Color</h5>$46</li>
              <li><h5>Any other color</h5>$52 (Redken etc...)</li>
              <li><h5>Kid's Cut</h5>$14</li>
              <li><h5>Kid's Cut with Blowdry and Curl</h5>$20</li>
              <li><h5>Roller Set</h5>$20</li>
              <li><h5>Color*</h5>$46-$52</li>
              <li><h5>Bleach*</h5>$80+</li>
              <li><h5>Highlights (Foil or Cap)*</h5>$45</li>
              <li><h5>Perms</h5>$72+ ($82+ with Curl)</li>
              <li><h5>Updo's and Formals</h5>$45</li>
              <li><h5>Facial Waxing</h5>$10</li>
              <li><h5>And Much More</h5>*Cut not included. All prices are starting points.</li>
            </ul>
          </div>
        <Footer />
        </div>
    );
  }
}

export default ServicesPage;