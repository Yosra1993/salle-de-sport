import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';
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
            <Navbar color="light" fixed={`top`} light expand="md">
              <NavbarBrand href="/"><img src={logo} style={{width: '30%'}}/>
              </NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav navbar>
                <NavItem>
                    <NavLink href="/components/">Home</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/components/">About us</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/components/">Promotions</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/components/">Evenements</NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Navbar>
          </div>
        );
      }

  }
  
  export default Header;