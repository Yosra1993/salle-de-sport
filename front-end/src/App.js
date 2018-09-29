import React, { Component } from 'react';
import { Grid} from 'react-bootstrap';
import './css/App.css';
import Routes from './Routes'
import NavBar from './navbar'
import Footer from './footer.js'
import {BrowserRouter} from 'react-router-dom'
class App extends Component {
  render() {
    return (
      
      <Grid fluid className="App">
        <BrowserRouter>
        <div>
        <NavBar/>
        <Routes/>
        <Footer/>
        </div>
        </BrowserRouter>

      </Grid>
    
     
     
    );
  }
}

export default App;
