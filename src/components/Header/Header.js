import React, { Component } from 'react';
import styles from './Header.module.css';

import {
  Navbar,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

class Header extends Component {
  state = {
    isOpen: false
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
        <Navbar color="light" light expand="md" className={ styles.header }>
            <Nav className={ styles.navBar } navbar>
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/services">Services</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/contact">Contact</NavLink>
              </NavItem>
            </Nav>
        </Navbar>
    );
  }
}

export default Header;