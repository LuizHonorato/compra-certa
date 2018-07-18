import React, {Component} from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TablePagination from '@material-ui/core/TablePagination';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Snackbar from '@material-ui/core/Snackbar';
import TitlePage from '../common/template/header'
import {getList, remove} from './productActions'

const styles = theme => ({
  table: {
    minWidth: 700,
    marginTop: 20
  },
  buttonDelete: {
    color: '#f44336'
  },
  buttonCar: {
      color: '#4caf50'
  },
  buttonEdit: {
    color: '#ffc107'
  },
  tableActions: {
    width: 150
  },
  close: {
    width: theme.spacing.unit * 4,
    height: theme.spacing.unit * 4,
  }
});

class ProductCart extends Component {

    constructor(props) {
        super(props)

        this.state = {
            page : 0,
            rowsPerPage : 5,
            open: false
        }
    }

    componentWillMount() {
        this.props.getList()
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
                  </TableRow>
                </TableHead>
                <TableBody>
                  {cart.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map(ic => {
                    return (
                    <TableRow key={ic._id}>
                        <TableCell>{ic.description}</TableCell>
                        <TableCell numeric>{`R$ ${ic.price}`}</TableCell>
                        <TableCell numeric></TableCell>
                        <TableCell numeric></TableCell>
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
            </div>
          );
    }
  
}

ProductCart.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({cart: state.shopList.cart})
const mapDispatchToProps = dispatch => bindActionCreators({getList, remove}, dispatch)
export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(ProductCart));
