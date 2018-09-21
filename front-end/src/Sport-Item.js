import React, { Component } from 'react';
import {Card,CardImage,CardBody,Fa,CardTitle,CardText} from 'mdbreact';

const SportItem =({sport:{img,nameSalledeSport,lieu}})=>
    
    {
        return (
            <Card style={{width:'25%', marginLeft:"3%"}}>
        
            <CardImage top src={img} overlay="white-slight" hover waves alt="Card image cap"/>
            <CardBody>
              <a className="activator waves-effect waves-light mr-4"><Fa icon="share-alt"></Fa></a>
              <CardTitle>{nameSalledeSport}</CardTitle>
              <hr />
              <CardText>{lieu}</CardText>
              <a href="#!" className="black-text d-flex justify-content-end"><h5>More Informations <Fa icon="angle-double-right"></Fa></h5></a>
            </CardBody>
          </Card> 
        );}
    





export default SportItem;