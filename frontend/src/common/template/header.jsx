import React from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

export default props => (
    <div>
        <Grid container spacing={24}>
            <Grid item xs={12}>
                <Typography variant="display2" gutterBottom>{props.label}</Typography>
            </Grid>
        </Grid>
    </div>
)