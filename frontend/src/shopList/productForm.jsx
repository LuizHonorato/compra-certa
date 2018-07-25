import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import NumberFormat from 'react-number-format';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import TitlePage from '../common/template/header'
import {post} from './productActions'

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  textFieldDesc: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '100%'
  },
  textFieldPrice: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '100%'
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

function NumberFormatCustom(props) {
  const {onChange, inputRef} = props

  return (
    <NumberFormat
      ref={inputRef}
      onValueChange={values => {
        onChange({
          target: {
            value: values.value
          },
        });
      }}
      thousandSeparator
      prefix="R$"
    />
  );
}

NumberFormatCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
}

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
          dispatch(post(description.value, price.value.replace(/,/g, '.')))
          description.value = ''
          price.value = ''
        }}>
        <Grid container spacing={16}>
        <Grid item xs={12}>
          <TitlePage label='Cadastro' />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            inputRef={node => description = node}
            id="description"
            label="Descrição"
            className={classes.textFieldDesc}
            margin="normal" />
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField
            inputRef={node => price = node}
            id="price"
            label="Preço"
            placeholder="Ex.: 1,99"
            className={classes.textFieldPrice}
            margin="normal"
            InputProps={{
              startAdornment: <InputAdornment position="start">R$</InputAdornment>
            }} />
        </Grid>
        <Grid item xs={1}  md={1}>
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
