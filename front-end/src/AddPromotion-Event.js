import React from "react";
import {Container, Button,  FormGroup, Label, Input, } from 'reactstrap';
import { connect } from "react-redux";
import axios from "axios";
import {Link} from 'react-router-dom'
class AddPromotionEvent extends React.Component {
  onAddPromotionEvent = () => {
    axios
      .post("/EventPromotion", this.state)
      .then(() => this.props.onAddPromotionEventReducerAction(this.state))
      .catch(err => alert(err));
  };
  
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
          <Input type="text" name="nameSalledeSport" id="exampleNameGym" onChange={this.onChange} placeholder="Please write the Name of Gym......." />
        </FormGroup>
          <FormGroup>
          <Label for="exampletype">Type Promotion/Event</Label>
          <Input type="text" name="typepromo" id="exampletype" onChange={this.onChange} placeholder="Type of Promotion Or Event" />
        </FormGroup>
        <FormGroup>
          <Label for="examplelieu">Lieu</Label>
          <Input type="text" name="lieu" id="examplelieu" onChange={this.onChange} placeholder="Please write the Lieu......." />
        </FormGroup>
        <FormGroup>
          <Label for="exampleDate">Date</Label>
          <Input type="date" name="date" id="exampleDate" onChange={this.onChange} placeholder="Please write Date......." />
        </FormGroup>
        <FormGroup>
          <Label for="examplePicture">Picture</Label>
          <Input type="text" name="picture" id="examplePicture" onChange={this.onChange} placeholder="http//image........" />
        </FormGroup>
        <FormGroup>
          <Label for="exampledescription">description</Label>
          <Input type="textarea" name="description" id="exampledescription" onChange={this.onChange} placeholder="Please write your description......." />
        </FormGroup>
         <Link to='Profil-salle-de-Sport'>
        <Button color="danger" onClick={this.onAddPromotionEvent}>Add +</Button>{' '}
        </Link>
      </Container>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {

  };
};

const mapDispacthToProps = dispatch => {
  return {
    onAddPromotionEventReducerAction: promotion_event => {
      dispatch({
        type: "ADD_PROMOTION/EVENT",
        new_PromotionEvent:promotion_event
      });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispacthToProps)(AddPromotionEvent);

