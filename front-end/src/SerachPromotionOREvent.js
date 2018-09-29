import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import './css/searchpromotionORevent.css';

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

class serachPromotion_Event extends React.Component {
  state = {
    Type: '',
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
      <form autoComplete="off">
        <Button className={classes.button} onClick={this.handleOpen}>
        </Button>
        <FormControl className={classes.formControl}>
          <InputLabel className='search-prom-OR-event' htmlFor="demo-controlled-open-select">Type</InputLabel>
          <Select
            open={this.state.open}
            onClose={this.handleClose}
            onOpen={this.handleOpen}
            value={this.state.Type}
            onChange={this.handleChange}
            inputProps={{
              name: 'Type',
              id: 'demo-controlled-open-select',
            }}
          >
            <MenuItem value={10}>Promotion</MenuItem>
            <MenuItem value={20}>Event</MenuItem>
          </Select>
        </FormControl>
      </form>
    );
  }
}
serachPromotion_Event.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(serachPromotion_Event);
