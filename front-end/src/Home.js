import React, { Component } from 'react';

import Navbar from './navbar';
import Header from './Header';
import AboutUs from './About-us';
import CalculBodyMasse from'./CalculBodyMasse.js'
import AvisUser from './AvisUser.js'
import Login from './login.js'
import FooterPage from'./footer'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
class Home extends Component {
  render() {
    return (
    
      <div className="home">
 
        <Header/> 
         <Login/>
        <AboutUs/>
        <CalculBodyMasse/>
        <AvisUser/>
         <FooterPage/>
         
      </div>
    
     
     
    );
  }
}
const mapStateToProps = state => {
  return {
    connectedUser : state.UserReducer
  }
}

const mapDispatchToProps = dispatch => {
  return {
  
  
  }
}


export default connect(mapStateToProps, mapDispatchToProps) (Home);
