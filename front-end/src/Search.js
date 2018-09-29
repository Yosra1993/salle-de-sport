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
    console.log(this.props.value)

    return (
      <form autoComplete="off">
        <FormControl style={{width: "50%",backgroundColor: "white"}}>

          <InputLabel>Lieu</InputLabel>
          <Select
            open={this.state.open}
            onClose={this.handleClose}
            onOpen={this.handleOpen}
            value={this.props.value}
            onChange={(event) => {this.props.onChange(event.target.value)}}
            inputProps={{
              name: 'lieu',
              id: 'demo-controlled-open-select',
            }}
          >
            <MenuItem value={"Hammamet"}>Hammamet</MenuItem>
            <MenuItem value={"Tunis"}>Tunis</MenuItem>
            <MenuItem value={"Sousse"}>Sousse</MenuItem>
            <MenuItem value={"Monastir"}>Monastir</MenuItem>
            <MenuItem value={"Gabes"}>Gabes</MenuItem>


          </Select>
        </FormControl>
      </form>
      
    );
  }
}

const mapStateToProps = state => {
  return {
      value: state.LieuSearchReducer
  }
}

const mapDispatchToProps = dispatch => {
  return {
      onChange: (newTitleFilter) => {
          dispatch({
              type: 'SET_LIEU_FILTER',
              lieu: newTitleFilter
          })
      }
  }
}

ControlledOpenSelect.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(
  mapStateToProps,mapDispatchToProps) (withStyles(styles)(ControlledOpenSelect));
