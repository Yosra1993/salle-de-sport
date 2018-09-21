import React from 'react';
import {Container, Button,  FormGroup, Label, Input, } from 'reactstrap';
 class Inscription extends React.Component {
  render() {
    return (
      < Container>
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

        <Button color="danger">Inscription</Button>{' '}
      </Container>
    );
  }
}
export default Inscription