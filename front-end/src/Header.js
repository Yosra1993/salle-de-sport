
import React, { Component } from 'react';
import {
       Col, Form,
    FormGroup,Input,
    Button,
  } from 'reactstrap';
  import Typist from 'react-typist';
  import './css/Header.css';
import img from './images/banner-bg.jpg'
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
                                     <h1>THIS IS A LIFE STYLE THERE IS NO FINISH LINE</h1>
  
                      </Typist>
                         
                      </CardTitle>
                      <CardText>
                      <Form className="form">
          <Col>
            <FormGroup>
              <Input
                type="text"
                name="region"
                id="exampleregion"
                placeholder="Exp : Sousse"
              />
            </FormGroup>
          </Col>
          
          <Button color="danger">Submit</Button>
        </Form>
                      </CardText>
                      
                    </CardImgOverlay>
                  </Card>
                </div>
          );
        }
      }
      
      export default Header;