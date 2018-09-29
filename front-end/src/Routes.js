import React from 'react';
import {Route} from 'react-router-dom'
import Inscription from "./inscription.js"
import SportList from "./SportList.js"
import SportItemsInfo from "./sport-item-info.js"
import PageSalleDeSport from "./pageSalledeSport"
import PageUser from './PageUser.js'
import Eventliste from './event-promo-liste.js'
import Home from './Home'
import AboutUs from './About-us'
import AddPromotionEvent from './AddPromotion-Event'
import EditPromotionEvent from './EditPromotionEvent'
import FormGym from './formGym.js'
const Routes = () => {
    return (
        <div>
            <Route exact path="/" component={Home}/>
            <Route exact path="/inscription" component={Inscription}/>
            <Route exact path="/ListSalles-De-Sport" component={SportList}/>
            <Route exact path="/Salle-De-Sport/:NomSalledeSport"
          
          render={props => (
            <SportItemsInfo
            NomSalledeSport={props.match.params.NomSalledeSport}
            />
            )}/>
        
            <Route exact path="/Profil-salle-de-Sport" component={PageSalleDeSport}/>
            <Route exact path="/about-us" component={AboutUs}/>
            <Route exact path="/evenement" component={Eventliste}/>
            <Route exact path="/Profil-user" component={PageUser}/>
            <Route exact path="/Add-Promotion-Event" component={AddPromotionEvent}/>
            <Route exact path="./form-Gym-remplir" component={FormGym}/>
            <Route exact path="/Edit-Promotion-Event/:typepromo" render={props => 
            <EditPromotionEvent typepromo={props.match.params.typepromo} />}
             />
          
          
        



        </div>
    );
};

export default Routes;