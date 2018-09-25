import React from 'react';
import {Container, Button,  FormGroup, Label, Input } from 'reactstrap';
import {Link} from 'react-router-dom'
import{Radio} from 'react-bootstrap'
import FormGym from './formGym.js'
 class Inscription extends React.Component {


  getCheckedValue=(radioObj)=>{
    for(var i = 1; i < 2; i++) {
      if(radioObj[i].checked) 
      return true
      else
		return false
    }
  }
  render() {
    return (
      < Container style={{paddingTop: "70px"}}>
          <FormGroup>
          <Label for="exampleFirstName">First Name</Label>
          <Input type="textarea" name="FirstName" id="exampleFirstName" placeholder="Please write your first name......." />
        </FormGroup>
        <FormGroup>
          <Label for="exampleLastName">Last Name</Label>
          <Input type="textarea" name="LastName" id="exampleLastName" placeholder="Please write your last name......." />
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
          <Label for="examplePassword">Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="Please write your password name......." />
        </FormGroup>

        <FormGroup>
      <Radio name="radioGroup" inline>
        User
      </Radio>{' '}
      <Radio name="radioGroup" inline>
        Gym
      </Radio>{' '}
      
    </FormGroup>
         <Link to='./form-Gym-remplir'>
        <Button color="danger" >Inscription</Button>{' '}
        </Link>
      </Container>
    );
  }
}
export default Inscription