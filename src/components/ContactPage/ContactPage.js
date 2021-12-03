import React from "react";
import styles from "./ContactPage.module.css";

import ReactGA from "react-ga";
ReactGA.pageview(window.location.pathname + window.location.search);

const ContactPage = () => {
  const mapSelector = () => {
    if (
      navigator.platform.indexOf("iPhone") !== -1 ||
      navigator.platform.indexOf("iPad") !== -1 ||
      navigator.platform.indexOf("iPod") !== -1
    ) {
      window.open(
        "maps://www.google.com/maps/place/26+S+Villa+Ave,+Villa+Park,+IL+60181/@41.8891481,-87.9720645,17z/data=!3m1!4b1!4m5!3m4!1s0x880e4cd90ba946fd:0xaca2ef0eb8bb9c27!8m2!3d41.8891441!4d-87.9698705"
      );
    }
  };

  return (
    <div className={styles.contactPage}>
      <div className={styles.contactBox}>
        <div className={styles.contactCard}>
          <div className={styles.addressBlock}>
            <div className={styles.cardTitle}>
              <h4>Stop By</h4>
            </div>
            <p className="lead text-center">
              We are located at:
              <address>
                <a href="https://goo.gl/maps/9iYz4N7VCus" onClick={mapSelector}>
                  26 S. Villa Ave
                  <br />
                  Villa Park, IL 60181
                </a>
              </address>
            </p>
          </div>
          <div className={styles.phoneBlock}>
            <div className={styles.cardTitle}>
              <h4>Give us a call</h4>
            </div>
            <p className="lead text-center">
              You can call us here:
              <br /> <a href="tel:630-833-6777">(630) 833-6777</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
