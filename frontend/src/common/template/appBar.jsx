import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const styles = {
    root: {
        flexGrow: 1
    },
    topbar: {
        background: '#4CAF50'
    }
}

function TopBar(props) {
    const {classes} = props
    return (
        <div className={classes.root}>
            <Grid container spacing={16}>
                <Grid item xs={12} sm={12} md={12}>
                    <AppBar position='absolute' className={classes.topbar}>
                        <Toolbar>
                            <Typography variant='title' color='inherit'>
                                Início
                            </Typography>
                        </Toolbar>
                    </AppBar>
                </Grid>
            </Grid>
        </div>
    )
}

TopBar.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(TopBar)