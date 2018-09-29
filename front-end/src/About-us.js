import React, { Component } from 'react';
import { Grid, Jumbotron} from 'react-bootstrap';
import InfiniteCarousel from 'react-leaf-carousel';
import './css/AboutUs.css';
import Header from './navbar'

class  AboutUs extends Component {
    constructor(props) {
        super(props);
        
    }
    render() {
        return (
            <Grid fluid >
            <Header/> 
        <Jumbotron>
          <center>
  <h1 className="about-us-title" style={{fontSize:"250%"}}>About us</h1>
  </center>

  <h3 className="about-us-parg">
  Save your money and time, find a suitable gym for your needs is terms of distance, prices, and training, sport take helps find the perfect gym
  </h3>
  

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
    animationDuration= {150}
    
  >
    <div>
      <img
        alt=''
        src="https://image.freepik.com/free-photo/girl-background-active-lifestyle-people_1139-705.jpg"

      />
    </div>
    <div>
      <img
        alt=''
        src="https://www.wellness-sportclub.fr/wp-content/uploads/2016/08/depositphotos_36176015_original.jpg"
      />
    </div>
    <div>
      <img
        alt=''
        src="http://www.kostivere.ee/wp-content/uploads/2015/10/gym_instructor_courses_qualifications_container.jpg"
      />
    </div>
    <div>
      <img
        alt=''
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR22Glq3YQyN7fwvCAEi6eUHoVTMJS-lQoIpOc4xKvJ-Nlav_tjKQ"
      />
    </div>
    <div>
      <img
        alt=''
        src="https://kelseykinney.com/wp-content/uploads/2017/05/iStock-495353207-1030x687.jpg"
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