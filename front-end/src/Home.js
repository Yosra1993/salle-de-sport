import React, { Component } from 'react';
import {Router, Route} from 'react-router-dom'
import Navbar from './navbar';
import Header from './Header';
import AboutUs from './About-us';
import CalculBodyMasse from'./CalculBodyMasse.js'
import ThumbnailsCarouselPage from './avisUser'
class Home extends Component {
  render() {
    return (
      
      <div className="home">
        <Navbar/>
        <Header/>
        <AboutUs/>
        <CalculBodyMasse/>
        <ThumbnailsCarouselPage/>
         
      </div>
    
     
     
    );
  }
}

export default Home;
