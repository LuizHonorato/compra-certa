import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import ProductForm from './productForm'

const styles = {
  root: {
    flexGrow: 1
  }
  
};

function TabContainer(props) {
    return (
      <Typography component="div" style={{ padding: 8 * 3, height: 450 }}>
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
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <Paper className={classes.root}>
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          indicatorColor="secondary"
          textColor="secondary"
          centered
        >
          <Tab label="Incluir produtos" />
          <Tab label="Meu carrinho" />
        </Tabs>
        {value === 0 && <TabContainer><ProductForm /></TabContainer>}
        {value === 1 && <TabContainer>Item Two</TabContainer>}
      </Paper>
    );
  }
}

TabMenu.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TabMenu);
