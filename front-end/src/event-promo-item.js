import React, { Component } from 'react';
import { Container, Row, Col, Mask, Fa, View, Button} from 'mdbreact';
 import FooterPage  from './footer.js'
 import Header from './navbar'

const EventItem = (props) => {
  return(
   <Container>
     <Header/>
      <Row>
        <Col lg="7">
          <a className="pink-text">
            <h6 className="font-weight-bold mb-3">
              <Fa icon="image" className="pr-2"></Fa>{props.event.typepromo}
            </h6>
          </a>
          <h3 className="font-weight-bold mb-3 p-0"><strong>{props.event.nameSalledeSport}</strong></h3>
          <p>{props.event.description}</p>
          <p>A <a><strong>{props.event.lieu}</strong></a>, {props.event.date}</p>
          <Button color="pink" size="md" className="mb-lg-0 mb-4 waves-light">Participe</Button>
        </Col>
        <Col lg="5">
          <View className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
            <img className="img-fluid" src={props.event.picture} alt="Sample image"/>
            <a><Mask overlay="white-slight"/></a>
          </View>
        </Col>
      </Row>
      </Container>
    
      )}
     export default EventItem 