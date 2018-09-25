import React from "react";
import {Container, Button,  FormGroup, Label, Input, } from 'reactstrap';
import { connect } from "react-redux";
import axios from "axios";
import {Link} from 'react-router-dom'
class EditPromotionEvent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameSalledeSport: "",
      typepromo: "",
      lieu:"",
      Date:"",
      Picture:"",
      description: "",
    };
  }

  onEditPromotionEvent = () => {
    axios
      .put(`/EventPromotion/${this.state._id}`, {
        nameSalledeSport: this.state.nameSalledeSport,
        typepromo: this.state.typepromo,
        lieu: this.state.lieu,
        Date: this.state.Date,
        Picture: this.state.Picture,
        description: this.state.description

      })
      .then(() => this.props.onEditPromotionEventReducerAction(this.state))
      .catch(err => alert(err));
  };
  
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  componentDidMount() {
    this.setState({
      ...this.props.ProductsList.filter(e => e.name === this.props.name)[0]
    });
  }

  render() {
    return (
      <div className="edit-promotion-event-container" style={{paddingTop: "70px"}}>
        < Container>
        <FormGroup>
          <Label for="exampleNameGym">Name Gym</Label>
          <Input type="text" name="nameSalledeSport" id="exampleNameGym" 
          value={this.state.nameSalledeSport} onChange={this.onChange} placeholder="Please write the Name of Gym......." />
        </FormGroup>
          <FormGroup>
          <Label for="exampletype">Type Promotion/Event</Label>
          <Input type="text" name="typepromo" id="exampletype" 
          value={this.state.typepromo} onChange={this.onChange} placeholder="Type of Promotion Or Event" />
        </FormGroup>
        <FormGroup>
          <Label for="examplelieu">Lieu</Label>
          <Input type="text" name="lieu" id="examplelieu" 
          value={this.state.lieu} onChange={this.onChange} placeholder="Please write the Lieu......." />
        </FormGroup>
        <FormGroup>
          <Label for="exampleDate">Date</Label>
          <Input type="date" name="date" id="exampleDate" 
          value={this.state.date} onChange={this.onChange} placeholder="Please write Date......." />
        </FormGroup>
        <FormGroup>
          <Label for="examplePicture">Picture</Label>
          <Input type="text" name="picture" id="examplePicture" 
          value={this.state.picture} onChange={this.onChange} placeholder="http//image........" />
        </FormGroup>
        <FormGroup>
          <Label for="exampledescription">description</Label>
          <Input type="textarea" name="description" id="exampledescription" 
          value={this.state.description} onChange={this.onChange} placeholder="Please write your description......." />
        </FormGroup>
         <Link to='/evenement'>
        <Button color="danger" onClick={this.onEditPromotionEvent}>Valid</Button>{' '}
        </Link>
      </Container>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ProductsList: state.PromotionEventReducer
  };
};

const mapDispacthToProps = dispatch => {
  return {
    onEditPromotionEventReducerAction: product => {
      dispatch({
        type: "EDIT_PROMOTION/EVENT",
        editedPromotionEvent: product
      });
    }
  };
};


export default connect(
  mapStateToProps,
  mapDispacthToProps)(EditPromotionEvent);

