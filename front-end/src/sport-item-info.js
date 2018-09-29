import React, { Component } from 'react';
import { Mask, Fa, View, Badge,Container, Row, Col, Button} from 'mdbreact';
import Navbar from "./navbar.js"
import { connect } from "react-redux";
import TeamPage from "./coach.js"

class SportPageInfo extends Component {
  constructor(props) {
      super(props);
  }


  render()
  {
    let SalledeSport = this.props.sports.filter(e => e.NomSalledeSport === this.props.NomSalledeSport)[0];
    console.log(this.props.sports)

  return(
      <div className='description-salle-de-sport-container' style={{ 
        backgroundImage:"url('http://www.allwhitebackground.com/images/2/2273.jpg"

        ,backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
    <Container style={{paddingTop: "70px"}}>
      <Row>
        <Col lg="5" xl="4">
          <View hover className="rounded z-depth-1-half mb-lg-0 mb-4">
            <img className="img-fluid" src= {SalledeSport.picture} alt="Sample image" style={{width:"100%"}}/>

                      </View>
        </Col>
        <Col lg="7" xl="8">
          <h3 className="font-weight-bold mb-3 p-0"><strong>{SalledeSport.NomSalledeSport}</strong></h3>
          <p className="dark-grey-text">{SalledeSport.description}</p>
          <p><a className="font-weight-bold">Lieu :</a> {SalledeSport.lieu}</p>
          <p><a className="font-weight-bold">Adresse:</a> {SalledeSport.adresse}</p>
          <p><a className="font-weight-bold">Telephone :</a> {SalledeSport.telephone}</p>
          <p><a className="font-weight-bold">Coures :</a> {SalledeSport.courses}</p>
          <Button color="primary" size="md">Reservez </Button>
          <img className='img-fluid text-right' 
          src= "https://i.redditmedia.com/aF7xKqCsGVN3x8qfh5mrgCuQTr_JAUjM5hYp1RU4jUY.jpg?w=216&s=caef574d2bfee91e1b52416b15d6d5b8"
          lt="Sample image" className="pull-right img-responsive" style={{width:"20%"}} />
          
           

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
            <img className="img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST36Nh_i0lmnrjIkHd5D9u_fTU1bMImsQ17iqJNqnZ954mhhW0VA" alt="Sample image"/>
            <a>
              <Mask overlay="white-slight" className="waves-light"/>
            </a>
          </View>
          </Col>

        <Col md="12" lg="4" className="mb-lg-0 mb-5">
          <View hover rounded className="z-depth-1-half mb-4">
            <img className="img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjpiHGz4USKe3eJdSEIbZGFRMFhSdXgWhpGBuAOuhm1hlOuQKdXA" alt="Sample image"/>
            <a>
              <Mask overlay="white-slight" className="waves-light"/>
            </a>
          </View>
          </Col>

        <Col md="12" lg="4" className="mb-lg-0 mb-5">
          <View hover rounded className="z-depth-1-half mb-4">
            <img className="img-fluid" src="http://www.pagesport.tn/wp-content/uploads/2017/08/coco-club.jpg" alt="Sample image"/>
            <a>
              <Mask overlay="white-slight" className="waves-light"/>
            </a>
          </View>
          
        </Col>
      </Row>
    </Container>
    </Container>
    </div>
  );}
}

const mapStateToProps = state => {
  return {
      sports: state.add_salle_sportReducer
  }
}

export default connect(
  mapStateToProps)(SportPageInfo);

