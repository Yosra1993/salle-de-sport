import React, { Component } from 'react';
import SportItem from './Sport-Item.js'
import './css/sport_list.css';
class SportList extends Component {
    constructor(props) {
        super(props);
        this.state = { sports:[{
            img:require("./images/ExtraFitness.PNG"),
             nameSalledeSport:'gym1',
             lieu:'sahloul RueAAAAAAAAAAAA',

        },
        {
            img:require("./images/ExtraFitness.PNG"),
           
          nameSalledeSport:'Fitness',
          lieu:'khzema RueAAAAAAAAAAAA',

        }
    ]};
    }
    render() {
        return (
            <div className='sport_list'>
      
    { 
          this.state.sports.map(elm=> <SportItem key={elm.id} sport={elm} />)  
    }
     
    </div>
        );
    }
}

export default SportList;