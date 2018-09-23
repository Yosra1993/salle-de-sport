import React, { Component } from 'react';
import { Carousel, CarouselInner, CarouselItem,Fa, Container } from 'mdbreact';
import './css/avisUser.css';


class ThumbnailsCarouselPage extends Component {

  render(){
    return(
       <center>
      <Container>
        
        <Carousel
          activeItem={1}
          length={3}
          showControls={true}
          showIndicators={false}
          thumbnails
          className="z-depth-1">
          <CarouselInner>
            <CarouselItem itemId="1">
              <img className="d-block w-100" src="https://www.cala-consulting.com/images/coach-joanna-menezes.png" alt="First slide"/>
              <h1 className="font-weight-bold">Sarah</h1>
              <h4>Developer Full stack JS</h4>
              <p><Fa icon="quote-left"></Fa>  je suis tres satisfaite et jai trouvé ce site facile a l'utiliser et tu peux trouver tout!!! </p>
              <Fa icon="star" className="blue-text"> </Fa>
                  <Fa icon="star" className="blue-text"> </Fa>
                  <Fa icon="star" className="blue-text"> </Fa>
                  <Fa icon="star" className="blue-text"> </Fa>
                  <Fa icon="star-half-full" className="blue-text"> </Fa>
            </CarouselItem>
            <CarouselItem itemId="2">
              <img className="d-block w-100" src="http://assets.hellocoton.fr/avatars/square-256-283246-2d12df559a8dfd0ee109e60f74cf8f18.png" alt="Second slide" />
              <h1 className="font-weight-bold">Sabina Kelli</h1>
              <h4>Secretaire</h4>
              <p> <Fa icon="quote-left"></Fa>  j'aiiiiime ce site ❤❤❤ </p>
              <Fa icon="star" className="blue-text"> </Fa>
                  <Fa icon="star" className="blue-text"> </Fa>
                  <Fa icon="star" className="blue-text"> </Fa>
                  <Fa icon="star" className="blue-text"> </Fa>
                  <Fa icon="star" className="blue-text"> </Fa>
            </CarouselItem>
            <CarouselItem itemId="3">
              <img className="d-block w-100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh8iWygYeNlQ4n3D7u0SclOTkQGvSio6ieJNohLSDzEZJ7f9KN" alt="Third slide" />
              <h1 className="font-weight-bold">Marwen</h1>
              <h4>etudiant</h4>
              <p><Fa icon="quote-left"></Fa>  le site est tres jolie il fonctionne bien.  </p>
              <Fa icon="star" className="blue-text"> </Fa>
                  <Fa icon="star" className="blue-text"> </Fa>
                  <Fa icon="star" className="blue-text"> </Fa>
                  <Fa icon="star-o" className="blue-text"> </Fa>
                  <Fa icon="star-o" className="blue-text"> </Fa>
            </CarouselItem>
          </CarouselInner>
        </Carousel>
        
      </Container>
      </center>
    );
  }
}

export default ThumbnailsCarouselPage;