import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import {post} from './productActions'

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

const ProductForm = ({classes, dispatch}) => {
  
  let description
  let price

  return (
    <form className={classes.root}
        onSubmit={e => {
          e.preventDefault()
          if(!description.value.trim() || !price.value.trim()){
              return
          }
          dispatch(post(description.value, price.value))
          description.value = ''
          price.value = ''
        }}>
      <Typography variant="display2" gutterBottom>
          Cadastro
      </Typography>
      <Grid container spacing={16}>
        <Grid item xs={5}>
        <TextField
          inputRef={node => description = node}
          id="description"
          label="Descrição"
          className={classes.textFieldDesc}
          margin="normal"
        />
        </Grid>
        <Grid item xs={3}>
        <TextField
          inputRef={node => price = node}
          id="price"
          label="Preço"
          placeholder="Ex.: 11.99"
          className={classes.textFieldPrice}
          margin="normal"
          InputProps={{
            startAdornment: <InputAdornment position="start">R$</InputAdornment>
          }}
        />
        </Grid>
        <Grid item xs={1}>
        <Button type='submit' variant='fab' color='primary' aria-label='Post' className={classes.button}>
          <AddIcon />
        </Button>
        </Grid>
      </Grid>
    </form>
  );
}

ProductForm.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(connect()(ProductForm));
