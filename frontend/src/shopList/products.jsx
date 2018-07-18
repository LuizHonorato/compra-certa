import React from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import ProductForm from './productForm'
import ProductList from './productList'
import ProductCart from './productCart'

const styles = {
  root: {
    flexGrow: 1,
    marginTop: 75
  }
  
};

function TabContainer(props) {
    return (
      <Typography component="div" style={{ padding: 8 * 3 }}>
        {props.children}
      </Typography>
    );
  }

class TabMenu extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes, cart } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="Incluir produtos" />
          <Tab label={`Meu carrinho (${cart.length})`} />
        </Tabs>
        {value === 0 && <TabContainer>
          <ProductForm />
          <ProductList /></TabContainer>}
        {value === 1 && <TabContainer>
          <ProductCart />
        </TabContainer>}
      </div>
    );
  }
}

TabMenu.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({cart: state.shopList.cart})
export default withStyles(styles)(connect(mapStateToProps, null)(TabMenu));
