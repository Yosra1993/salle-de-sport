import React, { Component } from 'react';
import EventItem  from './event-promo-item.js'
import { Container} from 'mdbreact';

import { connect } from "react-redux";
import axios from "axios";
import SearchPromotionEvent from './SearchPromotionEvent'
import SearchPromotionOrEvent from './SerachPromotionOREvent'
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
            <div className='event_list' style={{paddingTop: "70px"}}>
            <Container className='serach_promotion_event'>
            <h3 style={{marginTop: "1%",color: "white"}}>Search: </h3>
            <SearchPromotionOrEvent/>
            <SearchPromotionEvent/>
            </Container>
            
            <div className='promotion-event-container' style={{ 
            backgroundImage:"url('http://www.allwhitebackground.com/images/2/2273.jpg"

            ,backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
            <hr className="my-5" />
      
    { 
          this.props.PromotionEventList.map((elm,i)=> <EventItem  key={i} event={elm} />)  
    }
     </div>
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