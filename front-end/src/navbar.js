import React, { Component } from 'react';
import {HashRouter } from 'react-router-dom'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    
    } from 'reactstrap';
    import logo from './images/logo.jpg'
    import './css/navbar.css';
  

class Header extends Component {
    
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
      }
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }
      render() {
        return (
          <div>
            <HashRouter> 
            <Navbar color="light" fixed={`top`} light expand="md">
              <NavbarBrand href="/"><img src={logo} style={{width: '30%'}}/>
              </NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav navbar>
                <NavItem>
                    <NavLink href="/">Home</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/about-us">About us</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href='/evenement'>Promotions/events</NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Navbar>
            </HashRouter>
          </div>
        );
      }

  }
  
  export default Header;