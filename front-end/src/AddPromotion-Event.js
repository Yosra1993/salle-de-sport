import React from "react";
import {Container, Button,  FormGroup, Label, Input, } from 'reactstrap';
import { connect } from "react-redux";
class AddProduct extends React.Component {

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    return (
      <div className="add-promotion-event-container" style={{paddingTop: "70px"}}>
        < Container>
        <FormGroup>
          <Label for="exampleNameGym">Name Gym</Label>
          <Input type="text" name="Name" id="exampleNameGym" onChange={this.onChange} placeholder="Please write the Name of Gym......." />
        </FormGroup>
          <FormGroup>
          <Label for="exampletype">Type Promotion/Event</Label>
          <Input type="text" name="Type" id="exampletype" onChange={this.onChange} placeholder="Type of Promotion Or Event" />
        </FormGroup>
        <FormGroup>
          <Label for="examplelieu">Lieu</Label>
          <Input type="text" name="Lieu" id="examplelieu" onChange={this.onChange} placeholder="Please write the Lieu......." />
        </FormGroup>
        <FormGroup>
          <Label for="exampleDate">Date</Label>
          <Input type="date" name="number" id="exampleDate" onChange={this.onChange} placeholder="Please write Date......." />
        </FormGroup>
        <FormGroup>
          <Label for="examplePicture">Picture</Label>
          <Input type="text" name="picture" id="examplePicture" onChange={this.onChange} placeholder="http//image........" />
        </FormGroup>
        <FormGroup>
          <Label for="exampledescription">description</Label>
          <Input type="textarea" name="description" id="exampledescription" onChange={this.onChange} placeholder="Please write your description......." />
        </FormGroup>

        <Button color="danger" onClick={this.props.onAddProductReducerAction(this.state)}>Add +</Button>{' '}
      </Container>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispacthToProps = dispatch => {
  return {
    onAddProductReducerAction: promotion_event => {
      dispatch({
        type: "ADD_PROMOTION/EVENT",
        newPromotion_event: promotion_event
      });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispacthToProps)(AddProduct);

