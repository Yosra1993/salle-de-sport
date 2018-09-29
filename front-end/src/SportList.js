import React, { Component } from 'react';
import SportItem from './Sport-Item.js'
import { connect } from "react-redux";
import './css/sport_list.css';
class SportList extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            
            <div className='sport_list'style={{paddingTop: "70px", 
                backgroundImage:"url('http://www.allwhitebackground.com/images/2/2273.jpg"
    
                ,backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
    { 
          this.props.sports.map(elm=> <SportItem key={elm.id} sport={elm} />)  
    }
     
    </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        sports: state.add_salle_sportReducer.filter(
            el =>el.lieu.toLowerCase().includes(
                state.LieuSearchReducer.toLowerCase()
            )
            &&
            el.courses.toLowerCase().includes(
                state.CoursesSearchReducer.toLowerCase()
            )
                &&
                el.NomSalledeSport.toLowerCase().includes(
                state.SearchReducer.toLowerCase().trim()
                )
          )
    };
  };

export default connect(
    mapStateToProps)(SportList);
  