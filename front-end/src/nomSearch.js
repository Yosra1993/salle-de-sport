import React from 'react'
import { Icon, Input } from 'semantic-ui-react'
import { connect } from "react-redux";
import './css/Search.css';
import './css/searchnom.css'

const InputExampleIconElement = ({value='',onChange= ()=>{}}) => (

  <Input icon={<Icon name='search' inverted circular link />} placeholder='Search...' value={value}
  type='text' onChange={(event) => {onChange(event.target.value)}}
    style={{height:"45px",marginLeft:"-101%",width: "89%"}}/>

)

const mapStateToProps = state => {
  return {
      value: state.SearchReducer
  }
}

const mapDispatchToProps = dispatch => {
  return {
      onChange: (newTitleFilter) => {
          dispatch({
              type: 'SET_NAMEGYM_FILTER',
              NomSalledeSport: newTitleFilter
          })
      }
  }
}

export default connect(
  mapStateToProps,mapDispatchToProps)(InputExampleIconElement);
