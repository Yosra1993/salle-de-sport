import React from 'react';
import {Route} from 'react-router-dom'
import Inscription from "./inscription.js"
import SportList from "./SportList.js"
import ItemsportItems from "./sport-item-info.js"
import PageSalleDeSport from "./pageSalledeSport"
import PageUser from './PageUser.js'
import Eventliste from './event-promo-liste.js'
import Home from './Home'
import AboutUs from './About-us'
import AddProduct from './AddPromotion-Event'
const Routes = () => {
    return (
        <div>
            <Route exact path="/" component={Home}/>
            <Route exact path="/inscription" component={Inscription}/>
            <Route exact path="/ListSalles-De-Sport" component={SportList}/>
            <Route exact path="/Salle-De-Sport" component={ItemsportItems}/>
            <Route exact path="/Profil-salle-de-Sport" component={PageSalleDeSport}/>
            <Route exact path="/about-us" component={AboutUs}/>
            <Route exact path="/evenement" component={Eventliste}/>
            <Route exact path="/Profil-user" component={PageUser}/>
            <Route exact path="/Add-Promotion-Event" component={AddProduct}/>


        </div>
    );
};

export default Routes;