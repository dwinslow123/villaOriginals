import React from 'react';
import {dom, library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebook, faInstagram} from '@fortawesome/free-brands-svg-icons';
import styles from './Footer.module.css';

dom.watch();
library.add(faFacebook, faInstagram);

/** Footer component */
const Footer = () => {
    return (
        <div className={styles.footer}>
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
