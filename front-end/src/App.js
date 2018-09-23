import React, { Component } from 'react';
import { Grid} from 'react-bootstrap';
<<<<<<< HEAD

=======
import {Router, Route} from 'react-router-dom'
import Navbar from './navbar';
import Header from './Header';
import AboutUs from './About-us';
import CalculBodyMasse from'./CalculBodyMasse.js'
import ThumbnailsCarouselPage from './avisUser'
import './css/App.css';
>>>>>>> 9f313a9cac027531e4da0a4b85622d35837aa35e
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
