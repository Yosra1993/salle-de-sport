import React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import './css/Search.css';


const styles = theme => ({
  button: {
    display: 'block',
    marginTop: theme.spacing.unit * 2,
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
});

class ControlledOpenSelect extends React.Component {
  constructor(props)
  {
    super(props)
  
  this.state = {
    open: false,
  };
  }

  handleClose = () => {
    this.setState({ open: false });
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  render() {
    const { classes } = this.props;
    console.log(this.props.courses)

    return (
      <form autoComplete="off" style={{marginLeft:"-53%"}}>
        <FormControl style={{width: "36%",backgroundColor: "white"}}>
          <InputLabel>Course</InputLabel>
          <Select
            open={this.state.open}
            onClose={this.handleClose}
            onOpen={this.handleOpen}
            value={this.props.value}
            onChange={(event) => {this.props.onChange(event.target.value)}}
            inputProps={{
              name: 'Course',
              id: 'demo-controlled-open-select',
            }}
          >
            <MenuItem value={"Fitness"}>Fitness</MenuItem>
            <MenuItem value={"Yoga"}>Yoga</MenuItem>
            <MenuItem value={"Musculation"}>Musculation</MenuItem>
            <MenuItem value={"Bodycombat"}>Bodycombat</MenuItem>
            <MenuItem value={"dance oriental"}>dance oriental</MenuItem>
            <MenuItem value={"Boxing"}>Boxing</MenuItem>

          </Select>
        </FormControl>
      </form>
      
    );
  }
}

const mapStateToProps = state => {
  return {
      value: state.CoursesSearchReducer
  }
}

const mapDispatchToProps = dispatch => {
  return {
      onChange: (newTitleFilter) => {
          dispatch({
              type: 'SET_COURSE_FILTER',
              courses: newTitleFilter
          })
      }
  }
}

ControlledOpenSelect.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(
  mapStateToProps,mapDispatchToProps) (withStyles(styles)(ControlledOpenSelect));
