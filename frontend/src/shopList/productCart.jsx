import React, {Component} from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TablePagination from '@material-ui/core/TablePagination';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import DeleteIcon from '@material-ui/icons/Delete';
import Snackbar from '@material-ui/core/Snackbar';
import Hidden from '@material-ui/core/Hidden';
import TitlePage from '../common/template/header'
import {removeFromCart, countQuant} from './productActions'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  table: {
    minWidth: 700,
    marginTop: 20
  },
  textField: {
    width: 60
  },
  tableActions: {
    width: 150
  },
  close: {
    width: theme.spacing.unit * 4,
    height: theme.spacing.unit * 4,
  },
  button: {
    margin: theme.spacing.unit,
    width: '100%'
  },
  total: {
    justifyContent: 'center',
    marginTop: 20,
    fontSize: 24
  }
});

class ProductCart extends Component {

    constructor(props) {
        super(props)

        this.state = {
            page : 0,
            rowsPerPage : 5,
            open: false, 
            quant: 1
        }
    }

    handleChangePage = (event, page) => {
        this.setState({page})
    }

    handleChangeRowsPerPage = event => {
        this.setState({rowsPerPage: event.target.value})
    }

    handleClick = () => {
        this.setState({open: true})
    }

    handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return
        } 
        this.setState({open: false})
    }

    render() {
        const {classes} = this.props
        const { rowsPerPage, page } = this.state;
        const cart = this.props.cart || []
        let total = this.props.total
        const formato = {style: 'currency', currency: 'BRL'}

        return (
            <div>
            <TitlePage label='Meu Carrinho' />
              <Table className={classes.table}>
                <TableHead>
                  <TableRow>
                    <TableCell>Descrição</TableCell>
                    <TableCell numeric>Preço</TableCell>
                    <TableCell numeric>Quantidade</TableCell>
                    <TableCell numeric>Subtotal</TableCell>
                    <Hidden xsUp mdUp smUp lgUp xlUp>
                        <TableCell numeric>Total</TableCell>
                    </Hidden>
                    <TableCell>Ações</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {cart.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((ic, index) => {
                    return (
                    <TableRow key={index}>
                        <TableCell>{ic.description}</TableCell>
                        <TableCell numeric>{ic.price.toLocaleString('pt-BR', formato )}</TableCell>
                        <TableCell numeric>
                            <TextField
                                id='quant'
                                type="number"
                                value={ic.quantity}
                                onChange={(e) => this.props.countQuant(e, index, ic.quantity)}
                                className={classes.textField}
                                margin="normal" />
                        </TableCell>
                        <TableCell numeric>{(ic.price * ic.quantity).toLocaleString('pt-BR', formato )}</TableCell>
                        <Hidden xsUp mdUp smUp lgUp xlUp>
                            <TableCell numeric hidden>{total += ic.price * ic.quantity}</TableCell>
                        </Hidden>
                        <TableCell>
                            <IconButton className={classes.button} aria-label="Delete" onClick={() => this.props.removeFromCart(index) }>
                                <DeleteIcon />
                            </IconButton>
                        </TableCell>
                    </TableRow>
                    );
                })}
                </TableBody>
              </Table>
              <TablePagination
                component="div"
                count={cart.length}
                rowsPerPage={rowsPerPage}
                page={page}
                backIconButtonProps={{
                    'aria-label': 'Previous Page',
                }}
                nextIconButtonProps={{
                    'aria-label': 'Next Page',
                }}
                onChangePage={this.handleChangePage}
                onChangeRowsPerPage={this.handleChangeRowsPerPage}/>
                <Snackbar
                    anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                    }}
                    open={this.state.open}
                    autoHideDuration={6000}
                    onClose={this.handleClose}
                    ContentProps={{
                        'aria-describedby': 'message-id',
                     }}
                    message={<span id="message-id">Produto excluído.</span>}
                    action={[
                        <IconButton
                            key="close"
                            aria-label="Close"
                            color="inherit"
                            className={classes.close}
                            onClick={this.handleClose}>
                            <CloseIcon />
                        </IconButton>
                    ]}
                />
                <div className={classes.root}>
                    <Grid container spacing={24} justify='flex-end'>
                        <Grid item xs={12} md={3} className={classes.total}>
                            Total: {total.toLocaleString('pt-BR', formato )}
                        </Grid>
                    </Grid>
                    <Grid container spacing={24} justify='center'>
                        <Grid item xs={12} md={3}>
                            <Button variant="contained" color="primary" className={classes.button} disabled={!cart.length} >
                                Finalizar compra
                            </Button>
                        </Grid>
                    </Grid>
                </div>
            </div>
          );
    }
  
}

ProductCart.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({cart: state.shopList.cart, quantity: state.shopList.quantity, total: state.shopList.total})
const mapDispatchToProps = dispatch => bindActionCreators({removeFromCart, countQuant}, dispatch)
export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(ProductCart));
