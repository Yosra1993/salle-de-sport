import React, { Component } from 'react';
import { Container, Row, Col, Mask, Fa, View, Button} from 'mdbreact';
import { connect } from "react-redux";
import Navbar from './navbar'

const EventItem = ({event:{typepromo="",nameSalledeSport="",description="",date="",lieu="",picture="https://www.lyoncapitale.fr/wp-content/themes/siteorigin-lyoncap/images/actularge.jpg"}}) => {
  return(
   <Container>
     <Navbar/>
      <Row style={{paddingTop: "70px"}}>
        <Col lg="7">
          <a className="pink-text">
            <h6 className="font-weight-bold mb-3">
              <Fa icon="image" className="pr-2"></Fa>{typepromo}
            </h6>
          </a>
          <h3 className="font-weight-bold mb-3 p-0"><strong>{nameSalledeSport}</strong></h3>
          <p>{description}</p>
          <p>A <a><strong>{lieu}</strong></a>, {date}</p>
          <Button color="pink" size="md" className="mb-lg-0 mb-4 waves-light">Participe</Button>
        </Col>
        <Col lg="5">
          <View className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
            <img className="img-fluid" src={picture} alt="Sample image"/>
            <a><Mask overlay="white-slight"/></a>
          </View>
        </Col>
      </Row>
      </Container>
    
      )}

      const mapStateToProps = state => {
        return {};
      };
      export default connect(
        mapStateToProps,
        
      )(EventItem);
     