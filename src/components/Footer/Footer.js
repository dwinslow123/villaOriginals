import React from 'react';
import {dom, library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebook, faInstagram} from '@fortawesome/free-brands-svg-icons';
import {faMapLocationDot, faPhone} from '@fortawesome/free-solid-svg-icons';
import styles from './Footer.module.css';

import constants from '../../utils/constants';

dom.watch();
library.add(faFacebook, faInstagram, faMapLocationDot, faPhone);

/** Footer component */
const Footer = () => {

    /**
    * mapSelector checks the current browser before deciding to open in Apple Maps or Google Maps.
    */
    const mapSelector = () => {
        if (
            navigator?.userAgent?.includes('Mac')
        ) {
            window.open(
                "maps://www.apple.com/maps/place/26+S+Villa+Ave,+Villa+Park,+IL+60181/@41.8891481,-87.9720645,17z/data=!3m1!4b1!4m5!3m4!1s0x880e4cd90ba946fd:0xaca2ef0eb8bb9c27!8m2!3d41.8891441!4d-87.9698705"
            );
        } else {
            window.open(
                "https://maps.app.goo.gl/S6B26KYU7R9D5UJJ6"
            );

        }
    };

    return (
        <div className={styles.footer}>
            <div className={styles.contactInfo}>
                <address className={styles.address}>
                    <FontAwesomeIcon className={styles.icon} icon={['fas', 'map-location-dot']} />
                    <a href="#" className={styles.addressText} onClick={mapSelector}>
                        {constants.SHOP_ADDRESS}
                        <br/>
                        {constants.SHOP_CITY_AND_ZIP}
                    </a>
                    <br/>
                </address>
                <div className={styles.phone}>
                    <FontAwesomeIcon className={styles.icon} icon={['fas', 'phone']} />
                    <a href={constants.PHONE_HREF}>{constants.SHOP_PHONE_NUMBER}</a>
                </div>
                </div>
            <div className={styles.footerIcons}>
                <a href="https://www.facebook.com/Villa-Originals-324083014196/">
                    <FontAwesomeIcon
                        icon={['fab', 'facebook']}
                        size="2x"
                    />
                </a>
                <a href="https://instagram.com/villa_originals">
                    <FontAwesomeIcon
                        icon={['fab', 'instagram']}
                        size="2x"
                    />
                </a>
            </div>
        </div>
    )
}

export default Footer;
