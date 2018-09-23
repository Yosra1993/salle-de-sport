import React, { Component } from 'react';
import {HashRouter } from 'react-router-dom'
import {Link} from 'react-router-dom'
import {Input, Button, Fa, Modal, ModalBody, ModalFooter } from 'mdbreact';
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
          modal: false,
          isOpen: false
        };
        this.togglelogin = this.togglelogin.bind(this);
      }
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }
      togglelogin() {
        this.setState({
          modal: !this.state.modal
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
                    <NavLink href='/evenement'>Promotions/Events</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#" onClick={this.togglelogin}>Join us</NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Navbar>
            </HashRouter>

            <Modal isOpen={this.state.modal} togglelogin={this.togglelogin} className="cascading-modal">
              <div className="modal-header primary-color white-text">
                <h4 className="title">
                  <Fa className="fa fa-pencil" /> Contact form</h4>
                <button type="button" className="close" onClick={this.togglelogin}>
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <ModalBody className="grey-text">
              <Input size="sm" label="Your email" icon="envelope" group type="email" validate error="wrong" success="right"/>
                <Input size="sm" label="Your Password" icon="user" group type="password" validate error="wrong" success="right"/>
                <span>Do you have an account?</span>
                <Link to='/inscription'>Register
                </Link>
                
                
              </ModalBody>
              <ModalFooter>
                <Button color="primary">Save</Button>
              </ModalFooter>
            </Modal>
          </div>
        );
      }

  }
  
  export default Header;