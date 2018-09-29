import React, { Component } from 'react';
import { Container, Row, Col, Mask, Fa, View, Button, ToastContainer, toast} from 'mdbreact';
import { connect } from "react-redux";
import axios from 'axios';
import Navbar from './navbar'

const notify=(type)=>{
  return () => {
    switch (type) {

      case 'info':
      toast.info('votre participation est bien recu verifier votre compte svp!!', {
        autoClose: 5000
        });
        break;
      
  };
}}

const onAddPromotionEventuser= () => {
  axios
    .post("/EventPromotion", this.state)
    .then(() => this.props.onAddPromotionEventuserReducerAction(this.state))
    .catch(err => alert(err));
}

const EventItem = ({event:{typepromo="",nameSalledeSport="",description="",date="",lieu="",picture="https://www.lyoncapitale.fr/wp-content/themes/siteorigin-lyoncap/images/actularge.jpg"}}) => {
  return(
   <Container>
     <Navbar/>
      <Row>
        <Col lg="7" className="section-promotion-event">
            <h5 className=" promotype font-weight-bold mb-3">
              <Fa icon="image" className="pr-2"></Fa>{typepromo}
            </h5>
          <h3 className="font-weight-bold nameofgym mb-3 p-0"><strong>Name of Gym: {nameSalledeSport}</strong></h3>
          <p>{description}</p>
          <p>A <a><strong>{lieu}</strong></a>, {date}</p>
          <React.Fragment>
          <Button size="md" className="mb-lg-0 mb-4 btn btn-participation "onClick={notify('info')}>
          Participe</Button>
          <ToastContainer
          hideProgressBar={true}
          newestOnTop={true}
          autoClose={5000}
        />
          </React.Fragment>
        </Col>
        <Col lg="5">
          <View className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
            <img className="img-fluid" src={picture} alt="Sample image"/>
            <a><Mask overlay="white-slight"/></a>
          </View>
        </Col>
      </Row>
      <hr className="my-5"/>
      </Container>
    
      )}

      const mapStateToProps = state => {
        return {
      
        };
      };
      
      const mapDispacthToProps = dispatch => {
        return {
          onAddPromotionEventuserReducerAction: promotion_eventuser => {
            dispatch({
              type: "ADD_PROMOTION/EVENTU-SER",
              new_PromotionEventuser:promotion_eventuser
            });
          }
        };
      };
      
      export default connect(
        mapStateToProps,
        mapDispacthToProps)(EventItem);
     