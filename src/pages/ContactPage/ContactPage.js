import React from "react";
import styles from "./ContactPage.module.css";
import { ContactBox, ContactCard } from '../../components/ui';
import Constants from '../../utils/constants.js';

const ContactPage = () => {
    const ua = navigator.userAgent;

    const mapSelector = ua.includes('Macintosh') ? Constants.MAPS_ADDRESS : Constants.MAPS_HREF;

    return (
        <div className={styles.contactPage}>
            <ContactBox>
                <ContactCard actionText={Constants.SHOP_ADDRESS} actionTextSecondLine={Constants.SHOP_CITY_AND_ZIP}
                    title={Constants.ADDRESS_TITLE} linkAddress={Constants.MAPS_HREF} />
                <ContactCard actionText={Constants.SHOP_PHONE_NUMBER} linkAddress={mapSelector}
                    title={Constants.PHONE_TITLE} />
            </ContactBox>
        </div>
    );
};

export default ContactPage;
