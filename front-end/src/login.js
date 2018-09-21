import React from 'react';
import {Link} from 'react-router-dom'
import { Container, Row, Col, Input, Button, Fa, Modal, ModalBody, ModalFooter } from 'mdbreact';

class Login extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    }
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return(
      <Container>
        <Row>
          <Col md="6">
            <Button color="danger"style={{marginTop: "-264%"}} onClick={this.toggle}>Join us</Button>
            <Modal isOpen={this.state.modal} toggle={this.toggle} className="cascading-modal">
              <div className="modal-header primary-color white-text">
                <h4 className="title">
                  <Fa className="fa fa-pencil" /> Contact form</h4>
                <button type="button" className="close" onClick={this.toggle}>
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
                <Button color="primary">Save</Button>
              </ModalFooter>
            </Modal>
          </Col>
        </Row>
      </Container>
    );
  }
};
export default Login
