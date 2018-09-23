import React, { Component } from 'react';

import Navbar from './navbar';
import Header from './Header';
import AboutUs from './About-us';
import CalculBodyMasse from'./CalculBodyMasse.js'
import ThumbnailsCarouselPage from './avisUser'
import Login from './login.js'
import FooterPage from'./footer'
class Home extends Component {
  render() {
    return (
      
      <div className="home">
        <Navbar/>
        <Header/> 
         <Login/>
        <AboutUs/>
        <CalculBodyMasse/>
        <ThumbnailsCarouselPage/>
         <FooterPage/>
         
      </div>
    
     
     
    );
  }
}

export default Home;
