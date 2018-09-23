import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import { Container, Row, Col, Input, Button, Fa, Modal, ModalBody, ModalFooter } from 'mdbreact';
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
          isOpen: false,
          modal: false

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
                    <NavLink href="/components/">About us</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/components/">Promotions</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/components/">Evenements</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#" onClick={this.togglelogin}>Join us</NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Navbar>
            
        
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
                <span>Vous n'avez pas un compte ?</span>
                <Link to='/inscription'>inscrivez vous
                </Link>
                
                
              </ModalBody>
              <ModalFooter>
                <Link to='/Profil-salle-de-Sport'>
                <Button color="primary">Save</Button>
                </Link>
              </ModalFooter>
            </Modal>
          
          </div>
        );
      }

  }
  
  export default Header;