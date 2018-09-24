import React from 'react';
import {Route} from 'react-router-dom'
import Inscription from './inscription.js'
import Eventliste from './event-promo-liste.js'
import Home from './Home'
import AboutUs from './About-us'
import SportList from './SportList'
const Routes = () => {
    return (
        <div>
            <Route exact path="/" component={Home}/>
            <Route exact path="/inscription" component={Inscription}/>
            <Route exact path="/evenement" component={Eventliste}/>
            <Route exact path="/about-us" component={AboutUs}/>
            <Route exact path="/ListSelles-De-Sport" component={SportList}/>
        </div>
    );
};

export default Routes;