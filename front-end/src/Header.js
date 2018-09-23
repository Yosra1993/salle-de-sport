import React, { Component } from 'react';
  import Typist from 'react-typist';
  import {Link} from 'react-router-dom'
  import SearchLieu from "./Search"
  import SearchCategorie from "./CategorieSearch"
  import NomSearch from "./nomSearch"
  import './css/Header.css';
import img from './images/banner-bg.jpg'
import {Grid, Row, Col, Button} from "react-bootstrap"
import { Card, CardTitle, CardText, CardImg, CardImgOverlay } from 'reactstrap';

    class Header extends Component {
        render() {
            return (
                <div className='header container-fluid'>
                  <Card inverse>
                    <CardImg width="100%" src={img} alt="Card image cap" />
                    <CardImgOverlay>
                      <CardTitle>
                      <Typist>
                          <Typist.Delay ms={1000} />
                                     <h1 className="tilte-header-container">THIS IS A LIFE STYLE THERE IS NO FINISH LINE</h1>
  
                      </Typist>
                         
                      </CardTitle>
                      <Grid>
                      <Row className="show-grid">
                      <Col xs={6} md={3}>
                     < SearchLieu/>
                     </Col>
                     <Col xs={6} md={3}>
                      <SearchCategorie/>
                      </Col>
                      <Col xs={6} md={3}>
                      <NomSearch/>
                      </Col>
                      </Row>
                      </Grid>
                      <div class="col-md-6 text-right">
                      <Link to="/ListSalles-De-Sport">
                      <Button bsStyle="primary right" style={{marginTop:"5%",width:"21%"}}>Search</Button>
    
                      </Link>
                      </div>
                    </CardImgOverlay>
                  </Card>
                </div>
          );
        }
      }
      
      export default Header;