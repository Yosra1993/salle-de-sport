import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import './css/searchWithdate.css' 
class Example extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      startDate: moment()
    };
    this.handleChange = this.handleChange.bind(this);
  }
 
  handleChange(date) {
    this.setState({
      startDate: date
    });
  }
 
  render() {
      
    return (
    <div class='searchwithdata-container'>
    <DatePicker 
        
        selected={this.state.startDate}
        onChange={this.handleChange}/>;
    </div>
    )
  }
}
export default Example;