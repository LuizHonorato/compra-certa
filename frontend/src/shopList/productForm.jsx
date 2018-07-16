import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/Close';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  textFieldDesc: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 500,
  },
  textFieldPrice: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 250,
  },
  button: {
    margin: theme.spacing.unit,
  },
  buttonDelete: {
    margin: theme.spacing.unit,
    backgroundColor: "#F44336",
    color: "#fff"
  }
});

function ProductForm(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={16}>
        <Grid item xs={5}>
        <TextField
          id="description"
          label="Descrição"
          className={classes.textFieldDesc}
          margin="normal"
        />
        </Grid>
        <Grid item xs={3}>
        <TextField
          id="price"
          label="Preço"
          className={classes.textFieldPrice}
          margin="normal"
          InputProps={{
            startAdornment: <InputAdornment position="start">R$</InputAdornment>
          }}
        />
        </Grid>
        <Grid item xs={2}>
        <Button variant='fab' color='primary' aria-label='Post' className={classes.button}>
          <AddIcon />
        </Button>
        <Button variant='fab' aria-label='Delete' className={classes.buttonDelete}>
          <CloseIcon />
        </Button>
        </Grid>
      </Grid>
    </div>
  );
}

ProductForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductForm);
