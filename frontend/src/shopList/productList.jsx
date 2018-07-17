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
import DeleteIcon from '@material-ui/icons/Delete';
import CloseIcon from '@material-ui/icons/Close';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Snackbar from '@material-ui/core/Snackbar';
import {getList, remove} from './productActions'

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
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

class ProductList extends Component {

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
        const list = this.props.list || []

        return (
            <div>
              <Table className={classes.table}>
                <TableHead>
                  <TableRow>
                    <TableCell>Descrição</TableCell>
                    <TableCell numeric>Preço</TableCell>
                    <TableCell>Ações</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {list.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map(sp => {
                    return (
                    <TableRow key={sp._id}>
                        <TableCell>{sp.description}</TableCell>
                        <TableCell numeric>{`R$ ${sp.price}`}</TableCell>
                        <TableCell className={classes.tableActions}>
                            <IconButton color="primary" className={classes.buttonCar} aria-label="Add to shopping cart">
                                <AddShoppingCartIcon />
                            </IconButton>
                            <IconButton className={classes.buttonDelete} aria-label="Delete" onClick={() => [this.props.remove(sp), this.handleClick()] }>
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
                count={list.length}
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

ProductList.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({list: state.shopList.list})
const mapDispatchToProps = dispatch => bindActionCreators({getList, remove}, dispatch)
export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(ProductList));
