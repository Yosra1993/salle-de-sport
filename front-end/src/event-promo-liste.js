import React, { Component } from 'react';
import EventItem  from './event-promo-item.js'
import { connect } from "react-redux";
import axios from "axios";
import './css/promo-list.css';
class Eventliste extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
      axios.get("/EventPromotion").then(res => this.props.initPromotionEventList(res.data));
    }
    render() {
        return (
            <div className='event_list'>
      
    { 
          this.props.PromotionEventList.map((elm,i)=> <EventItem  key={i} event={elm} />)  
    }
     
    </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        PromotionEventList: state.PromotionEventReducer
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      initPromotionEventList: PromotionEvent => {
        dispatch({
          type: "UPDATE_PROMOTION_EVENT_LIST",
          PromotionEvent
        });
      }
    };
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Eventliste);