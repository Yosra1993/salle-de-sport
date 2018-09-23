import React from 'react';
import {Route} from 'react-router-dom'
import Inscription from './inscription.js'
<<<<<<< HEAD
import Event from './event-promo.js'
=======
import SportList from "./SportList.js"
>>>>>>> 9f313a9cac027531e4da0a4b85622d35837aa35e
import Home from './Home'
import AboutUs from './About-us'
const Routes = () => {
    return (
        <div>
            <Route exact path="/" component={Home}/>
            <Route exact path="/inscription" component={Inscription}/>
<<<<<<< HEAD
            <Route exact path="/evenement" component={Event}/>
            <Route exact path="/about-us" component={AboutUs}/>
=======
            <Route exact path="/ListSelles-De-Sport" component={SportList}/>
>>>>>>> 9f313a9cac027531e4da0a4b85622d35837aa35e
        </div>
    );
};

export default Routes;