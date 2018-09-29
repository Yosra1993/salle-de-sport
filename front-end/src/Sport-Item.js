import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {Card,CardImage,CardBody,Fa,CardTitle,CardText} from 'mdbreact';

const SportItem =({sport:{picture,NomSalledeSport,lieu}})=>
    
    {
        return (
            <Card style={{marginTop: "4%"}}>
            
        
            <CardImage top src={picture} overlay="white-slight" hover waves alt="Card image cap"/>
            <CardBody>
              <a className="activator waves-effect waves-light mr-4"><Fa icon="share-alt"></Fa></a>
              <CardTitle>{NomSalledeSport}</CardTitle>
              <hr />
              <CardText>{lieu}</CardText>
              <Link to={`/Salle-De-Sport/${NomSalledeSport}`}>
              <a className="black-text d-flex justify-content-end"><h5>More Informations <Fa icon="angle-double-right"></Fa></h5></a>
              </Link>
            </CardBody>
          </Card> 
        );}
    





export default SportItem;