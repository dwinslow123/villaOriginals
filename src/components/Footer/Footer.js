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
    const isApple = navigator?.userAgent?.includes('Mac') || navigator?.userAgent?.includes('iPhone') || navigator?.userAgent?.includes('iPad');

    return (
        <div className={styles.footer}>
            <div className={styles.contactInfo}>
                <address className={styles.address}>
                    <FontAwesomeIcon className={styles.icon} icon={['fas', 'map-location-dot']} />
                    <a href={isApple ? constants.APPLE_MAPS_ADDRESS : constants.GOOGLE_MAPS_ADDRESS} className={styles.addressText}>
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
