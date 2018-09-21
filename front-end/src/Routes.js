import React from 'react';
import {Route} from 'react-router-dom'
import Inscription from './inscription.js'
import Home from './Home'

const Routes = () => {
    return (
        <div>
            <Route exact path="/" component={Home}/>
            <Route exact path="/inscription" component={Inscription}/>
        </div>
    );
};

export default Routes;