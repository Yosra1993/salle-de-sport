import React from 'react';
import {Container, Button,  FormGroup, Label, Input } from 'reactstrap';


 class FormGym extends React.Component {

  
  render() {
    return (
      < Container style={{paddingTop: "70px"}}>
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

        <Button color="danger" onClick={this.getCheckedValue()}>Save</Button>{' '}
      </Container>
    );
  }}

export default FormGym;