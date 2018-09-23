import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck,
 CardSubtitle, CardBody } from 'reactstrap';
 import FooterPage  from './footer.js'
 import Header from './navbar'
 import promo1 from './images/promo1.PNG'
 import promo2 from './images/promo2.PNG'
 import promo3 from './images/promo3.PNG'
 import promo4 from './images/promo4.PNG'
const Event = (props) => {
  return (
    <CardDeck  >
    <Header/>
 
      <Card >
        <CardImg top width="100%" src={promo3} alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
         <FooterPage/>
    </CardDeck>
   
  );
};

export default Event ;