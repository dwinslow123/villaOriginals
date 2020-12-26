import React, { Component } from 'react';
import styles from './ServicesPage.module.css';

import ReactGA from 'react-ga';
ReactGA.pageview(window.location.pathname + window.location.search);

class ServicesPage extends Component {
  render() {
    return (
      <div className={ styles.servicesPage }>
          <div className={ styles.servicesBox }>
            <ul className={ styles.servicesList }>
              <li><h5>Haircut no Blowdry</h5>$23</li>
              <li><h5>Haircut with Blowdry</h5>$25 and up</li>
              <li><h5>Haircut, Touchup, and Blowdry</h5>$80 - $95</li>
              <li><h5>Ion Color</h5>$47</li>
              <li><h5>Ion Color w/ Haircut and Shampoo and Set</h5>$92</li>
              <li><h5>Color*</h5>$55</li>
              <li><h5>Kid's Cut</h5>$14</li>
              <li><h5>Kid's Cut with Blowdry and Curl</h5>$20</li>
              <li><h5>Roller Set</h5>$20</li>
              <li><h5>Virgin Bleach and Tone*</h5>$80 and up</li>
              <li><h5>Full Highlight*</h5>$95 and up</li>
              <li><h5>Partial Highlight*</h5>$50 and up</li>
              <li><h5>Shampoo and Set</h5>$21</li>
              <li><h5>Blowdry and Curl</h5>$35 - $45</li>
              <li><h5>Touchup and Light Blowdry</h5>$58</li>
              <li><h5>Shampoo and Blowdry</h5>$18</li>
              <li><h5>Perms</h5>$73 and up</li>
              <li><h5>Perm with Curl</h5>$83 and up</li>
              <li><h5>Updo's and Formals</h5>$45 and up</li>
              <li><h5>Wax Brows</h5>$12</li>
              <li><h5>Wax Brows and Lips</h5>$15</li>
              <li><h5>And Much More</h5>*Cut not included. <br />All prices are starting points.</li>
            </ul>
          </div>
        </div>
    );
  }
}

export default ServicesPage;