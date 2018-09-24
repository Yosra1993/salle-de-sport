import React, { Component } from 'react';
import { Grid} from 'react-bootstrap';
import './css/App.css';
import Routes from './Routes'
import Header from './navbar'
import {BrowserRouter} from 'react-router-dom'
class App extends Component {
  render() {
    return (
      
      <Grid fluid className="App">
        <BrowserRouter>
        <div>
        <Header/>
        <Routes/>
        </div>
        </BrowserRouter>

      </Grid>
    
     
     
    );
  }
}

export default App;
