import React from 'react';
import {Route} from 'react-router-dom'
import Inscription from './inscription.js'
import SportList from "./SportList.js"
import Home from './Home'

const Routes = () => {
    return (
        <div>
            <Route exact path="/" component={Home}/>
            <Route exact path="/inscription" component={Inscription}/>
            <Route exact path="/ListSelles-De-Sport" component={SportList}/>
        </div>
    );
};

export default Routes;