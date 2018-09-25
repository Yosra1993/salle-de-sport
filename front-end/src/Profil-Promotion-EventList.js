import React, { Component } from 'react';
import PromotionEventItem from './Profil-Promotion-EventItem.js'
import { connect } from "react-redux";
import axios from "axios";
import {Button} from 'mdbreact';
import {Link} from 'react-router-dom'
class PromotionEventList extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        axios.get("/EventPromotion").then(res => this.props.initPromotionEventList(res.data));
      }
    render() {
        console.log(this.props.PromotionEventArray)
        return (
            
            <div className='promotion-event-list-container'>
            
            <Link to="/Add-Promotion-Event">
    <Button className="pull-right" color="Warning">Add +</Button>
    </Link>
    { 
          this.props.PromotionEventArray.map((elm,indice)=> <PromotionEventItem key={indice} value={elm} />)  
    }
     
    </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        PromotionEventArray: state.PromotionEventReducer
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
  )(PromotionEventList);

