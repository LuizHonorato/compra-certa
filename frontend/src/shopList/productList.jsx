import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {getList, getTotal} from './productActions'

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

class ProductList extends Component {

  componentWillMount() {
    this.props.getList()
    this.props.getTotal()
  }

  renderList() {
    const list = this.props.list || []
    const total = this.props.total
    console.log(total)
    return list.map(n => (
      <TableRow key={n._id}>
        <TableCell component="th" scope="row">
          {n.name_list}
        </TableCell>
        <TableCell numeric>{n.products.length}</TableCell>
        <TableCell numeric>{`R$ ${total[0]}`}</TableCell>
        <TableCell numeric>{n.carbs}</TableCell>
        <TableCell numeric>{n.protein}</TableCell>
    </TableRow>
    ))
  }

  render(){
  const { classes } = this.props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Nome</TableCell>
            <TableCell numeric>Qtde. Itens</TableCell>
            <TableCell numeric>Valor</TableCell>
            <TableCell numeric>Criada em</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.renderList()}
        </TableBody>
      </Table>
    </Paper>
  );
}}

ProductList.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({list: state.shopList.list, total: state.shopList.total})
const mapDispatchToProps = dispatch => bindActionCreators({getList, getTotal}, dispatch)
export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(ProductList));
