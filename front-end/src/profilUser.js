import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { Row, Col, Card, CardBody, Avatar, Mask, Fa, View,} from 'mdbreact';
import { Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'
import { Modal, ModalBody, ModalFooter } from 'mdbreact';
import {Container, Button,  FormGroup, Label, Input, } from 'reactstrap';
import './css/profilSalleDeSport.css'


class ProfilUser extends Component {
constructor(props){

    super(props)
    this.state={
             modal: false,
             }

  this.toggleEdit = this.toggleEdit.bind(this);
}
  toggleEdit() {
    this.setState({
      modal: !this.state.modal
    });
  }
  
  render(){
  return(
<div className = 'salle-de-sport-profile-container'>
              <Header as='h3'>Your Profil 
               <a href='#' onClick={this.toggleEdit} style={{fontSize:"17px"}}>  <i class="fa fa-pencil" aria-hidden="true"></i>   Edit </a> </Header>

              <Row className="text-md-left">
          <Col lg="6" md="12" className="mb-5">
            <Col md="4" lg="6" className="float-left">
              <Image src="https://mdbootstrap.com/img/Photos/Avatars/img%20(32).jpg" className="mx-auto mb-md-0 mb-4 rounded z-depth-1 img-fluid" tag="img" />
            </Col>
            <Col md="8" lg="6" className="float-right">
              <h4 className="font-weight-bold mb-3"><i class="fa fa-user-circle-o" aria-hidden="true"></i> John hhhhh</h4>
              <p className="grey-text"><i class="fa fa-envelope-o" aria-hidden="true"></i> john@gmail.com </p>
              <p className="grey-text"><i class="fa fa-phone" aria-hidden="true"></i>  23190023</p>
            </Col>
          </Col>
          </Row> 
            <Modal isOpen={this.state.modal} toggleEdit={this.toggleEdit} className="cascading-modal">
              <div className="modal-header primary-color white-text">
                <h4 className="title">
                  <Fa className="fa fa-pencil" /> Edit Profil</h4>
                <button type="button" className="close" onClick={this.toggleEdit}>
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <ModalBody className="grey-text">
              < Container>
          <FormGroup>
          <Label for="exampleFirstName">First Name</Label>
          <Input type="text" name="FirstName" id="exampleFirstName" placeholder="Please write your first name......." />
        </FormGroup>
        <FormGroup>
          <Label for="exampleLastName">Last Name</Label>
          <Input type="text" name="LastName" id="exampleLastName" placeholder="Please write your last name......." />
        </FormGroup>
        <FormGroup>
          <Label for="exampleNumber">Number</Label>
          <Input type="number" name="number" id="exampleNumber" placeholder="Please write number......." />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="exemple:user@gmail.com" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePhoto">Photo</Label>
          <Input type="url" name="photo" id="examplePhoto" placeholder="Please enter your Photo......." />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="Please write your password name......." />
        </FormGroup>
      </Container>
                
                
              </ModalBody>
              <ModalFooter>
               
                <Button onClick={this.toggleEdit} color="primary">Save</Button>
               
              </ModalFooter>
            </Modal>


              
              </div>
  )}
}
export default ProfilUser;