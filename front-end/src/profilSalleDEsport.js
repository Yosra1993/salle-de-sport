import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { Row, Col, Card, CardBody, Avatar, Mask, Fa, View,} from 'mdbreact';
import { Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'
import { Modal, ModalBody, ModalFooter } from 'mdbreact';
import {Container, Button,  FormGroup, Label, Input, } from 'reactstrap';
import './css/profilSalleDeSport.css'


class ProfilSalleDeSport extends Component {
constructor(props){

    super(props)
    this.state={
             modal: false,
             modal1: false, }

  this.toggleEdit = this.toggleEdit.bind(this);
  this.toggleEdit1 = this.toggleEdit1.bind(this);
}
  toggleEdit() {
    this.setState({
      modal: !this.state.modal
    });
  }
  toggleEdit1() {
    this.setState({
      modal1: !this.state.modal1
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
              <h4 className="font-weight-bold mb-3" style={{fontSize:"140%"}}>
<i class="fa fa-suitcase"  aria-hidden="true"></i> name de salle de sport<a href='#' onClick={this.toggleEdit1} style={{fontSize:"17px"}}>  <i class="fa fa-pencil" aria-hidden="true"></i>   Edit </a></h4>

              
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


              <Modal isOpen={this.state.modal1} toggleEdit1={this.toggleEdit1} className="cascading-modal">
              <div className="modal-header primary-color white-text">
                <h4 className="title">
                  <Fa className="fa fa-pencil" /> Edit GYM</h4>
                <button type="button" className="close" onClick={this.toggleEdit1}>
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <ModalBody className="grey-text">
              < Container>
          <FormGroup>
          <Label for="exampleName">Name GYM</Label>
          <Input type="text" name="Name" id="exampleName" placeholder="Please write the name......." />
        </FormGroup>
        <FormGroup>
          <Label for="exampleLieu">Lieu</Label>
          <Input type="text" name="Lieu" id="exampleLieu" placeholder="Please write the place......." />
        </FormGroup>
        <FormGroup>
          <Label for="exampleNumber">Number</Label>
          <Input type="number" name="number" id="exampleNumber" placeholder="Please write number......." />
        </FormGroup>
        <FormGroup>
          <Label for="exampleDescription">Description</Label>
          <Input type="description" name="description" id="exampleDescription" placeholder="Please write Description......." />
        </FormGroup>
        <FormGroup>
          <Label for="examplePhoto">Picture1</Label>
          <Input type="url" name="photo" id="examplePicture" placeholder="Please enter Picture 1......." />
        </FormGroup>
        <FormGroup>
          <Label for="examplePhoto">Picture2</Label>
          <Input type="url" name="photo" id="examplePicture1" placeholder="Please enter Picture 2......." />
        </FormGroup>
        <FormGroup>
          <Label for="examplePhoto">Picture3</Label>
          <Input type="url" name="photo" id="examplePicture2" placeholder="Please enter Picture 3......." />
        </FormGroup>
        <FormGroup>
          <Label for="exampleCategories">Categories</Label>
          <Input type="testarea" name="categories" id="exampleCategories" placeholder="Please write Categories......." />
        </FormGroup>
      </Container>
                
                
              </ModalBody>
              <ModalFooter>
               
                <Button onClick={this.toggleEdit1} color="primary">Save</Button>
               
              </ModalFooter>
            </Modal>

              </div>
  )}
}
export default ProfilSalleDeSport;