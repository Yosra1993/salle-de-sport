import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { connect } from "react-redux";
import axios from "axios";
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
             modal1: false,
             FirstName: "",
             LastName: "",
             number:"",
             email:"",
             photo:"",
             password: "", }

  this.toggleEdit = this.toggleEdit.bind(this);
  this.toggleEdit1 = this.toggleEdit1.bind(this);
}

onEditProfilSalleDeSport = () => {
  axios
    .put(`/profil-SalleDeSport/${this.state._id}`, {
      FirstName: this.state.FirstName,
      LastName: this.state.LastName,
      number: this.state.number,
      email: this.state.email,
      photo: this.state.photo,
      password: this.state.password

    })
    .then(() => this.props.onEditProfilSalleDeSportReducerAction({
     
                                                                  FirstName: "",
                                                                  LastName: "",
                                                                  number:"",
                                                                  email:"",
                                                                  photo:"",
                                                                  password: "", }))
    .catch(err => alert(err));
};

onChange = e => {
  this.setState({
    [e.target.name]: e.target.value
  });
};

componentDidMount() {
  this.setState({
    ...this.props.ProfilGYM_Array.filter(e => e.FirstName === this.props.FirstName)[0]
  });
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
    console.log(this.props)
  return(
<div className = 'salle-de-sport-profile-container'>
              <Header as='h3'style={{textAlign:"center"}}>Your Profil 

               <a href='#' onClick={this.toggleEdit} style={{fontSize:"17px"}}>  <i class="fa fa-pencil" aria-hidden="true"></i>   Edit </a> </Header>

              <Row className="text-md-left">
          <Col lg="6" md="12" className="mb-5">
            <Col md="4" lg="6" className="float-left">
              <Image src={this.props.ProfilGYM_Array[0].photo} className="mx-auto mb-md-0 mb-4 rounded z-depth-1 img-fluid" tag="img" />
            </Col>
            <Col md="8" lg="6" className="float-right">
              <h4 className="font-weight-bold mb-3"><i class="fa fa-user-circle-o" aria-hidden="true"></i> {this.props.ProfilGYM_Array[0].FirstName} {this.props.ProfilGYM_Array[0].LastName}</h4>
              <p className="font-weight-bold mb-3"><i class="fa fa-envelope-o" aria-hidden="true"></i> {this.props.ProfilGYM_Array[0].email} </p>
              <p className="font-weight-bold mb-3"><i class="fa fa-phone" aria-hidden="true"></i>  {this.props.ProfilGYM_Array[0].number}</p>
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
          <Input type="text" name="FirstName" id="exampleFirstName" value={this.state.FirstName} 
          onChange={this.onChange} placeholder="Please write your first name......." />
          
        </FormGroup>
        <FormGroup>
          <Label for="exampleLastName">Last Name</Label>
          <Input type="text" name="LastName" id="exampleLastName"value={this.state.LastName} 
          onChange={this.onChange}  placeholder="Please write your last name......." />
        </FormGroup>
        <FormGroup>
          <Label for="exampleNumber">Number</Label>
          <Input type="number" name="number" id="exampleNumber" value={this.state.number} 
          onChange={this.onChange} placeholder="Please write number......." />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="exampleEmail" value={this.state.email} 
          onChange={this.onChange} placeholder="exemple:user@gmail.com" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePhoto">Photo</Label>
          <Input type="url" name="photo" id="examplePhoto" value={this.state.photo} 
          onChange={this.onChange} placeholder="Please enter your Photo......." />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input type="password" name="password" id="examplePassword" value={this.state.password} 
          onChange={this.onChange} placeholder="Please write your password name......." />
        </FormGroup>
      </Container>
                
                
              </ModalBody>
              <ModalFooter>
               
                <Button onClick={this.toggleEdit && this.onEditProfilSalleDeSport} color="primary">Save</Button>
               
              </ModalFooter>
            </Modal>

              <Modal isOpen={this.state.modal1} toggleEdit1={this.toggleEdit1} className="cascading-modal modalpromotionuser">

              <div className="modal-header primary-color white-text" >
                <h4 className="title">
                  <Fa className="fa fa-pencil" /> Edit GYM</h4>
                <button type="button" className="close" onClick={this.toggleEdit1}>
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <ModalBody className="grey-text">
              < Container>
              <Row>
          <Col lg="6" md="6">
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
        </Col>
        <Col lg="6" md="6">
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
        </Col>
        </Row>
      </Container>
                
                
              </ModalBody>
              <ModalFooter>
                <Button onClick={this.toggleEdit1} color="primary">Valid</Button>
               
              </ModalFooter>
            </Modal>

              </div>
  )}
}
const mapStateToProps = state => {
  return {
    ProfilGYM_Array: state.ProfilGYM_Reducer
  };
};

const mapDispacthToProps = dispatch => {
  return {
    onEditProfilSalleDeSportReducerAction: GYM => {
      dispatch({
        type: "EDIT_PROFIL_GYM",
        editedPrfilGym: GYM
      });
    }
  };
};


export default connect(
  mapStateToProps,
  mapDispacthToProps)(ProfilSalleDeSport);

