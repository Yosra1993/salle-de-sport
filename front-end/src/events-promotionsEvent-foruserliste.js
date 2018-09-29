import React, { Component } from 'react';
import PromotionEventitemForUser from './Profil-Promotion-Event.itemForUser.js'
import { connect } from "react-redux";
import axios from "axios";
class EventPromotionlisteforuser extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
      axios.get("/EventPromotion").then(res => this.props.initPromotionEventListuser(res.data));
    }
     render() {
        return (
            <div className='event_list-promotion-foruser'>
      
    { 
          this.props.PromotionEventuserList.map(elm=> <PromotionEventitemForUser  key={elm.id} eventuser={elm} />)  
    }
     
    </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        PromotionEventuserList: state.PromotionEventuserReducer
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
        initPromotionEventListuser:PromotionEventuser => {
        dispatch({
          type: "UPDATE_PROMOTION_EVENT_LISTUSER",
          PromotionEventuser
        });
      }
    };
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps)
  (EventPromotionlisteforuser) ;