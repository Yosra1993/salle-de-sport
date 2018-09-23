import React from 'react';
import {Route} from 'react-router-dom'
import Inscription from "./inscription.js"
import Event from './event-promo.js'
import SportList from "./SportList.js"
import ItemsportItems from "./sport-item-info.js"
import DoubleNavigationPage from "./profileSalledeSport"
import Home from './Home'
import AboutUs from './About-us'
const Routes = () => {
    return (
        <div>
            <Route exact path="/" component={Home}/>
            <Route exact path="/inscription" component={Inscription}/>
            <Route exact path="/ListSalles-De-Sport" component={SportList}/>
            <Route exact path="/Salle-De-Sport" component={ItemsportItems}/>
            <Route exact path="/Profil-salle-de-Sport" component={DoubleNavigationPage}/>
            <Route exact path="/evenement" component={Event}/>
            <Route exact path="/about-us" component={AboutUs}/>

        </div>
    );
};

export default Routes;