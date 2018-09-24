import React, { Component } from 'react';
import EventItem  from './event-promo-item.js'
import './css/promo-list.css';
class Eventliste extends Component {
    constructor(props) {
        super(props);
        this.state = { 
        events:[{
          picture:require("./images/promo1.PNG"),  
          nameSalledeSport:'Extra Fitness',
          typepromo:'Promotion Body combat',
          description:'On your gym anniversary run a promotion for the first 20 non-members that visit the gym. The special price largely depends on your monthly membership costs and the type of gym you own. If you have a one-to-one personal training company, it might be a little more costly for you to give six months for free with a 12-month contract versus a big box gym.',
          lieu:' OlympeGym',
          date:'12/5/2018'
        },
        {
            picture :require("./images/promo2.PNG"),  
            nameSalledeSport:'Extra Fitness',
            typepromo:'Promotion musculation',
            description:'On your gym anniversary run a promotion for the first 20 non-members that visit the gym. The special price largely depends on your monthly membership costs and the type of gym you own. If you have a one-to-one personal training company, it might be a little more costly for you to give six months for free with a 12-month contract versus a big box gym.',
            lieu:' OlympeGym',
            date:'12/5/2018'
            
          },
          {
            picture:require("./images/promo2.PNG"),  
            nameSalledeSport:'Extra Fitness',
            typepromo:'Open day ',
            description:'On your gym anniversary run a promotion for the first 20 non-members that visit the gym. The special price largely depends on your monthly membership costs and the type of gym you own. If you have a one-to-one personal training company, it might be a little more costly for you to give six months for free with a 12-month contract versus a big box gym.',
            lieu:' OlympeGym',
            date:'12/5/2018'
          },
       
          {
             picture:require("./images/promo1.PNG"),  
            nameSalledeSport:'gym1',
            typepromo:'Promotion musculation',
            description:'On your gym anniversary run a promotion for the first 20 non-members that visit the gym. The special price largely depends on your monthly membership costs and the type of gym you own. If you have a one-to-one personal training company, it might be a little more costly for you to give six months for free with a 12-month contract versus a big box gym.',
            lieu:' OlympeGym',
            date:'12/5/2018'
          },
       ] };
    }
    render() {
        return (
            <div className='event_list'>
      
    { 
          this.state. events.map(elm=> <EventItem  key={elm.id} event={elm} />)  
    }
     
    </div>
        );
    }
}

export default Eventliste ;