import React from 'react';
import Header from '../Header/Header';
import { Footer } from '../Footer/Footer';
import CovidMessage from '../CovidMessage/CovidMessage';

import styles from './Layout.module.css';

const Layout = ({ children }) => {
  return (
    <div className={ styles.container }>
      <CovidMessage  buttonLabel="See More" className={ styles.covidButton }/>
      <Header />
      <div className={ styles.content }>
        { children }
      </div>
      <Footer />
    </div>
  );
};

export default Layout;