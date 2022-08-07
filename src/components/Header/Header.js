import React from "react";
import {Nav, Navbar, NavbarBrand, NavItem, NavLink} from "reactstrap";
import styles from './Header.module.css';

/** Header Component */
const Header = () => {
    return (
        <>
            <Navbar className={ styles.header }>
                <NavbarBrand href='/'>
                    Villa Originals
                </NavbarBrand>
                <Nav className={styles.navBar} navbar>
                    <NavItem>
                        <NavLink className={styles.actionLink} href="/services">Services</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className={styles.actionLink} href="/contact">Contact</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </>
    );
};

export default Header;
