import React from 'react'
import {Router, Route, Redirect, hashHistory} from 'react-router'

import Products from '../shopList/products'

export default props => (
    <Router history={hashHistory}>
        <Route path='/shop-list' component={Products} />
        <Redirect from='*' to='/shop-list' />
    </Router>
)