import React from "react";
import styles from "./ServicesPage.module.css";

import ReactGA from "react-ga";
ReactGA.pageview(window.location.pathname + window.location.search);

const ServicesPage = () => {
  return (
    <>
    <div className={styles.servicesPage}>
      <div className={styles.servicesBox}>
        <ul className={styles.servicesList}>
          <li>
            <h5>Haircut no Blow-Dry</h5><p className={styles.price}>$23</p>
          </li>
          <li>
            <h5>Haircut with Blow-Dry</h5><p className={styles.price}>$25 and up</p>
          </li>
          <li>
            <h5>Haircut, Touchup, and Blow-Dry</h5><p className={styles.price}>$80 - $95</p>
          </li>
          <li>
            <h5>Ion Color</h5><p className={styles.price}>$47</p>
          </li>
          <li>
            <h5>Ion Color w/ Haircut and Shampoo and Set</h5><p className={styles.price}>$92</p>
          </li>
          <li>
            <h5>Color*</h5><p className={styles.price}>$55</p>
          </li>
          <li>
            <h5>Kid&#39;s Cut</h5><p className={styles.price}>$14</p>
          </li>
          <li>
            <h5>Kid&#39;s Cut with Blow-Dry and Curl</h5><p className={styles.price}>$20</p>
          </li>
          <li>
            <h5>Roller Set</h5><p className={styles.price}>$20</p>
          </li>
          <li>
            <h5>Virgin Bleach and Tone*</h5><p className={styles.price}>$80 and up</p>
          </li>
          <li>
            <h5>Full Highlight*</h5><p className={styles.price}>$95 and up</p>
          </li>
          <li>
            <h5>Partial Highlight*</h5><p className={styles.price}>$50 and up</p>
          </li>
          <li>
            <h5>Shampoo and Set</h5><p className={styles.price}>$21</p>
          </li>
          <li>
            <h5>Blow-Dry and Curl</h5><p className={styles.price}>$35 - $45</p>
          </li>
          <li>
            <h5>Touchup and Light Blow-Dry</h5><p className={styles.price}>$58</p>
          </li>
          <li>
            <h5>Shampoo and Blow-Dry</h5><p className={styles.price}>$18</p>
          </li>
          <li>
            <h5>Perms</h5><p className={styles.price}>$73 and up</p>
          </li>
          <li>
            <h5>Perm with Curl</h5><p className={styles.price}>$83 and up</p>
          </li>
          <li>
            <h5>Updo&#39;s and Formals</h5><p className={styles.price}>$45 and up</p>
          </li>
          <li>
            <h5>Wax Brows</h5><p className={styles.price}>$12</p>
          </li>
          <li>
            <h5>Wax Brows and Lips</h5><p className={styles.price}>$15</p>
          </li>
          <li>
            <h5>And Much More</h5>*Cut not included. <br />
            <p className={styles.price}>All prices are starting points.</p>
          </li>
        </ul>
      </div>
    </div>
    </>
  );
};

export default ServicesPage;
