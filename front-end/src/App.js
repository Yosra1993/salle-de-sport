import React, { Component } from 'react';
import { Grid} from 'react-bootstrap';
import {Router, Route} from 'react-router-dom'
import Navbar from './navbar';
import Header from './Header';
import AboutUs from './About-us';
import CalculBodyMasse from'./CalculBodyMasse.js'
import ThumbnailsCarouselPage from './avisUser'
import './css/App.css';
import Login from './login.js'
import Routes from './Routes'
import {BrowserRouter} from 'react-router-dom'
class App extends Component {
  render() {
    return (
      
      <Grid fluid className="App">
        <BrowserRouter>
        <Routes/>
        </BrowserRouter>

      </Grid>
    
     
     
    );
  }
}

export default App;
