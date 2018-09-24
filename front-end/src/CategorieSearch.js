import React from 'react';
import PropTypes from 'prop-types';
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
  state = {
    lieu: '',
    open: false,
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  render() {
    const { classes } = this.props;

    return (
      <form autoComplete="off" style={{marginLeft:"-53%"}}>
        <FormControl style={{width: "36%",backgroundColor: "white"}}>
          <InputLabel>Lieu</InputLabel>
          <Select
            open={this.state.open}
            onClose={this.handleClose}
            onOpen={this.handleOpen}
            value={this.state.lieu}
            onChange={this.handleChange}
            inputProps={{
              name: 'lieu',
              id: 'demo-controlled-open-select',
            }}
          >
            <MenuItem value={10}>Hammem Sousse</MenuItem>
            <MenuItem value={20}>Sahloul</MenuItem>
            <MenuItem value={30}>Khzema</MenuItem>
          </Select>
        </FormControl>
      </form>
      
    );
  }
}

ControlledOpenSelect.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ControlledOpenSelect);