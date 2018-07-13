import {combineReducers} from 'redux'
import shoplists from '../shopList/productReducer'

const rootReducer = combineReducers({
    shoplists
})

export default rootReducer