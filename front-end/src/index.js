import React from 'react';
import ReactDOM from 'react-dom';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'semantic-ui-css/semantic.min.css';
import 'mdbreact';
import './css/index.css';
import App from './App';
import Reducers from './Reducers'
import {Provider} from 'react-redux'
import {createStore} from 'redux'

let store = createStore(Reducers)


ReactDOM.render(( 

<Provider store= {store} >
<App/> 
</Provider>

), document.getElementById('root'));

