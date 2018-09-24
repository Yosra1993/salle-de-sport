import React, { Component } from 'react';
import EventItem  from './event-promo-item.js'
import './css/promo-list.css';
import * as promotion from './data/promotion'
class Eventliste extends Component {
    constructor(props) {
        super(props);
        this.state = { 
        events:[]
        };
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