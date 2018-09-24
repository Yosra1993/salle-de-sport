import React, { Component } from 'react';
import { Grid} from 'react-bootstrap';
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
