import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink } from 'mdbreact';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './views/home';
import SignUp from './views/sign_up';
import Facilities from './views/facilities';
import About from './views/about';

class AppMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
    };
  this.onClick = this.onClick.bind(this);
  }

  onClick(){
    this.setState({
      collapse: !this.state.collapse,
    });
  }
  render() {
    return (
      <Router>
        <div>
          <Navbar color="light-blue" dark expand="md" scrolling>
            <NavbarBrand href="/">
                <strong>Lead City Fashion & Lifestyle Academy</strong>
            </NavbarBrand>
            { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />}
            <Collapse isOpen = { this.state.collapse } navbar>
              <NavbarNav right>
                <NavItem active>
                  <NavLink to="/">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/sign_up">Sign Up</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/facilities">Facilities</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/about">About</NavLink>
                </NavItem>
              </NavbarNav>
            </Collapse>
          </Navbar>

          <Route exact path="/" component={Home} />
          <Route path="/sign_up" component={SignUp} />
          <Route path="/facilities" component={Facilities} />
          <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

export default AppMenu;