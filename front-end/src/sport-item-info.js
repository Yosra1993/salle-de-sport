import React, { Component } from 'react';
import { Mask, Fa, View, Badge,Container, Row, Col, Button} from 'mdbreact';
import Navbar from "./navbar.js"
import TeamPage from "./coach.js"
const SportPage = () =>  {
  return(
      <div className='description-salle-de-sport-container'>
      <Navbar/>
    <Container style={{paddingTop: "70px"}}>
      <Row>
        <Col lg="5" xl="4">
          <View hover className="rounded z-depth-1-half mb-lg-0 mb-4">
            <img className="img-fluid" src= {require("./images/ExtraFitness.PNG")} alt="Sample image"/>
            
            <a><Mask overlay="white-slight"/></a>
          </View>
        </Col>
        <Col lg="7" xl="8">
          <h3 className="font-weight-bold mb-3 p-0"><strong>Extra Fitness</strong></h3>
          <p className="dark-grey-text">Le club EXTRA Fitness est un COMPLEXE SPORTIF indépendante récemment rénovée proposant des cours collectifs variés (renforcement musculaire, cardio, biking, aquagym...), ainsi qu'un espace spa, Jacuzzi, Hammam public et réserve, salon de coiffure et esthétique....</p>
          <p><a className="font-weight-bold">Lieu :</a> Sahloul</p>
          <p><a className="font-weight-bold">Adresse:</a> Rue Liberte Sahloul, 4054 SOUSSE</p>
          <p><a className="font-weight-bold">Telephone :</a> 56 66 88 88</p>
          <Button color="primary" size="md">Reservez </Button>
        </Col>
      </Row>
      <hr className="my-5"/>
      <TeamPage/>
      <hr className="my-5"/>
      
    <Container style={{maxWidth: '80%'}}>
      <h2 className="h1-responsive font-weight-bold my-5 text-center">Galerie</h2>
      <Row>
        <Col md="12" lg="4" className="mb-lg-0 mb-5">
          <View hover rounded className="z-depth-1-half mb-4">
            <img className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/86.jpg" alt="Sample image"/>
            <a>
              <Mask overlay="white-slight" className="waves-light"/>
            </a>
          </View>
          </Col>

        <Col md="12" lg="4" className="mb-lg-0 mb-5">
          <View hover rounded className="z-depth-1-half mb-4">
            <img className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/31.jpg" alt="Sample image"/>
            <a>
              <Mask overlay="white-slight" className="waves-light"/>
            </a>
          </View>
          </Col>

        <Col md="12" lg="4" className="mb-lg-0 mb-5">
          <View hover rounded className="z-depth-1-half mb-4">
            <img className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/52.jpg" alt="Sample image"/>
            <a>
              <Mask overlay="white-slight" className="waves-light"/>
            </a>
          </View>
          
        </Col>
      </Row>
    </Container>
    </Container>
    </div>
  );
}
export default SportPage;