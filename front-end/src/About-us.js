import React, { Component } from 'react';
import { Grid, Jumbotron, Button} from 'react-bootstrap';
import InfiniteCarousel from 'react-leaf-carousel';
import './css/AboutUs.css';
import img2 from './images/img2.jpg'

class  AboutUs extends Component {
    constructor(props) {
        super(props);
        
    }
    render() {
        return (
            <Grid fluid >
        <Jumbotron>
  <h1 style={{fontSize:"250%"}}>About us</h1>

  <p>
    This is a simple hero unit, a simple jumbotron-style component for calling
    extra attention to featured content or information.
  </p>
  

<InfiniteCarousel
    breakpoints={[
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ]}
    dots={true}
    showSides={true}
    sidesOpacity={.5}
    sideSize={.1}
    slidesToScroll={3}
    slidesToShow={3}
    scrollOnDevice={true}
    autoCycle={true}
    animationDuration= {200}
    
  >
    <div>
      <img
        alt=''
        src={img2}
      />
    </div>
    <div>
      <img
        alt=''
        src={img2}
      />
    </div>
    <div>
      <img
        alt=''
        src={img2}
      />
    </div>
    <div>
      <img
        alt=''
        src={img2}
      />
    </div>
    <div>
      <img
        alt=''
        src={img2}
      />
    </div>
    
  </InfiniteCarousel>
,
</Jumbotron>
</Grid>
        );
    }
}

export default AboutUs ;