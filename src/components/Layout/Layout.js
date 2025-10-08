import React from 'react';
import PropTypes from "prop-types";
import Header from '../Header';
import Footer from '../Footer';
import CovidMessage from '../CovidMessage';

import styles from './Layout.module.css';

const isBannerEnabled = false;

/** Basic Layout setup for the app */
const Layout = ({children}) => {
    return (<div className={styles.container}>
            {isBannerEnabled && <CovidMessage buttonLabel="See More" className={styles.covidButton}/>}
            <Header/>
            <div className={styles.content}>
                {children}
            </div>
            <Footer/>
        </div>);
};

Layout.propTypes = {
    /** Child elements being passed into the layout */
    children: PropTypes.element,
}

export default Layout;
